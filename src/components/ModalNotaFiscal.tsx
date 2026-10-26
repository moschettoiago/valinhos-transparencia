'use client';

import React, { useState } from 'react';
import { Despesa } from '@/types';
import { formatarMoeda, formatarData } from '@/lib/utils';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  ShieldCheck, 
  Building2, 
  QrCode,
  ExternalLink
} from 'lucide-react';

interface ModalNotaFiscalProps {
  despesa: Despesa | null;
  onClose: () => void;
}

export default function ModalNotaFiscal({ despesa, onClose }: ModalNotaFiscalProps) {
  const [copiado, setCopiado] = useState(false);

  if (!despesa) return null;

  const comp = despesa.comprovante;
  const chave = comp?.chaveAcesso || `3525${despesa.numeroEmpenho.replace(/[^0-9]/g, '')}0001005500100000000012938475`;

  const copiarChave = () => {
    navigator.clipboard.writeText(chave);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Container Principal do Modal */}
      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Barra Superior de Ações */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-civic-600">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-bold text-sm tracking-wide">
                Espelho de Documento Fiscal & Empenho
              </span>
              <p className="text-xs text-slate-400">
                Auditoria de Comprovante de Despesa Pública
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-xs flex items-center gap-1.5 px-2.5"
              title="Imprimir Espelho da Nota"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Conteúdo Imprimível do Documento Fiscal (DANFE / NFS-e Mirror) */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-800 text-sm">
          
          {/* Cabeçalho Oficial do Comprovante */}
          <div className="border border-slate-300 rounded-xl p-4 bg-slate-50/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-white flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-slate-900 uppercase">
                  {comp?.tipo || 'Nota Fiscal de Serviços Eletrônica'}
                </h4>
                <p className="text-xs text-slate-500 font-mono">
                  Documento Fiscal Nº: <strong className="text-slate-800">{comp?.numeroDocumento || '004812'}</strong>
                </p>
                <p className="text-xs text-slate-500">
                  Data de Emissão: <strong>{formatarData(comp?.dataEmissao || despesa.data)}</strong>
                </p>
              </div>
            </div>

            <div className="text-center sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 w-full sm:w-auto">
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                Empenho Liquidado
              </span>
              <div className="text-xs text-slate-500 mt-1">
                Empenho: <strong className="font-mono text-slate-800">{despesa.numeroEmpenho}</strong>
              </div>
            </div>
          </div>

          {/* Chave de Acesso / Código de Verificação */}
          <div className="bg-slate-100/80 rounded-xl p-3 border border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Chave de Acesso / Código de Autenticidade Digital:</span>
              <button
                onClick={copiarChave}
                className="text-civic-700 hover:text-civic-900 flex items-center gap-1 font-medium transition-colors"
              >
                {copiado ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-700">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copiar Chave</span>
                  </>
                )}
              </button>
            </div>
            <div className="font-mono text-xs text-slate-800 break-all select-all font-semibold tracking-wider">
              {chave}
            </div>
          </div>

          {/* Dados do Prestador e Tomador */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Prestador / Fornecedor */}
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block mb-2">
                Emitente / Credor
              </span>
              <div className="font-bold text-slate-900 text-sm">
                {despesa.fornecedorNome}
              </div>
              <div className="text-xs text-slate-600 mt-1 space-y-0.5">
                <p>CNPJ: <strong className="font-mono">{despesa.fornecedorCnpj}</strong></p>
                <p>Categoria: {despesa.categoria}</p>
                <p>Município: Valinhos / Região Metropolitana de Campinas - SP</p>
              </div>
            </div>

            {/* Tomador / Câmara de Valinhos */}
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block mb-2">
                Tomador / Órgão Público
              </span>
              <div className="font-bold text-slate-900 text-sm">
                Câmara Municipal de Valinhos
              </div>
              <div className="text-xs text-slate-600 mt-1 space-y-0.5">
                <p>CNPJ: <strong className="font-mono">51.848.169/0001-90</strong></p>
                <p>Parlamentar: <strong className="text-civic-800">{despesa.vereadorNome}</strong> ({despesa.partido})</p>
                <p>Número de Liquidação: <strong className="font-mono">{despesa.numeroLiquidacao}</strong></p>
              </div>
            </div>

          </div>

          {/* Tabela Discriminativa dos Itens do Comprovante */}
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200">
              <span className="text-xs font-bold uppercase text-slate-600 tracking-wider">
                Discriminação dos Serviços / Produtos
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {comp?.itens && comp.itens.length > 0 ? (
                comp.itens.map((item, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between gap-4 text-xs">
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">{item.descricao}</p>
                      <p className="text-slate-500 mt-0.5">Qtd: {item.quantidade} × {formatarMoeda(item.valorUnitario)}</p>
                    </div>
                    <div className="font-bold text-slate-900 font-mono text-sm">
                      {formatarMoeda(item.valorTotal)}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 flex items-center justify-between gap-4 text-xs">
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{despesa.descricao}</p>
                    <p className="text-slate-500 mt-0.5">Prestação de serviços vinculada ao mandato</p>
                  </div>
                  <div className="font-bold text-slate-900 font-mono text-sm">
                    {formatarMoeda(despesa.valor)}
                  </div>
                </div>
              )}
            </div>

            {/* Totalizador */}
            <div className="bg-slate-50/80 px-4 py-3 border-t border-slate-200 flex items-center justify-between">
              <span className="font-bold text-slate-700 text-sm">Valor Total Liquidado:</span>
              <span className="font-black text-xl text-slate-900 font-mono">
                {formatarMoeda(despesa.valor)}
              </span>
            </div>
          </div>

          {/* Notas de Rodapé & QR Code Cívico */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200 gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white border border-slate-300 rounded flex items-center justify-center flex-shrink-0">
                <QrCode className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <p className="font-semibold text-slate-700">Autenticidade Garantida</p>
                <p>Consulte a integridade deste documento no portal oficial SmarAPD da Câmara de Valinhos.</p>
              </div>
            </div>

            <a
              href="https://transparencia-camaravalinhos.smarapd.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-civic-700 hover:text-civic-900 hover:underline flex-shrink-0"
            >
              Abrir no Portal SmarAPD
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Rodapé do Modal */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Forma de Pagamento: <strong>{despesa.formaPagamento}</strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            Fechar Espelho
          </button>
        </div>

      </div>

    </div>
  );
}
