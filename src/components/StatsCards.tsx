import React from 'react';
import { EstatisticasGerais } from '@/types';
import { formatarMoeda } from '@/lib/utils';
import { 
  DollarSign, 
  Users, 
  Receipt, 
  TrendingUp, 
  Building,
  AlertCircle
} from 'lucide-react';

interface StatsCardsProps {
  stats: EstatisticasGerais;
  anoSelecionado: number;
}

export default function StatsCards({ stats, anoSelecionado }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
      
      {/* 1. Total Gasto */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Total Liquidado ({anoSelecionado})
          </span>
          <div className="p-2.5 rounded-xl bg-civic-50 text-civic-700">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {formatarMoeda(stats.totalGasto)}
        </div>
        <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          Despesas comprovadas por notas e recibos
        </p>
      </div>

      {/* 2. Média por Gabinete */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Média por Gabinete
          </span>
          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700">
            <Users className="w-5 h-5" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {formatarMoeda(stats.mediaPorVereador)}
        </div>
        <p className="text-xs text-slate-500 mt-2">
          Entre os 19 vereadores da legislatura
        </p>
      </div>

      {/* 3. Comprovantes Auditados */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Documentos Fiscais
          </span>
          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700">
            <Receipt className="w-5 h-5" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {stats.totalNotas} <span className="text-base font-medium text-slate-400">comprovantes</span>
        </div>
        <p className="text-xs text-slate-500 mt-2">
          100% com espelho fiscal e número de empenho
        </p>
      </div>

      {/* 4. Maior Despesa Individual */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Maior Nota Única
          </span>
          <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-amber-900 tracking-tight">
          {formatarMoeda(stats.maiorDespesa.valor)}
        </div>
        <div className="text-xs text-slate-600 mt-2 truncate" title={`${stats.maiorDespesa.vereador} - ${stats.maiorDespesa.categoria}`}>
          <span className="font-semibold text-slate-900">{stats.maiorDespesa.vereador}</span>: {stats.maiorDespesa.categoria}
        </div>
      </div>

    </div>
  );
}
