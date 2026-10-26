import React from 'react';
import Link from 'next/link';
import { Shield, ExternalLink, Heart, BookOpen, Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-base">
                Transparência Valinhos - Civic Tech
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Iniciativa independente de controle social e tecnologia cívica para facilitar o acesso,
              compreensão e auditoria das notas fiscais e gastos dos parlamentares da Câmara Municipal de Valinhos/SP.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Scale className="w-3.5 h-3.5 text-civic-600" />
                Lei de Acesso à Informação (12.527/11)
              </span>
              <span>•</span>
              <span>Dados Abertos Governamentais</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
              Portais Governamentais
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a 
                  href="https://www.camaravalinhos.sp.gov.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-civic-700 inline-flex items-center gap-1 transition-colors"
                >
                  Câmara de Valinhos <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://transparencia-camaravalinhos.smarapd.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-civic-700 inline-flex items-center gap-1 transition-colors"
                >
                  Portal SmarAPD Transparência <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.tce.sp.gov.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-civic-700 inline-flex items-center gap-1 transition-colors"
                >
                  TCE-SP (Tribunal de Contas) <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
              Metodologia & Dados
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <span className="text-slate-700 font-medium">Prestação de Contas 2025/2026</span>
              </li>
              <li>
                <span className="text-slate-500 text-xs block">
                  Valores liquidados e comprovados por notas fiscais, cupons e empenhos públicos.
                </span>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                  Pronto para Vercel Serverless
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Transparência Valinhos. Plataforma sem fins lucrativos desenvolvida com tecnologias abertas.</p>
          <p className="flex items-center gap-1">
            Auditoria cidadã e controle social fortalecendo a democracia local.
          </p>
        </div>

      </div>
    </footer>
  );
}
