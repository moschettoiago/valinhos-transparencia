'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Vereador } from '@/types';
import { formatarMoeda, getCorPartido } from '@/lib/utils';
import { Search, Trophy, ArrowRight, User, Building, Mail, Phone } from 'lucide-react';

interface VereadoresRankingProps {
  vereadores: Vereador[];
}

export default function VereadoresRanking({ vereadores }: VereadoresRankingProps) {
  const [busca, setBusca] = useState('');
  const [filtroPartido, setFiltroPartido] = useState('TODOS');

  // Obter partidos únicos
  const partidos = ['TODOS', ...Array.from(new Set(vereadores.map(v => v.partido)))];

  // Maior gasto para calcular a barra proporcional de progresso
  const maxGasto = Math.max(...vereadores.map(v => v.totalGasto), 1);

  // Filtragem
  const vereadoresFiltrados = vereadores.filter(v => {
    const matchBusca = v.nome.toLowerCase().includes(busca.toLowerCase()) || 
                       v.nomeUrna.toLowerCase().includes(busca.toLowerCase()) ||
                       v.partido.toLowerCase().includes(busca.toLowerCase()) ||
                       v.gabinete.toLowerCase().includes(busca.toLowerCase());
    const matchPartido = filtroPartido === 'TODOS' || v.partido === filtroPartido;
    return matchBusca && matchPartido;
  });

  return (
    <div id="ranking" className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm mb-8">
      
      {/* Topo do Ranking com Filtros */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <h3 className="font-bold text-slate-900 text-xl flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            Ranking Geral de Gastos por Vereador
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Lista ordenada dos 19 parlamentares com seus totais acumulados no exercício
          </p>
        </div>

        {/* Barra de Busca e Filtro de Partido */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar vereador ou gabinete..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-civic-500 w-full sm:w-60 bg-slate-50"
            />
          </div>

          <select
            value={filtroPartido}
            onChange={(e) => setFiltroPartido(e.target.value)}
            className="py-1.5 px-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-civic-500 bg-slate-50 text-slate-700"
          >
            {partidos.map(p => (
              <option key={p} value={p}>{p === 'TODOS' ? 'Todos os Partidos' : p}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid de Vereadores Ranqueados */}
      <div className="divide-y divide-slate-100 mt-2">
        {vereadoresFiltrados.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-sm">
            Nenhum parlamentar encontrado para o filtro aplicado.
          </div>
        ) : (
          vereadoresFiltrados.map((vereador, idx) => {
            const cor = getCorPartido(vereador.partido);
            const posicao = idx + 1;
            const percentual = Math.round((vereador.totalGasto / maxGasto) * 100);

            return (
              <div 
                key={vereador.id} 
                className="py-4 hover:bg-slate-50/70 px-2 rounded-xl transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Posição + Avatar + Informações Básicas */}
                <div className="flex items-center gap-3 sm:gap-4 flex-1">
                  
                  {/* Medalha / Posição */}
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                    posicao === 1 ? 'bg-amber-100 text-amber-800 border border-amber-300' :
                    posicao === 2 ? 'bg-slate-200 text-slate-700' :
                    posicao === 3 ? 'bg-amber-50 text-amber-900 border border-amber-200' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {posicao}º
                  </span>

                  {/* Foto do Vereador */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-slate-200 flex-shrink-0">
                    <img
                      src={vereador.fotoUrl}
                      alt={vereador.nomeUrna}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Nome e Partidos */}
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Link 
                        href={`/vereador/${vereador.id}`}
                        className="font-bold text-slate-900 hover:text-civic-700 transition-colors text-base"
                      >
                        {vereador.nomeUrna}
                      </Link>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${cor.bg} ${cor.text} ${cor.border}`}>
                        {vereador.partido}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Building className="w-3 h-3 text-slate-400" />
                        {vereador.gabinete}
                      </span>
                      <span>•</span>
                      <span>{vereador.nome}</span>
                    </p>
                  </div>
                </div>

                {/* Barra de Progresso e Valor Total */}
                <div className="flex items-center justify-between md:justify-end gap-6 md:w-80">
                  <div className="w-32 hidden sm:block">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Proporção</span>
                      <span>{percentual}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-civic-600 h-2 rounded-full transition-all duration-500" 
                        style={{ width: `${percentual}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                      {formatarMoeda(vereador.totalGasto)}
                    </div>
                    <div className="text-xs text-slate-400">
                      Total liquidado
                    </div>
                  </div>

                  {/* Link Raio-X */}
                  <Link
                    href={`/vereador/${vereador.id}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-civic-700 bg-civic-50 hover:bg-civic-100 border border-civic-200 transition-all flex-shrink-0"
                  >
                    Raio-X
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
