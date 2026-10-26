import { NextRequest, NextResponse } from 'next/server';
import { getDespesas, getVereadores, getEstatisticasGerais } from '@/lib/data-service';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const ano = searchParams.get('ano') ? parseInt(searchParams.get('ano')!, 10) : undefined;
    const vereadorId = searchParams.get('vereador') || undefined;
    const categoria = searchParams.get('categoria') || undefined;
    const busca = searchParams.get('busca') || undefined;

    const [despesas, vereadores, stats] = await Promise.all([
      getDespesas({ ano, vereadorId, categoria, busca }),
      getVereadores(ano || 2025),
      getEstatisticasGerais(ano || 2025)
    ]);

    return NextResponse.json({
      meta: {
        orgao: 'Câmara Municipal de Valinhos/SP',
        portal: 'https://transparencia-camaravalinhos.smarapd.com.br',
        totalDespesas: despesas.length,
        timestamp: new Date().toISOString(),
        fonte: process.env.NEXT_PUBLIC_USE_MOCK === 'true' ? 'Dataset Demonstrativo Verossímil' : 'Live SmarAPD / TCE-SP'
      },
      estatisticas: stats,
      despesas,
      vereadores
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Falha ao recuperar despesas públicas', details: err?.message },
      { status: 500 }
    );
  }
}
