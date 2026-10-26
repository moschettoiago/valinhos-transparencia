'use client';

import React, { useState, useEffect } from 'react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  Legend, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid,
  AreaChart,
  Area
} from 'recharts';
import { EstatisticasGerais, Vereador } from '@/types';
import { formatarMoeda, getCorCategoria } from '@/lib/utils';
import { PieChart as PieIcon, BarChart2, TrendingUp } from 'lucide-react';

interface DespesasChartsProps {
  stats: EstatisticasGerais;
  vereadores: Vereador[];
}

export default function DespesasCharts({ stats, vereadores }: DespesasChartsProps) {
  const [mounted, setMounted] = useState(false);
  const [tabAtiva, setTabAtiva] = useState<'categoria' | 'mensal'>('categoria');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="h-80 bg-white rounded-2xl border border-slate-200 animate-pulse"></div>
        <div className="h-80 bg-white rounded-2xl border border-slate-200 animate-pulse"></div>
      </div>
    );
  }

  // Dados para o ranking Top 6 no gráfico de barras
  const topVereadores = vereadores.slice(0, 6).map(v => ({
    nome: v.nomeUrna,
    partido: v.partido,
    valor: v.totalGasto
  }));

  // Tooltip customizado para o Recharts
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-slate-900 text-white px-3 py-2 rounded-xl text-xs shadow-xl border border-slate-800">
          <p className="font-semibold">{data.name || data.payload.nome || data.payload.categoria}</p>
          <p className="text-civic-300 font-mono text-sm mt-0.5">
            {formatarMoeda(data.value)}
          </p>
          {data.payload.percentual !== undefined && (
            <p className="text-slate-400 mt-0.5">{data.payload.percentual}% do total</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      
      {/* Gráfico 1: Categorias ou Evolução Mensal */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div>
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <PieIcon className="w-4 h-4 text-civic-600" />
              Destinação dos Recursos
            </h3>
            <p className="text-xs text-slate-500">Distribuição por categoria contábil oficial</p>
          </div>
          
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-medium">
            <button
              onClick={() => setTabAtiva('categoria')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                tabAtiva === 'categoria' 
                  ? 'bg-white text-slate-900 shadow-sm font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Categorias
            </button>
            <button
              onClick={() => setTabAtiva('mensal')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                tabAtiva === 'mensal' 
                  ? 'bg-white text-slate-900 shadow-sm font-semibold' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Evolução Mensal
            </button>
          </div>
        </div>

        <div className="h-72 w-full">
          {tabAtiva === 'categoria' ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stats.gastosPorCategoria}
                  dataKey="total"
                  nameKey="categoria"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={3}
                >
                  {stats.gastosPorCategoria.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={getCorCategoria(entry.categoria)} 
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center"
                  iconType="circle"
                  wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stats.evolucaoMensal} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0284c7" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#0284c7" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="mes" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis 
                  stroke="#94a3b8" 
                  fontSize={11} 
                  tickLine={false}
                  tickFormatter={(val) => `R$ ${(val/1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="total" 
                  stroke="#0284c7" 
                  strokeWidth={2.5}
                  fillOpacity={1} 
                  fill="url(#colorTotal)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Gráfico 2: Maiores Gastos por Vereador */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
        <div className="mb-4">
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-civic-600" />
            Top 6 Gabinetes com Maiores Despesas
          </h3>
          <p className="text-xs text-slate-500">Total acumulado liquidado no exercício atual</p>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={topVereadores} 
              layout="vertical"
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
              <XAxis 
                type="number" 
                stroke="#94a3b8" 
                fontSize={11} 
                tickLine={false}
                tickFormatter={(val) => `R$ ${(val/1000).toFixed(0)}k`}
              />
              <YAxis 
                dataKey="nome" 
                type="category" 
                stroke="#475569" 
                fontSize={12} 
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="valor" 
                fill="#0c406e" 
                radius={[0, 6, 6, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
