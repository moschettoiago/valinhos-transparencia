import React from 'react';
import { getVereadores, getDespesas, getEstatisticasGerais } from '@/lib/data-service';
import StatsCards from '@/components/StatsCards';
import DespesasCharts from '@/components/DespesasCharts';
import FornecedoresAlert from '@/components/FornecedoresAlert';
import VereadoresRanking from '@/components/VereadoresRanking';
import DespesasTable from '@/components/DespesasTable';
import { Calendar, Info, ShieldCheck, Sparkles } from 'lucide-react';

interface HomePageProps {
  searchParams: {
    ano?: string;
  };
}

export const revalidate = 60; // ISR na Vercel a cada 60s

export default async function HomePage({ searchParams }: HomePageProps) {
  const ano = searchParams.ano ? parseInt(searchParams.ano, 10) : 2025;
  
  const [vereadores, despesas, stats] = await Promise.all([
    getVereadores(ano),
    getDespesas({ ano }),
    getEstatisticasGerais(ano)
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Banner Cívico de Introdução & Seletor de Exercício */}
      <div className="bg-gradient-to-r from-slate-900 via-civic-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        
        {/* Efeito sutil de background */}
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-civic-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-civic-200 backdrop-blur-sm border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-civic-400" />
              Portal Cívico de Transparência Legislativa
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Monitor de Despesas de Valinhos/SP
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Auditoria pública independente dos recursos parlamentares, notas fiscais anexas e concentração de fornecedores da Câmara Municipal.
            </p>
          </div>

          {/* Seletor de Exercício */}
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/15 flex flex-col sm:flex-row items-center gap-2 self-start md:self-auto">
            <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-civic-300" />
              Exercício:
            </span>
            <div className="flex items-center gap-1">
              <a
                href="/?ano=2025"
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  ano === 2025 
                    ? 'bg-white text-slate-900 shadow-md' 
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                2025 (Atual)
              </a>
              <a
                href="/?ano=2026"
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  ano === 2026 
                    ? 'bg-white text-slate-900 shadow-md' 
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                2026 (Projeção)
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* 1. Indicadores Principais (KPIs) */}
      <StatsCards stats={stats} anoSelecionado={ano} />

      {/* 2. Gráficos Analíticos de Categoria e Top Gastos */}
      <DespesasCharts stats={stats} vereadores={vereadores} />

      {/* 3. Alerta de Concentração de Fornecedores / Credores */}
      <FornecedoresAlert credores={stats.maioresCredores} />

      {/* 4. Ranking Geral dos Vereadores */}
      <VereadoresRanking vereadores={vereadores} />

      {/* 5. Tabela Completa de Despesas e Notas Fiscais */}
      <DespesasTable despesas={despesas} vereadores={vereadores} />

    </div>
  );
}
