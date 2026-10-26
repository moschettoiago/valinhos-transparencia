'use client';

import React, { useState } from 'react';
import { FornecedorConcentracao } from '@/types';
import { formatarMoeda } from '@/lib/utils';
import { AlertTriangle, Building2, ChevronDown, ChevronUp, ExternalLink, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

interface FornecedoresAlertProps {
  credores: FornecedorConcentracao[];
}

export default function FornecedoresAlert({ credores }: FornecedoresAlertProps) {
  const [expandido, setExpandido] = useState<string | null>(null);

  // Consideramos atenção para fornecedores que ultrapassam 10% do orçamento total registrado
  const fornecedoresAlerta = credores.slice(0, 4);

  const toggleExpand = (cnpj: string) => {
    setExpandido(expandido === cnpj ? null : cnpj);
  };

  return (
    <div id="fornecedores" className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-200">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">
              Painel de Concentração de Fornecedores & Credores
            </h3>
            <p className="text-xs text-slate-500">
              Mecanismo de controle social para identificar empresas com maior volume de repasses entre gabinetes
            </p>
          </div>
        </div>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 self-start sm:self-auto">
          Auditoria Automatizada
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {fornecedoresAlerta.map((f) => {
          const isExp = expandido === f.cnpj;
          const isHighConcentration = f.percentualDoTotal >= 15;

          return (
            <div 
              key={f.cnpj}
              className={`rounded-xl border p-4 transition-all ${
                isHighConcentration 
                  ? 'border-amber-200 bg-amber-50/30' 
                  : 'border-slate-200 bg-slate-50/50'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                      CNPJ: {f.cnpj}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {f.categoriaPrincipal}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mt-1.5 leading-snug">
                    {f.razaoSocial}
                  </h4>
                </div>
                <div className="text-right">
                  <div className="text-base font-extrabold text-slate-900">
                    {formatarMoeda(f.totalRecebido)}
                  </div>
                  <div className="text-xs font-semibold text-amber-700">
                    {f.percentualDoTotal}% do total
                  </div>
                </div>
              </div>

              {/* Barra de Concentração */}
              <div className="w-full bg-slate-200 rounded-full h-2 mt-3 overflow-hidden">
                <div 
                  className={`h-2 rounded-full ${
                    isHighConcentration ? 'bg-amber-500' : 'bg-civic-600'
                  }`}
                  style={{ width: `${Math.min(f.percentualDoTotal * 3, 100)}%` }}
                ></div>
              </div>

              {/* Botão de Expandir Gabinetes */}
              <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-600">
                  Contratado por <strong className="text-slate-900">{f.gabinetesContratantes.length} gabinete(s)</strong>
                </span>
                <button
                  onClick={() => toggleExpand(f.cnpj)}
                  className="text-civic-700 hover:text-civic-900 font-semibold flex items-center gap-1 transition-colors"
                >
                  {isExp ? 'Ocultar Detalhes' : 'Ver Gabinetes'}
                  {isExp ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Lista Expansível de Vereadores Contratantes */}
              {isExp && (
                <div className="mt-3 pt-3 border-t border-slate-200 space-y-2 bg-white rounded-lg p-3 text-xs">
                  <p className="font-semibold text-slate-700 mb-1">
                    Repasses detalhados por gabinete:
                  </p>
                  {f.gabinetesContratantes.map((gab) => (
                    <div key={gab.vereadorId} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-none">
                      <Link 
                        href={`/vereador/${gab.vereadorId}`}
                        className="text-civic-700 hover:underline font-medium flex items-center gap-1"
                      >
                        {gab.vereadorNome}
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </Link>
                      <div className="text-right">
                        <span className="font-semibold text-slate-900">{formatarMoeda(gab.valor)}</span>
                        <span className="text-slate-400 ml-1.5">({gab.percentual}%)</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}
