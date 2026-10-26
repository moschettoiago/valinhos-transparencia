'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ExternalLink, 
  ShieldCheck, 
  Database,
  BarChart3,
  Users,
  FileSpreadsheet
} from 'lucide-react';

export default function Header() {
  const isMock = process.env.NEXT_PUBLIC_USE_MOCK === 'true' || true;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Marca */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-tr from-slate-900 to-civic-700 flex items-center justify-center text-white shadow-md shadow-civic-500/20 group-hover:scale-105 transition-transform duration-200">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-civic-700 transition-colors">
                  Transparência Valinhos
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Civic Tech MVP
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Monitor Independente das Despesas da Câmara Municipal de Valinhos/SP
              </p>
            </div>
          </Link>

          {/* Navegação Desktop & Badges */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600">
              <Link 
                href="/#ranking" 
                className="px-3 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
              >
                <Users className="w-4 h-4 text-slate-400" />
                Vereadores
              </Link>
              <Link 
                href="/#despesas" 
                className="px-3 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
              >
                <FileSpreadsheet className="w-4 h-4 text-slate-400" />
                Notas & Empenhos
              </Link>
              <Link 
                href="/#fornecedores" 
                className="px-3 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
              >
                <BarChart3 className="w-4 h-4 text-slate-400" />
                Concentração
              </Link>
            </nav>

            {/* Status da Fonte de Dados */}
            <div className="flex items-center">
              <div 
                title="Padrão Provider/Service ativo. Dados sincronizados para alta disponibilidade na Vercel."
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
              >
                <Database className="w-3.5 h-3.5 text-civic-600 animate-pulse" />
                <span className="hidden sm:inline">Fonte:</span>
                <span className="font-semibold text-civic-800">
                  {isMock ? 'Dataset Verossímil (Mock)' : 'SmarAPD / TCE-SP Live'}
                </span>
              </div>
            </div>

            {/* Link Oficial do Portal */}
            <a
              href="https://transparencia-camaravalinhos.smarapd.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg transition-all"
            >
              <span className="hidden sm:inline">Portal Oficial</span>
              <ExternalLink className="w-3 h-3" />
            </a>

          </div>

        </div>
      </div>
    </header>
  );
}
