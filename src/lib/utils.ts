import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valor);
}

export function formatarData(dataIso: string): string {
  try {
    const [ano, mes, dia] = dataIso.split('-');
    if (!ano || !mes || !dia) return dataIso;
    return `${dia}/${mes}/${ano}`;
  } catch {
    return dataIso;
  }
}

export function getCorPartido(partido: string): { bg: string; text: string; border: string } {
  const p = partido.toUpperCase().trim();
  switch (p) {
    case 'PL':
      return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' };
    case 'PT':
      return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' };
    case 'PSB':
      return { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-300' };
    case 'PSDB':
      return { bg: 'bg-sky-100', text: 'text-sky-800', border: 'border-sky-300' };
    case 'MDB':
      return { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-300' };
    case 'REPUBLICANOS':
      return { bg: 'bg-indigo-100', text: 'text-indigo-800', border: 'border-indigo-300' };
    case 'PSD':
      return { bg: 'bg-teal-100', text: 'text-teal-800', border: 'border-teal-300' };
    case 'PRD':
      return { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300' };
    case 'UNIÃO BRASIL':
    case 'UNIAO BRASIL':
      return { bg: 'bg-cyan-100', text: 'text-cyan-800', border: 'border-cyan-300' };
    case 'CIDADANIA':
      return { bg: 'bg-rose-100', text: 'text-rose-800', border: 'border-rose-300' };
    default:
      return { bg: 'bg-slate-100', text: 'text-slate-800', border: 'border-slate-300' };
  }
}

export function getCorCategoria(categoria: string): string {
  switch (categoria) {
    case 'Combustíveis e Lubrificantes':
      return '#f97316'; // orange-500
    case 'Divulgação da Atividade Parlamentar':
      return '#0284c7'; // sky-600
    case 'Consultorias e Assessorias':
      return '#8b5cf6'; // violet-500
    case 'Material de Consumo e Expediente':
      return '#10b981'; // emerald-500
    case 'Passagens e Diárias de Viagem':
      return '#eab308'; // yellow-500
    case 'Locação de Equipamentos e Software':
      return '#06b6d4'; // cyan-500
    case 'Serviços Postais e Telefonia':
      return '#ec4899'; // pink-500
    default:
      return '#64748b'; // slate-500
  }
}
