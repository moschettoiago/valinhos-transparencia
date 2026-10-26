import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getVereadorById, getDespesas, getVereadores, getConcentracaoFornecedores } from '@/lib/data-service';
import { formatarMoeda, getCorPartido, getCorCategoria } from '@/lib/utils';
import DespesasTable from '@/components/DespesasTable';
import { 
  ArrowLeft, 
  Building, 
  Mail, 
  Phone, 
  Calendar, 
  DollarSign, 
  FileText, 
  PieChart as PieIcon,
  ShieldAlert,
  Clock,
  Sparkles
} from 'lucide-react';

interface VereadorPageProps {
  params: {
    id: string;
  };
}

export const revalidate = 60;

export default async function VereadorPage({ params }: VereadorPageProps) {
  const vereador = await getVereadorById(params.id);

  if (!vereador) {
    notFound();
  }

  const [todosVereadores, despesasDoVereador, fornecedoresDoGabinete] = await Promise.all([
    getVereadores(),
    getDespesas({ vereadorId: vereador.id }),
    getConcentracaoFornecedores(vereador.id)
  ]);

  const posicaoRanking = todosVereadores.findIndex(v => v.id === vereador.id) + 1;
  const corPartido = getCorPartido(vereador.partido);

  // Agrupamento por Categoria para o Raio-X
  const categoriasMap: Record<string, number> = {};
  for (const d of despesasDoVereador) {
    categoriasMap[d.categoria] = (categoriasMap[d.categoria] || 0) + d.valor;
  }
  const categoriasDoVereador = Object.entries(categoriasMap).map(([cat, val]) => ({
    categoria: cat,
    valor: val,
    percentual: vereador.totalGasto > 0 ? Math.round((val / vereador.totalGasto) * 100) : 0
  })).sort((a, b) => b.valor - a.valor);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Botão de Voltar ao Dashboard */}
      <div>
        <Link 
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3.5 py-2 rounded-xl transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Ranking Geral de Valinhos
        </Link>
      </div>

      {/* Cartão de Identidade / Raio-X do Vereador */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm relative overflow-hidden">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Foto Oficial */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 border-slate-100 shadow-md flex-shrink-0 bg-slate-200">
              <img
                src={vereador.fotoUrl}
                alt={vereador.nomeUrna}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Informações Pessoais e Institucionais */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {vereador.nomeUrna}
                </h1>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${corPartido.bg} ${corPartido.text} ${corPartido.border}`}>
                  {vereador.partido}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                  {posicaoRanking}º no Ranking de Gastos
                </span>
              </div>

              <p className="text-sm font-medium text-slate-500">
                {vereador.nome} • {vereador.cargo}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
                <span className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  {vereador.gabinete}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Mandato {vereador.mandato}
                </span>
                {vereador.telefone && (
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    {vereador.telefone}
                  </span>
                )}
                <span className="flex items-center gap-1.5 text-civic-700">
                  <Mail className="w-3.5 h-3.5 text-civic-600" />
                  {vereador.email}
                </span>
              </div>
            </div>
          </div>

          {/* Valor Total Gasto pelo Gabinete */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-right w-full md:w-auto">
            <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider block">
              Total Liquidado pelo Gabinete
            </span>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1 font-mono">
              {formatarMoeda(vereador.totalGasto)}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {despesasDoVereador.length} documento(s) fiscal(is) auditados
            </p>
          </div>

        </div>

        {/* Biografia / Contexto */}
        {vereador.biografia && (
          <div className="mt-5 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50 p-4 rounded-xl border border-slate-100">
            <strong className="text-slate-800">Foco de Atuação Parlamentar: </strong>
            {vereador.biografia}
          </div>
        )}

      </div>

      {/* Grid de Análise do Gabinete: Categorias e Concentração de Fornecedores */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* 1. Categorias de Gastos deste Gabinete */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 mb-1">
              <PieIcon className="w-4 h-4 text-civic-600" />
              Destinação de Recursos do Gabinete
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Percentual gasto por categoria neste mandato
            </p>

            <div className="space-y-3">
              {categoriasDoVereador.length === 0 ? (
                <p className="text-xs text-slate-400">Nenhuma despesa registrada.</p>
              ) : (
                categoriasDoVereador.map(c => (
                  <div key={c.categoria} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-800">{c.categoria}</span>
                      <span className="font-bold text-slate-900 font-mono">
                        {formatarMoeda(c.valor)} <span className="text-slate-400 font-normal">({c.percentual}%)</span>
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-2 rounded-full"
                        style={{ 
                          width: `${c.percentual}%`,
                          backgroundColor: getCorCategoria(c.categoria)
                        }}
                      ></div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* 2. Concentração de Fornecedores do Gabinete */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="w-4 h-4 text-amber-500" />
            <h3 className="font-bold text-slate-900 text-base">
              Principais Empresas Credoras
            </h3>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            Empresas que mais receberam recursos deste parlamentar
          </p>

          <div className="space-y-3">
            {fornecedoresDoGabinete.length === 0 ? (
              <p className="text-xs text-slate-400">Nenhum credor registrado.</p>
            ) : (
              fornecedoresDoGabinete.slice(0, 4).map(f => (
                <div key={f.cnpj} className="p-3 rounded-xl border border-slate-100 bg-slate-50/70 text-xs">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-bold text-slate-900">{f.razaoSocial}</p>
                      <p className="text-slate-400 font-mono text-[11px] mt-0.5">CNPJ: {f.cnpj}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-900 font-mono text-sm">
                        {formatarMoeda(f.totalRecebido)}
                      </div>
                      <div className="text-[11px] text-amber-700 font-semibold">
                        {f.percentualDoTotal}% do gabinete
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

      {/* Linha do Tempo & Tabela de Despesas com Comprovantes do Gabinete */}
      <DespesasTable 
        despesas={despesasDoVereador} 
        vereadores={todosVereadores} 
        filtroVereadorFixo={vereador.id}
      />

    </div>
  );
}
