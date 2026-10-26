'use client';

import React, { useState } from 'react';
import { Despesa, Vereador, CategoriaDespesa } from '@/types';
import { formatarMoeda, formatarData, getCorCategoria, getCorPartido } from '@/lib/utils';
import { 
  Search, 
  Filter, 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  Download,
  Building,
  Calendar,
  Layers
} from 'lucide-react';
import ModalNotaFiscal from './ModalNotaFiscal';
import Link from 'next/link';

interface DespesasTableProps {
  despesas: Despesa[];
  vereadores: Vereador[];
  filtroVereadorFixo?: string; // Usado na página individual do vereador
}

export default function DespesasTable({ despesas, vereadores, filtroVereadorFixo }: DespesasTableProps) {
  const [busca, setBusca] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('TODAS');
  const [vereadorFiltro, setVereadorFiltro] = useState<string>(filtroVereadorFixo || 'TODOS');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [despesaSelecionada, setDespesaSelecionada] = useState<Despesa | null>(null);

  const ITENS_POR_PAGINA = 8;

  // Lista de categorias disponíveis
  const categorias: ('TODAS' | CategoriaDespesa)[] = [
    'TODAS',
    'Combustíveis e Lubrificantes',
    'Divulgação da Atividade Parlamentar',
    'Consultorias e Assessorias',
    'Material de Consumo e Expediente',
    'Passagens e Diárias de Viagem',
    'Locação de Equipamentos e Software',
    'Serviços Postais e Telefonia',
    'Outros Serviços de Terceiros'
  ];

  // Filtragem dos dados
  const despesasFiltradas = despesas.filter(d => {
    // Filtro de vereador fixo ou do select
    if (filtroVereadorFixo && d.vereadorId !== filtroVereadorFixo) return false;
    if (!filtroVereadorFixo && vereadorFiltro !== 'TODOS' && d.vereadorId !== vereadorFiltro) return false;

    // Filtro de categoria
    if (categoriaFiltro !== 'TODAS' && d.categoria !== categoriaFiltro) return false;

    // Busca textual
    if (busca.trim()) {
      const q = busca.toLowerCase();
      const matchFornec = d.fornecedorNome.toLowerCase().includes(q);
      const matchCnpj = d.fornecedorCnpj.includes(q);
      const matchDesc = d.descricao.toLowerCase().includes(q);
      const matchEmp = d.numeroEmpenho.toLowerCase().includes(q);
      const matchVer = d.vereadorNome.toLowerCase().includes(q);
      if (!matchFornec && !matchCnpj && !matchDesc && !matchEmp && !matchVer) {
        return false;
      }
    }

    return true;
  });

  // Paginação
  const totalPaginas = Math.ceil(despesasFiltradas.length / ITENS_POR_PAGINA) || 1;
  const indexInicial = (paginaAtual - 1) * ITENS_POR_PAGINA;
  const despesasPaginadas = despesasFiltradas.slice(indexInicial, indexInicial + ITENS_POR_PAGINA);

  // Exportar dados filtrados em CSV
  const exportarCSV = () => {
    const headers = 'Data,Empenho,Liquidacao,Vereador,Partido,Categoria,Fornecedor,CNPJ,Valor,Descricao\n';
    const rows = despesasFiltradas.map(d => 
      `"${d.data}","${d.numeroEmpenho}","${d.numeroLiquidacao}","${d.vereadorNome}","${d.partido}","${d.categoria}","${d.fornecedorNome}","${d.fornecedorCnpj}","${d.valor}","${d.descricao.replace(/"/g, '""')}"`
    ).join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `despesas-camara-valinhos-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="despesas" className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm mb-8">
      
      {/* Topo: Título e Exportação */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <h3 className="font-bold text-slate-900 text-xl flex items-center gap-2">
            <Layers className="w-5 h-5 text-civic-600" />
            Livro de Empenhos & Notas Fiscais Auditáveis
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            {despesasFiltradas.length} despesa(s) localizada(s) com comprovantes fiscais vinculados
          </p>
        </div>

        <button
          onClick={exportarCSV}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors self-start sm:self-auto border border-slate-200"
        >
          <Download className="w-3.5 h-3.5" />
          Exportar CSV (Dados Abertos)
        </button>
      </div>

      {/* Painel de Filtros Avançados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-4 border-b border-slate-100">
        
        {/* Busca Textual */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar fornecedor, CNPJ, empenho ou item..."
            value={busca}
            onChange={(e) => {
              setBusca(e.target.value);
              setPaginaAtual(1);
            }}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-civic-500 bg-slate-50"
          />
        </div>

        {/* Filtro por Categoria */}
        <div>
          <select
            value={categoriaFiltro}
            onChange={(e) => {
              setCategoriaFiltro(e.target.value);
              setPaginaAtual(1);
            }}
            className="w-full py-2 px-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-civic-500 bg-slate-50 text-slate-700"
          >
            {categorias.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'TODAS' ? 'Todas as Categorias de Gastos' : cat}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por Vereador (se não for página fixa) */}
        {!filtroVereadorFixo && (
          <div>
            <select
              value={vereadorFiltro}
              onChange={(e) => {
                setVereadorFiltro(e.target.value);
                setPaginaAtual(1);
              }}
              className="w-full py-2 px-3 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-civic-500 bg-slate-50 text-slate-700"
            >
              <option value="TODOS">Todos os Gabinetes (19 Vereadores)</option>
              {vereadores.map(v => (
                <option key={v.id} value={v.id}>
                  {v.nomeUrna} ({v.partido})
                </option>
              ))}
            </select>
          </div>
        )}

      </div>

      {/* Tabela de Despesas */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 font-semibold bg-slate-50/50">
              <th className="py-3 px-3">Data</th>
              <th className="py-3 px-3">Vereador / Gabinete</th>
              <th className="py-3 px-3">Categoria & Descrição</th>
              <th className="py-3 px-3">Fornecedor / Credor</th>
              <th className="py-3 px-3 text-right">Valor</th>
              <th className="py-3 px-3 text-center">Comprovante</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {despesasPaginadas.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-slate-500">
                  Nenhuma despesa localizada com os filtros atuais.
                </td>
              </tr>
            ) : (
              despesasPaginadas.map(d => {
                const corP = getCorPartido(d.partido);

                return (
                  <tr key={d.id} className="hover:bg-slate-50/80 transition-colors">
                    
                    {/* Data e Empenho */}
                    <td className="py-3 px-3 whitespace-nowrap">
                      <div className="font-semibold text-slate-900">{formatarData(d.data)}</div>
                      <div className="text-slate-400 font-mono text-[11px] mt-0.5">{d.numeroEmpenho}</div>
                    </td>

                    {/* Vereador */}
                    <td className="py-3 px-3 whitespace-nowrap">
                      <Link 
                        href={`/vereador/${d.vereadorId}`}
                        className="font-bold text-slate-900 hover:text-civic-700 transition-colors block"
                      >
                        {d.vereadorNome}
                      </Link>
                      <span className={`inline-block mt-0.5 px-2 py-0.2 rounded-full text-[10px] font-bold border ${corP.bg} ${corP.text} ${corP.border}`}>
                        {d.partido}
                      </span>
                    </td>

                    {/* Categoria e Descrição */}
                    <td className="py-3 px-3 max-w-xs sm:max-w-md">
                      <span 
                        className="inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold text-white mb-1"
                        style={{ backgroundColor: getCorCategoria(d.categoria) }}
                      >
                        {d.categoria}
                      </span>
                      <p className="text-slate-700 text-xs line-clamp-2 leading-relaxed">
                        {d.descricao}
                      </p>
                    </td>

                    {/* Fornecedor */}
                    <td className="py-3 px-3">
                      <div className="font-semibold text-slate-900 line-clamp-1">
                        {d.fornecedorNome}
                      </div>
                      <div className="text-slate-400 font-mono text-[11px]">
                        CNPJ: {d.fornecedorCnpj}
                      </div>
                    </td>

                    {/* Valor */}
                    <td className="py-3 px-3 text-right whitespace-nowrap">
                      <span className="font-extrabold text-slate-900 font-mono text-sm sm:text-base">
                        {formatarMoeda(d.valor)}
                      </span>
                      <div className="text-[10px] text-slate-400">{d.formaPagamento}</div>
                    </td>

                    {/* Ação: Ver Comprovante */}
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <button
                        onClick={() => setDespesaSelecionada(d)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-civic-700 bg-civic-50 hover:bg-civic-100 border border-civic-200 transition-colors"
                        title="Ver espelho da Nota Fiscal"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        Ver NF
                      </button>
                    </td>

                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      {totalPaginas > 1 && (
        <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-4 text-xs text-slate-600">
          <div>
            Página <strong className="text-slate-900">{paginaAtual}</strong> de <strong className="text-slate-900">{totalPaginas}</strong>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPaginaAtual(p => Math.max(p - 1, 1))}
              disabled={paginaAtual === 1}
              className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPaginaAtual(p => Math.min(p + 1, totalPaginas))}
              disabled={paginaAtual === totalPaginas}
              className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Modal de Espelho de Nota Fiscal */}
      {despesaSelecionada && (
        <ModalNotaFiscal
          despesa={despesaSelecionada}
          onClose={() => setDespesaSelecionada(null)}
        />
      )}

    </div>
  );
}
