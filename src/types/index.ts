export type CategoriaDespesa =
  | 'Combustíveis e Lubrificantes'
  | 'Divulgação da Atividade Parlamentar'
  | 'Consultorias e Assessorias'
  | 'Material de Consumo e Expediente'
  | 'Passagens e Diárias de Viagem'
  | 'Serviços Postais e Telefonia'
  | 'Locação de Equipamentos e Software'
  | 'Outros Serviços de Terceiros';

export interface Vereador {
  id: string;
  nome: string;
  nomeUrna: string;
  partido: string;
  cargo: string;
  gabinete: string;
  telefone?: string;
  email: string;
  fotoUrl: string;
  totalGasto: number;
  mandato: string;
  ativo: boolean;
  biografia?: string;
}

export interface ItemComprovante {
  descricao: string;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
}

export interface Comprovante {
  id: string;
  despesaId: string;
  numeroDocumento: string;
  tipo: 'NF-e' | 'NFS-e' | 'Recibo' | 'Cupom Fiscal' | 'Ordem de Pagamento' | 'Bilhete' | 'Bilhete de Passagem';
  dataEmissao: string;
  chaveAcesso?: string;
  linkPdf?: string;
  cnpjEmissor: string;
  razaoSocialEmissor: string;
  valor: number;
  itens: ItemComprovante[];
  codigoVerificacao?: string;
  observacoes?: string;
}

export interface Despesa {
  id: string;
  vereadorId: string;
  vereadorNome: string;
  partido: string;
  data: string;
  ano: number;
  mes: number;
  numeroEmpenho: string;
  numeroLiquidacao: string;
  categoria: CategoriaDespesa;
  descricao: string;
  valor: number;
  fornecedorNome: string;
  fornecedorCnpj: string;
  formaPagamento: 'Transferência Bancária' | 'Ordem de Pagamento' | 'PIX Tesouro' | 'Boleto Liquidado';
  comprovante?: Comprovante;
}

export interface CategoriaGastoAgg {
  categoria: CategoriaDespesa;
  total: number;
  percentual: number;
  quantidade: number;
}

export interface MesGastoAgg {
  mes: string;
  mesNum: number;
  total: number;
}

export interface FornecedorConcentracao {
  cnpj: string;
  razaoSocial: string;
  categoriaPrincipal: string;
  totalRecebido: number;
  percentualDoTotal: number;
  quantidadeTransacoes: number;
  gabinetesContratantes: {
    vereadorId: string;
    vereadorNome: string;
    valor: number;
    percentual: number;
  }[];
}

export interface EstatisticasGerais {
  totalGasto: number;
  mediaPorVereador: number;
  totalNotas: number;
  maiorDespesa: {
    valor: number;
    vereador: string;
    fornecedor: string;
    categoria: string;
    data: string;
  };
  gastosPorCategoria: CategoriaGastoAgg[];
  evolucaoMensal: MesGastoAgg[];
  maioresCredores: FornecedorConcentracao[];
}

export interface FiltrosDespesa {
  ano?: number;
  vereadorId?: string;
  categoria?: string;
  busca?: string;
  mes?: number;
  valorMin?: number;
  valorMax?: number;
}
