import { 
  Vereador, 
  Despesa, 
  EstatisticasGerais, 
  FiltrosDespesa, 
  FornecedorConcentracao,
  CategoriaGastoAgg,
  MesGastoAgg,
  CategoriaDespesa
} from '@/types';
import { DESPESAS_MOCK, getVereadoresComTotais, VEREADORES_VALINHOS } from './mock-data';
import { valinhosScraper } from './scraper/valinhos';

/**
 * Service Layer para consumo de dados públicos de despesas da Câmara de Valinhos.
 * Respeita a flag NEXT_PUBLIC_USE_MOCK / USE_MOCK para deploy sem dependência de portas abertas.
 */

export const isMockEnabled = (): boolean => {
  const envVal = process.env.NEXT_PUBLIC_USE_MOCK || process.env.USE_MOCK;
  return envVal === 'true' || envVal === '1' || envVal === undefined;
};

export async function getVereadores(ano: number = 2025): Promise<Vereador[]> {
  let vereadores: Vereador[];

  if (isMockEnabled()) {
    vereadores = getVereadoresComTotais();
  } else {
    try {
      vereadores = await valinhosScraper.fetchVereadores();
    } catch {
      vereadores = getVereadoresComTotais();
    }
  }

  // Recalcular totais com base nas despesas do ano solicitado
  const despesasDoAno = (await getDespesas({ ano }));
  const totaisMap: Record<string, number> = {};

  for (const d of despesasDoAno) {
    totaisMap[d.vereadorId] = (totaisMap[d.vereadorId] || 0) + d.valor;
  }

  return vereadores.map(v => ({
    ...v,
    totalGasto: Number((totaisMap[v.id] || 0).toFixed(2))
  })).sort((a, b) => b.totalGasto - a.totalGasto);
}

export async function getVereadorById(id: string): Promise<Vereador | null> {
  const vereadores = await getVereadores();
  const vereador = vereadores.find(v => v.id === id);
  if (vereador) return vereador;

  // Fallback caso não esteja na lista ranqueada inicial
  const fallback = VEREADORES_VALINHOS.find(v => v.id === id);
  return fallback || null;
}

export async function getDespesas(filtros: FiltrosDespesa = {}): Promise<Despesa[]> {
  let base: Despesa[];

  if (isMockEnabled()) {
    base = DESPESAS_MOCK;
  } else {
    try {
      base = await valinhosScraper.fetchDespesas({ ano: filtros.ano });
    } catch {
      base = DESPESAS_MOCK;
    }
  }

  return base.filter(d => {
    if (filtros.ano && d.ano !== filtros.ano) return false;
    if (filtros.vereadorId && d.vereadorId !== filtros.vereadorId) return false;
    if (filtros.categoria && d.categoria !== filtros.categoria) return false;
    if (filtros.mes && d.mes !== filtros.mes) return false;
    if (filtros.valorMin !== undefined && d.valor < filtros.valorMin) return false;
    if (filtros.valorMax !== undefined && d.valor > filtros.valorMax) return false;
    if (filtros.busca) {
      const q = filtros.busca.toLowerCase();
      const matchDesc = d.descricao.toLowerCase().includes(q);
      const matchFornec = d.fornecedorNome.toLowerCase().includes(q);
      const matchCnpj = d.fornecedorCnpj.includes(q);
      const matchEmp = d.numeroEmpenho.toLowerCase().includes(q);
      const matchVer = d.vereadorNome.toLowerCase().includes(q);
      if (!matchDesc && !matchFornec && !matchCnpj && !matchEmp && !matchVer) {
        return false;
      }
    }
    return true;
  }).sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
}

export async function getEstatisticasGerais(ano: number = 2025): Promise<EstatisticasGerais> {
  const despesas = await getDespesas({ ano });
  const vereadores = await getVereadores(ano);

  const totalGasto = despesas.reduce((acc, curr) => acc + curr.valor, 0);
  const totalNotas = despesas.length;
  const mediaPorVereador = vereadores.length > 0 ? totalGasto / vereadores.length : 0;

  // Maior despesa
  let maior = {
    valor: 0,
    vereador: 'Nenhum',
    fornecedor: 'Nenhum',
    categoria: 'Nenhuma',
    data: ''
  };

  for (const d of despesas) {
    if (d.valor > maior.valor) {
      maior = {
        valor: d.valor,
        vereador: d.vereadorNome,
        fornecedor: d.fornecedorNome,
        categoria: d.categoria,
        data: d.data
      };
    }
  }

  // Agrupamento por Categoria
  const catMap: Record<string, { total: number; count: number }> = {};
  for (const d of despesas) {
    if (!catMap[d.categoria]) {
      catMap[d.categoria] = { total: 0, count: 0 };
    }
    catMap[d.categoria].total += d.valor;
    catMap[d.categoria].count += 1;
  }

  const gastosPorCategoria: CategoriaGastoAgg[] = Object.entries(catMap).map(([cat, data]) => ({
    categoria: cat as CategoriaDespesa,
    total: Number(data.total.toFixed(2)),
    percentual: totalGasto > 0 ? Number(((data.total / totalGasto) * 100).toFixed(1)) : 0,
    quantidade: data.count
  })).sort((a, b) => b.total - a.total);

  // Evolução Mensal
  const mesesNomes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const mesMap: Record<number, number> = {};
  for (const d of despesas) {
    mesMap[d.mes] = (mesMap[d.mes] || 0) + d.valor;
  }

  const evolucaoMensal: MesGastoAgg[] = Object.entries(mesMap).map(([mNum, tot]) => {
    const num = Number(mNum);
    return {
      mes: mesesNomes[num - 1] || `Mês ${num}`,
      mesNum: num,
      total: Number(tot.toFixed(2))
    };
  }).sort((a, b) => a.mesNum - b.mesNum);

  // Maiores credores / Fornecedores concentrados
  const maioresCredores = await getConcentracaoFornecedores();

  return {
    totalGasto: Number(totalGasto.toFixed(2)),
    mediaPorVereador: Number(mediaPorVereador.toFixed(2)),
    totalNotas,
    maiorDespesa: maior,
    gastosPorCategoria,
    evolucaoMensal,
    maioresCredores
  };
}

export async function getConcentracaoFornecedores(vereadorId?: string): Promise<FornecedorConcentracao[]> {
  const despesas = await getDespesas(vereadorId ? { vereadorId } : {});
  const totalOrcamento = despesas.reduce((acc, curr) => acc + curr.valor, 0);

  const fornecMap: Record<string, {
    razaoSocial: string;
    categoria: string;
    total: number;
    count: number;
    gabinetes: Record<string, { nome: string; valor: number }>;
  }> = {};

  for (const d of despesas) {
    if (!fornecMap[d.fornecedorCnpj]) {
      fornecMap[d.fornecedorCnpj] = {
        razaoSocial: d.fornecedorNome,
        categoria: d.categoria,
        total: 0,
        count: 0,
        gabinetes: {}
      };
    }
    const curr = fornecMap[d.fornecedorCnpj];
    curr.total += d.valor;
    curr.count += 1;

    if (!curr.gabinetes[d.vereadorId]) {
      curr.gabinetes[d.vereadorId] = { nome: d.vereadorNome, valor: 0 };
    }
    curr.gabinetes[d.vereadorId].valor += d.valor;
  }

  return Object.entries(fornecMap).map(([cnpj, data]) => {
    const gabinetesContratantes = Object.entries(data.gabinetes).map(([vId, vData]) => ({
      vereadorId: vId,
      vereadorNome: vData.nome,
      valor: Number(vData.valor.toFixed(2)),
      percentual: data.total > 0 ? Number(((vData.valor / data.total) * 100).toFixed(1)) : 0
    })).sort((a, b) => b.valor - a.valor);

    return {
      cnpj,
      razaoSocial: data.razaoSocial,
      categoriaPrincipal: data.categoria,
      totalRecebido: Number(data.total.toFixed(2)),
      percentualDoTotal: totalOrcamento > 0 ? Number(((data.total / totalOrcamento) * 100).toFixed(1)) : 0,
      quantidadeTransacoes: data.count,
      gabinetesContratantes
    };
  }).sort((a, b) => b.totalRecebido - a.totalRecebido);
}
