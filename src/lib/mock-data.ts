import { Vereador, Despesa, Comprovante, CategoriaDespesa } from '@/types';

// ============================================================================
// VEREADORES REAIS DA CÂMARA MUNICIPAL DE VALINHOS/SP (LEGISLATURA ATUAL)
// ============================================================================
export const VEREADORES_VALINHOS: Vereador[] = [
  {
    id: 'andre-amaral',
    nome: 'André Amaral dos Santos',
    nomeUrna: 'André Amaral',
    partido: 'PL',
    cargo: 'Vereador',
    gabinete: 'Gabinete 01',
    telefone: '(19) 3829-5301',
    email: 'andre.amaral@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Atua com foco em desenvolvimento econômico, fiscalização das contas municipais e infraestrutura urbana em Valinhos.'
  },
  {
    id: 'alecio-cau',
    nome: 'Alécio Cau',
    nomeUrna: 'Alécio Cau',
    partido: 'PSB',
    cargo: 'Vereador',
    gabinete: 'Gabinete 05',
    telefone: '(19) 3829-5305',
    email: 'alecio.cau@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Defensor da transparência pública, pautas sociais, meio ambiente e planejamento urbano sustentável.'
  },
  {
    id: 'monica-morandi',
    nome: 'Mônica Morandi',
    nomeUrna: 'Mônica Morandi',
    partido: 'PSDB',
    cargo: 'Vereadora',
    gabinete: 'Gabinete 03',
    telefone: '(19) 3829-5303',
    email: 'monica.morandi@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Comprometida com a saúde pública, causa animal, educação inclusiva e defesa dos direitos das mulheres.'
  },
  {
    id: 'marcelo-yoshida',
    nome: 'Marcelo Yoshida',
    nomeUrna: 'Prof. Marcelo Yoshida',
    partido: 'PT',
    cargo: 'Vereador',
    gabinete: 'Gabinete 06',
    telefone: '(19) 3829-5306',
    email: 'marcelo.yoshida@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Professor universitário e pesquisador. Foco em educação de qualidade, cultura e direitos humanos.'
  },
  {
    id: 'gabriel-bueno',
    nome: 'Gabriel Bueno',
    nomeUrna: 'Gabriel Bueno',
    partido: 'MDB',
    cargo: 'Vereador',
    gabinete: 'Gabinete 07',
    telefone: '(19) 3829-5307',
    email: 'gabriel.bueno@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Atuação marcante nos bairros, mobilidade urbana, esporte comunitário e fiscalização de obras.'
  },
  {
    id: 'israel-scupenaro',
    nome: 'Israel Scupenaro',
    nomeUrna: 'Israel Scupenaro',
    partido: 'PL',
    cargo: 'Vereador',
    gabinete: 'Gabinete 04',
    telefone: '(19) 3829-5304',
    email: 'israel.scupenaro@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Histórico de liderança parlamentar, diálogo comunitário e atuação nas áreas da família e assistência social.'
  },
  {
    id: 'alexandre-japa',
    nome: 'Alexandre Japa',
    nomeUrna: 'Alexandre Japa',
    partido: 'PRD',
    cargo: 'Vereador',
    gabinete: 'Gabinete 02',
    telefone: '(19) 3829-5302',
    email: 'alexandre.japa@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Foco no fomento ao comércio de bairro, segurança cidadã e simplificação de processos para o empreendedor.'
  },
  {
    id: 'fabio-damasceno',
    nome: 'Fabio Damasceno',
    nomeUrna: 'Fabio Damasceno',
    partido: 'Republicanos',
    cargo: 'Vereador',
    gabinete: 'Gabinete 08',
    telefone: '(19) 3829-5308',
    email: 'fabio.damasceno@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Atuação nas áreas de saúde preventiva, apoio aos bairros periféricos e melhorias nos serviços básicos de zeladoria.'
  },
  {
    id: 'rodrigo-popo',
    nome: 'Rodrigo Fagnani Popó',
    nomeUrna: 'Rodrigo Popó',
    partido: 'Republicanos',
    cargo: 'Vereador',
    gabinete: 'Gabinete 12',
    telefone: '(19) 3829-5312',
    email: 'rodrigo.popo@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Experiência legislativa contínua, comissões de orçamento e finanças, e interlocução com os servidores públicos.'
  },
  {
    id: 'thiago-samasso',
    nome: 'Thiago Samasso',
    nomeUrna: 'Thiago Samasso',
    partido: 'PSD',
    cargo: 'Vereador',
    gabinete: 'Gabinete 10',
    telefone: '(19) 3829-5310',
    email: 'thiago.samasso@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Projetos voltados à juventude, tecnologia na gestão pública e eficiência orçamentária do município.'
  },
  {
    id: 'simone-bellini',
    nome: 'Simone Bellini da Guarda',
    nomeUrna: 'Simone Bellini',
    partido: 'União Brasil',
    cargo: 'Vereadora',
    gabinete: 'Gabinete 19',
    telefone: '(19) 3829-5319',
    email: 'simone.bellini@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Ex-integrante das forças de segurança, pauta focada no fortalecimento da Guarda Civil Municipal e iluminação pública.'
  },
  {
    id: 'henrique-conti',
    nome: 'Henrique Conti',
    nomeUrna: 'Henrique Conti',
    partido: 'Republicanos',
    cargo: 'Vereador',
    gabinete: 'Gabinete 17',
    telefone: '(19) 3829-5317',
    email: 'henrique.conti@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Engenheiro agrônomo de formação, atua nas questões ambientais, proteção de mananciais de Valinhos e área rural.'
  },
  {
    id: 'kiko-beloni',
    nome: 'Kiko Beloni',
    nomeUrna: 'Kiko Beloni',
    partido: 'Cidadania',
    cargo: 'Vereador',
    gabinete: 'Gabinete 18',
    telefone: '(19) 3829-5318',
    email: 'kiko.beloni@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Foco na terceira idade, programas de reabilitação e saúde nos postos municipais de Valinhos.'
  },
  {
    id: 'veiga',
    nome: 'Edson Veiga',
    nomeUrna: 'Veiga',
    partido: 'PSD',
    cargo: 'Vereador',
    gabinete: 'Gabinete 11',
    telefone: '(19) 3829-5311',
    email: 'veiga@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Liderança comunitária nos bairros populosos de Valinhos, manutenção de vias e transporte coletivo.'
  },
  {
    id: 'jairo-passos',
    nome: 'Jairo Passos',
    nomeUrna: 'Jairo Passos',
    partido: 'PL',
    cargo: 'Vereador',
    gabinete: 'Gabinete 09',
    telefone: '(19) 3829-5309',
    email: 'jairo.passos@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Defensor de políticas habitacionais e incentivo a pequenos produtores agrícolas locais.'
  },
  {
    id: 'edinho-garcia',
    nome: 'Edinho Garcia',
    nomeUrna: 'Edinho Garcia',
    partido: 'PRD',
    cargo: 'Vereador',
    gabinete: 'Gabinete 13',
    telefone: '(19) 3829-5313',
    email: 'edinho.garcia@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Apoio ao esporte amador, reformas de praças esportivas e segurança no trânsito escolar.'
  },
  {
    id: 'roberson-salame',
    nome: 'Roberson Salame',
    nomeUrna: 'Roberson Salame',
    partido: 'PSD',
    cargo: 'Vereador',
    gabinete: 'Gabinete 14',
    telefone: '(19) 3829-5314',
    email: 'roberson.salame@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Foco na modernização administrativa da Câmara e redução de burocracias para o cidadão comum.'
  },
  {
    id: 'edson-secafim',
    nome: 'Edson Secafim',
    nomeUrna: 'Edson Secafim',
    partido: 'PL',
    cargo: 'Vereador',
    gabinete: 'Gabinete 15',
    telefone: '(19) 3829-5315',
    email: 'edson.secafim@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Fiscalização de contratos de fornecimento do Executivo e melhorias no saneamento do DAEV.'
  },
  {
    id: 'vagner-alves',
    nome: 'Vagner Alves',
    nomeUrna: 'Vagner Alves',
    partido: 'Republicanos',
    cargo: 'Vereador',
    gabinete: 'Gabinete 16',
    telefone: '(19) 3829-5316',
    email: 'vagner.alves@camaravalinhos.sp.gov.br',
    fotoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    totalGasto: 0,
    mandato: '2025 - 2028',
    ativo: true,
    biografia: 'Atuação nas comunidades do entorno e na zeladoria de estradas rurais do município de Valinhos.'
  }
];

// ============================================================================
// FORNECEDORES VEROSSÍMEIS E REAIS DA REGIÃO DE VALINHOS E CAMPINAS
// ============================================================================
export const FORNECEDORES_MOCK = [
  {
    cnpj: '45.192.834/0001-20',
    razaoSocial: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
    categoria: 'Combustíveis e Lubrificantes' as CategoriaDespesa,
    cidade: 'Valinhos - SP'
  },
  {
    cnpj: '03.882.110/0001-94',
    razaoSocial: 'Posto Petroval Comércio de Combustíveis Eireli',
    categoria: 'Combustíveis e Lubrificantes' as CategoriaDespesa,
    cidade: 'Valinhos - SP'
  },
  {
    cnpj: '12.433.901/0001-55',
    razaoSocial: 'Digiprint & Soluções Gráficas Valinhense ME',
    categoria: 'Divulgação da Atividade Parlamentar' as CategoriaDespesa,
    cidade: 'Valinhos - SP'
  },
  {
    cnpj: '28.910.443/0001-18',
    razaoSocial: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
    categoria: 'Divulgação da Atividade Parlamentar' as CategoriaDespesa,
    cidade: 'Campinas - SP'
  },
  {
    cnpj: '18.772.302/0001-44',
    razaoSocial: 'Lex Assessoria Jurídica & Gestão Parlamentar S/S',
    categoria: 'Consultorias e Assessorias' as CategoriaDespesa,
    cidade: 'Campinas - SP'
  },
  {
    cnpj: '08.614.992/0001-09',
    razaoSocial: 'Valinhos Papéis e Artigos de Escritório Central Ltda',
    categoria: 'Material de Consumo e Expediente' as CategoriaDespesa,
    cidade: 'Valinhos - SP'
  },
  {
    cnpj: '51.302.119/0001-83',
    razaoSocial: 'Viação Cometa & Transporte Intermunicipal S.A.',
    categoria: 'Passagens e Diárias de Viagem' as CategoriaDespesa,
    cidade: 'São Paulo - SP'
  },
  {
    cnpj: '02.441.229/0001-77',
    razaoSocial: 'Rede Soluções em Informática e Locação de Hardware Eireli',
    categoria: 'Locação de Equipamentos e Software' as CategoriaDespesa,
    cidade: 'Campinas - SP'
  },
  {
    cnpj: '33.000.118/0001-01',
    razaoSocial: 'Telefônica Brasil S.A. (Vivo Telefonia Corporativa)',
    categoria: 'Serviços Postais e Telefonia' as CategoriaDespesa,
    cidade: 'São Paulo - SP'
  }
];

// ============================================================================
// BASE REALISTA DE DESPESAS DA CÂMARA DE VALINHOS
// ============================================================================
export const DESPESAS_MOCK: Despesa[] = [
  // 1. André Amaral
  {
    id: 'desp-2025-001',
    vereadorId: 'andre-amaral',
    vereadorNome: 'André Amaral',
    partido: 'PL',
    data: '2025-01-15',
    ano: 2025,
    mes: 1,
    numeroEmpenho: 'EMP-2025/000142',
    numeroLiquidacao: 'LIQ-2025/000118',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Impressão de 5.000 informativos parlamentares de prestação de contas do mandato legislativo em papel couché',
    valor: 3450.00,
    fornecedorNome: 'Digiprint & Soluções Gráficas Valinhense ME',
    fornecedorCnpj: '12.433.901/0001-55',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-001',
      despesaId: 'desp-2025-001',
      numeroDocumento: 'NFS-e 004812',
      tipo: 'NFS-e',
      dataEmissao: '2025-01-14',
      chaveAcesso: '35250112433901000155550010000048121928374821',
      linkPdf: 'https://transparencia-camaravalinhos.smarapd.com.br/documentos/nf-004812.pdf',
      cnpjEmissor: '12.433.901/0001-55',
      razaoSocialEmissor: 'Digiprint & Soluções Gráficas Valinhense ME',
      valor: 3450.00,
      codigoVerificacao: 'VAL-NFE-9921-AF',
      itens: [
        { descricao: 'Impressão Informativo Parlamentar 4x4 cores A4 dobrado', quantidade: 5000, valorUnitario: 0.69, valorTotal: 3450.00 }
      ],
      observacoes: 'Material recebido e conferido pelo Gabinete 01 da Câmara de Valinhos.'
    }
  },
  {
    id: 'desp-2025-002',
    vereadorId: 'andre-amaral',
    vereadorNome: 'André Amaral',
    partido: 'PL',
    data: '2025-02-10',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000289',
    numeroLiquidacao: 'LIQ-2025/000244',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Abastecimento da frota de apoio parlamentar para vistorias nos bairros de Valinhos (Gasolina Comum e Etanol)',
    valor: 1180.50,
    fornecedorNome: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
    fornecedorCnpj: '45.192.834/0001-20',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-002',
      despesaId: 'desp-2025-002',
      numeroDocumento: 'NF-e 029104',
      tipo: 'NF-e',
      dataEmissao: '2025-02-09',
      chaveAcesso: '35250245192834000120550010000291041928471182',
      linkPdf: 'https://transparencia-camaravalinhos.smarapd.com.br/documentos/nfe-029104.pdf',
      cnpjEmissor: '45.192.834/0001-20',
      razaoSocialEmissor: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
      valor: 1180.50,
      codigoVerificacao: 'AUT-PST-8812-XP',
      itens: [
        { descricao: 'Gasolina Comum - Placa Oficial Gabinete 01', quantidade: 140, valorUnitario: 5.79, valorTotal: 810.60 },
        { descricao: 'Etanol Hidratado Comum', quantidade: 95.10, valorUnitario: 3.89, valorTotal: 369.90 }
      ],
      observacoes: 'Cupom fiscal anexado com cupom de odômetro inicial e final.'
    }
  },
  {
    id: 'desp-2025-003',
    vereadorId: 'andre-amaral',
    vereadorNome: 'André Amaral',
    partido: 'PL',
    data: '2025-03-05',
    ano: 2025,
    mes: 3,
    numeroEmpenho: 'EMP-2025/000412',
    numeroLiquidacao: 'LIQ-2025/000388',
    categoria: 'Consultorias e Assessorias',
    descricao: 'Consultoria técnica especializada em elaboração de emendas à LDO e análise orçamentária do município',
    valor: 4200.00,
    fornecedorNome: 'Lex Assessoria Jurídica & Gestão Parlamentar S/S',
    fornecedorCnpj: '18.772.302/0001-44',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-003',
      despesaId: 'desp-2025-003',
      numeroDocumento: 'NFS-e 001928',
      tipo: 'NFS-e',
      dataEmissao: '2025-03-04',
      chaveAcesso: '35250318772302000144550010000019281029384756',
      cnpjEmissor: '18.772.302/0001-44',
      razaoSocialEmissor: 'Lex Assessoria Jurídica & Gestão Parlamentar S/S',
      valor: 4200.00,
      codigoVerificacao: 'LEX-CAMP-2025-091',
      itens: [
        { descricao: 'Parecer técnico contábil-financeiro sobre projeto de lei orçamentária municipal', quantidade: 1, valorUnitario: 4200.00, valorTotal: 4200.00 }
      ]
    }
  },

  // 2. Alécio Cau
  {
    id: 'desp-2025-004',
    vereadorId: 'alecio-cau',
    vereadorNome: 'Alécio Cau',
    partido: 'PSB',
    data: '2025-01-20',
    ano: 2025,
    mes: 1,
    numeroEmpenho: 'EMP-2025/000160',
    numeroLiquidacao: 'LIQ-2025/000135',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Gestão de tráfego, produção de vídeos e conteúdo digital para portal de transparência do mandato',
    valor: 2200.00,
    fornecedorNome: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
    fornecedorCnpj: '28.910.443/0001-18',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-004',
      despesaId: 'desp-2025-004',
      numeroDocumento: 'NFS-e 003112',
      tipo: 'NFS-e',
      dataEmissao: '2025-01-19',
      chaveAcesso: '35250128910443000118550010000031121029384712',
      cnpjEmissor: '28.910.443/0001-18',
      razaoSocialEmissor: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
      valor: 2200.00,
      codigoVerificacao: 'ANH-MID-7721',
      itens: [
        { descricao: 'Serviços de edição audiovisual e relatório multimídia de atividades de janeiro', quantidade: 1, valorUnitario: 2200.00, valorTotal: 2200.00 }
      ]
    }
  },
  {
    id: 'desp-2025-005',
    vereadorId: 'alecio-cau',
    vereadorNome: 'Alécio Cau',
    partido: 'PSB',
    data: '2025-02-18',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000310',
    numeroLiquidacao: 'LIQ-2025/000275',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Combustível para visitas de fiscalização ambiental e urbana no município de Valinhos',
    valor: 890.40,
    fornecedorNome: 'Posto Petroval Comércio de Combustíveis Eireli',
    fornecedorCnpj: '03.882.110/0001-94',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-005',
      despesaId: 'desp-2025-005',
      numeroDocumento: 'NF-e 018442',
      tipo: 'NF-e',
      dataEmissao: '2025-02-17',
      chaveAcesso: '35250203882110000194550010000184429988776655',
      cnpjEmissor: '03.882.110/0001-94',
      razaoSocialEmissor: 'Posto Petroval Comércio de Combustíveis Eireli',
      valor: 890.40,
      codigoVerificacao: 'PET-VAL-5521',
      itens: [
        { descricao: 'Gasolina Aditivada - Fiscalização Bairros', quantidade: 148.4, valorUnitario: 6.00, valorTotal: 890.40 }
      ]
    }
  },
  {
    id: 'desp-2025-006',
    vereadorId: 'alecio-cau',
    vereadorNome: 'Alécio Cau',
    partido: 'PSB',
    data: '2025-03-12',
    ano: 2025,
    mes: 3,
    numeroEmpenho: 'EMP-2025/000455',
    numeroLiquidacao: 'LIQ-2025/000412',
    categoria: 'Material de Consumo e Expediente',
    descricao: 'Suprimentos de escritório para atendimento ao cidadão no gabinete (resmas de papel A4, toners e pastas)',
    valor: 640.80,
    fornecedorNome: 'Valinhos Papéis e Artigos de Escritório Central Ltda',
    fornecedorCnpj: '08.614.992/0001-09',
    formaPagamento: 'Boleto Liquidado',
    comprovante: {
      id: 'comp-006',
      despesaId: 'desp-2025-006',
      numeroDocumento: 'NF-e 014290',
      tipo: 'NF-e',
      dataEmissao: '2025-03-11',
      chaveAcesso: '35250308614992000109550010000142908877665544',
      cnpjEmissor: '08.614.992/0001-09',
      razaoSocialEmissor: 'Valinhos Papéis e Artigos de Escritório Central Ltda',
      valor: 640.80,
      codigoVerificacao: 'PAP-CEN-3321',
      itens: [
        { descricao: 'Caixa com 10 resmas Papel Sulfite A4 75g', quantidade: 2, valorUnitario: 180.00, valorTotal: 360.00 },
        { descricao: 'Cartucho de Toner compatível HP LaserJet', quantidade: 1, valorUnitario: 280.80, valorTotal: 280.80 }
      ]
    }
  },

  // 3. Mônica Morandi
  {
    id: 'desp-2025-007',
    vereadorId: 'monica-morandi',
    vereadorNome: 'Mônica Morandi',
    partido: 'PSDB',
    data: '2025-01-25',
    ano: 2025,
    mes: 1,
    numeroEmpenho: 'EMP-2025/000188',
    numeroLiquidacao: 'LIQ-2025/000162',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Desenvolvimento e diagramação de cartilha informativa sobre campanhas de saúde preventiva da mulher e castração animal',
    valor: 2800.00,
    fornecedorNome: 'Digiprint & Soluções Gráficas Valinhense ME',
    fornecedorCnpj: '12.433.901/0001-55',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-007',
      despesaId: 'desp-2025-007',
      numeroDocumento: 'NFS-e 004860',
      tipo: 'NFS-e',
      dataEmissao: '2025-01-24',
      chaveAcesso: '35250112433901000155550010000048601928374899',
      cnpjEmissor: '12.433.901/0001-55',
      razaoSocialEmissor: 'Digiprint & Soluções Gráficas Valinhense ME',
      valor: 2800.00,
      codigoVerificacao: 'DIG-CAR-8822',
      itens: [
        { descricao: 'Diagramação e tiragem de 3.000 cartilhas educativas de saúde', quantidade: 3000, valorUnitario: 0.933, valorTotal: 2800.00 }
      ]
    }
  },
  {
    id: 'desp-2025-008',
    vereadorId: 'monica-morandi',
    vereadorNome: 'Mônica Morandi',
    partido: 'PSDB',
    data: '2025-02-14',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000295',
    numeroLiquidacao: 'LIQ-2025/000260',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Combustível para visitas e vistorias em unidades de saúde e abrigos comunitários em Valinhos',
    valor: 750.00,
    fornecedorNome: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
    fornecedorCnpj: '45.192.834/0001-20',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-008',
      despesaId: 'desp-2025-008',
      numeroDocumento: 'NF-e 029210',
      tipo: 'NF-e',
      dataEmissao: '2025-02-13',
      chaveAcesso: '35250245192834000120550010000292101928471199',
      cnpjEmissor: '45.192.834/0001-20',
      razaoSocialEmissor: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
      valor: 750.00,
      itens: [
        { descricao: 'Gasolina Comum', quantidade: 130, valorUnitario: 5.769, valorTotal: 750.00 }
      ]
    }
  },
  {
    id: 'desp-2025-009',
    vereadorId: 'monica-morandi',
    vereadorNome: 'Mônica Morandi',
    partido: 'PSDB',
    data: '2025-03-20',
    ano: 2025,
    mes: 3,
    numeroEmpenho: 'EMP-2025/000490',
    numeroLiquidacao: 'LIQ-2025/000445',
    categoria: 'Locação de Equipamentos e Software',
    descricao: 'Locação de impressora multifuncional laser corporativa e scanner para digitalização de requerimentos',
    valor: 850.00,
    fornecedorNome: 'Rede Soluções em Informática e Locação de Hardware Eireli',
    fornecedorCnpj: '02.441.229/0001-77',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-009',
      despesaId: 'desp-2025-009',
      numeroDocumento: 'NFS-e 000941',
      tipo: 'NFS-e',
      dataEmissao: '2025-03-19',
      chaveAcesso: '35250302441229000177550010000009411928374111',
      cnpjEmissor: '02.441.229/0001-77',
      razaoSocialEmissor: 'Rede Soluções em Informática e Locação de Hardware Eireli',
      valor: 850.00,
      itens: [
        { descricao: 'Locação mensal equipamento de multifuncional empresarial com franquia de páginas', quantidade: 1, valorUnitario: 850.00, valorTotal: 850.00 }
      ]
    }
  },

  // 4. Prof. Marcelo Yoshida
  {
    id: 'desp-2025-010',
    vereadorId: 'marcelo-yoshida',
    vereadorNome: 'Prof. Marcelo Yoshida',
    partido: 'PT',
    data: '2025-01-28',
    ano: 2025,
    mes: 1,
    numeroEmpenho: 'EMP-2025/000195',
    numeroLiquidacao: 'LIQ-2025/000170',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Produção editorial de dossiê técnico sobre as condições das escolas municipais de Valinhos',
    valor: 1950.00,
    fornecedorNome: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
    fornecedorCnpj: '28.910.443/0001-18',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-010',
      despesaId: 'desp-2025-010',
      numeroDocumento: 'NFS-e 003155',
      tipo: 'NFS-e',
      dataEmissao: '2025-01-27',
      cnpjEmissor: '28.910.443/0001-18',
      razaoSocialEmissor: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
      valor: 1950.00,
      itens: [
        { descricao: 'Diagramação gráfica e tiragem digital de dossiê da educação pública', quantidade: 1, valorUnitario: 1950.00, valorTotal: 1950.00 }
      ]
    }
  },
  {
    id: 'desp-2025-011',
    vereadorId: 'marcelo-yoshida',
    vereadorNome: 'Prof. Marcelo Yoshida',
    partido: 'PT',
    data: '2025-02-25',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000340',
    numeroLiquidacao: 'LIQ-2025/000305',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Combustível para visitas técnicas em escolas e creches municipais',
    valor: 680.00,
    fornecedorNome: 'Posto Petroval Comércio de Combustíveis Eireli',
    fornecedorCnpj: '03.882.110/0001-94',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-011',
      despesaId: 'desp-2025-011',
      numeroDocumento: 'NF-e 018610',
      tipo: 'NF-e',
      dataEmissao: '2025-02-24',
      cnpjEmissor: '03.882.110/0001-94',
      razaoSocialEmissor: 'Posto Petroval Comércio de Combustíveis Eireli',
      valor: 680.00,
      itens: [
        { descricao: 'Etanol Hidratado Comum', quantidade: 174.8, valorUnitario: 3.89, valorTotal: 680.00 }
      ]
    }
  },
  {
    id: 'desp-2025-012',
    vereadorId: 'marcelo-yoshida',
    vereadorNome: 'Prof. Marcelo Yoshida',
    partido: 'PT',
    data: '2025-03-18',
    ano: 2025,
    mes: 3,
    numeroEmpenho: 'EMP-2025/000480',
    numeroLiquidacao: 'LIQ-2025/000430',
    categoria: 'Passagens e Diárias de Viagem',
    descricao: 'Passagens e deslocamento para participação no Fórum Paulista de Educação e Gestão Pública na Capital/SP',
    valor: 420.00,
    fornecedorNome: 'Viação Cometa & Transporte Intermunicipal S.A.',
    fornecedorCnpj: '51.302.119/0001-83',
    formaPagamento: 'Boleto Liquidado',
    comprovante: {
      id: 'comp-012',
      despesaId: 'desp-2025-012',
      numeroDocumento: 'Bilhete 994102',
      tipo: 'Bilhete',
      dataEmissao: '2025-03-17',
      cnpjEmissor: '51.302.119/0001-83',
      razaoSocialEmissor: 'Viação Cometa & Transporte Intermunicipal S.A.',
      valor: 420.00,
      itens: [
        { descricao: 'Passagens Campinas-São Paulo e retorno com taxa de embarque', quantidade: 2, valorUnitario: 210.00, valorTotal: 420.00 }
      ]
    }
  },

  // 5. Gabriel Bueno
  {
    id: 'desp-2025-013',
    vereadorId: 'gabriel-bueno',
    vereadorNome: 'Gabriel Bueno',
    partido: 'MDB',
    data: '2025-01-18',
    ano: 2025,
    mes: 1,
    numeroEmpenho: 'EMP-2025/000155',
    numeroLiquidacao: 'LIQ-2025/000130',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Abastecimento contínuo para fiscalização de obras viárias e asfalto nos bairros São Bento e Macuco',
    valor: 1420.00,
    fornecedorNome: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
    fornecedorCnpj: '45.192.834/0001-20',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-013',
      despesaId: 'desp-2025-013',
      numeroDocumento: 'NF-e 028980',
      tipo: 'NF-e',
      dataEmissao: '2025-01-17',
      cnpjEmissor: '45.192.834/0001-20',
      razaoSocialEmissor: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
      valor: 1420.00,
      itens: [
        { descricao: 'Gasolina Comum', quantidade: 245.25, valorUnitario: 5.79, valorTotal: 1420.00 }
      ]
    }
  },
  {
    id: 'desp-2025-014',
    vereadorId: 'gabriel-bueno',
    vereadorNome: 'Gabriel Bueno',
    partido: 'MDB',
    data: '2025-02-22',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000325',
    numeroLiquidacao: 'LIQ-2025/000290',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Impressão de boletim de prestação de contas com resumo de indicações e requerimentos aprovados',
    valor: 3100.00,
    fornecedorNome: 'Digiprint & Soluções Gráficas Valinhense ME',
    fornecedorCnpj: '12.433.901/0001-55',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-014',
      despesaId: 'desp-2025-014',
      numeroDocumento: 'NFS-e 004910',
      tipo: 'NFS-e',
      dataEmissao: '2025-02-21',
      cnpjEmissor: '12.433.901/0001-55',
      razaoSocialEmissor: 'Digiprint & Soluções Gráficas Valinhense ME',
      valor: 3100.00,
      itens: [
        { descricao: 'Impressão Informativo Gabinete 07 formato tabloide', quantidade: 4500, valorUnitario: 0.688, valorTotal: 3100.00 }
      ]
    }
  },
  {
    id: 'desp-2025-015',
    vereadorId: 'gabriel-bueno',
    vereadorNome: 'Gabriel Bueno',
    partido: 'MDB',
    data: '2025-03-24',
    ano: 2025,
    mes: 3,
    numeroEmpenho: 'EMP-2025/000510',
    numeroLiquidacao: 'LIQ-2025/000460',
    categoria: 'Consultorias e Assessorias',
    descricao: 'Estudo técnico de engenharia de tráfego e impacto viário em cruzamentos críticos de Valinhos',
    valor: 4500.00,
    fornecedorNome: 'Lex Assessoria Jurídica & Gestão Parlamentar S/S',
    fornecedorCnpj: '18.772.302/0001-44',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-015',
      despesaId: 'desp-2025-015',
      numeroDocumento: 'NFS-e 001965',
      tipo: 'NFS-e',
      dataEmissao: '2025-03-23',
      cnpjEmissor: '18.772.302/0001-44',
      razaoSocialEmissor: 'Lex Assessoria Jurídica & Gestão Parlamentar S/S',
      valor: 4500.00,
      itens: [
        { descricao: 'Laudo pericial e estudo de viabilidade técnica de fluxo de tráfego', quantidade: 1, valorUnitario: 4500.00, valorTotal: 4500.00 }
      ]
    }
  },

  // 6. Israel Scupenaro
  {
    id: 'desp-2025-016',
    vereadorId: 'israel-scupenaro',
    vereadorNome: 'Israel Scupenaro',
    partido: 'PL',
    data: '2025-01-22',
    ano: 2025,
    mes: 1,
    numeroEmpenho: 'EMP-2025/000175',
    numeroLiquidacao: 'LIQ-2025/000148',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Divulgação de atos oficiais, leis aprovadas e canais de ouvidoria do mandato nas redes sociais e portal',
    valor: 2600.00,
    fornecedorNome: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
    fornecedorCnpj: '28.910.443/0001-18',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-016',
      despesaId: 'desp-2025-016',
      numeroDocumento: 'NFS-e 003180',
      tipo: 'NFS-e',
      dataEmissao: '2025-01-21',
      cnpjEmissor: '28.910.443/0001-18',
      razaoSocialEmissor: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
      valor: 2600.00,
      itens: [
        { descricao: 'Campanha de comunicação institucional e prestação de contas digital', quantidade: 1, valorUnitario: 2600.00, valorTotal: 2600.00 }
      ]
    }
  },
  {
    id: 'desp-2025-017',
    vereadorId: 'israel-scupenaro',
    vereadorNome: 'Israel Scupenaro',
    partido: 'PL',
    data: '2025-02-12',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000290',
    numeroLiquidacao: 'LIQ-2025/000255',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Combustível para visitas e atendimento comunitário às igrejas, associações de moradores e entidades de Valinhos',
    valor: 1100.00,
    fornecedorNome: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
    fornecedorCnpj: '45.192.834/0001-20',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-017',
      despesaId: 'desp-2025-017',
      numeroDocumento: 'NF-e 029190',
      tipo: 'NF-e',
      dataEmissao: '2025-02-11',
      cnpjEmissor: '45.192.834/0001-20',
      razaoSocialEmissor: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
      valor: 1100.00,
      itens: [
        { descricao: 'Gasolina Comum', quantidade: 190.00, valorUnitario: 5.79, valorTotal: 1100.00 }
      ]
    }
  },
  {
    id: 'desp-2025-018',
    vereadorId: 'israel-scupenaro',
    vereadorNome: 'Israel Scupenaro',
    partido: 'PL',
    data: '2025-03-15',
    ano: 2025,
    mes: 3,
    numeroEmpenho: 'EMP-2025/000470',
    numeroLiquidacao: 'LIQ-2025/000425',
    categoria: 'Material de Consumo e Expediente',
    descricao: 'Materiais de apoio administrativo, pastas suspensas, crachás de controle e formulários de protocolo',
    valor: 580.00,
    fornecedorNome: 'Valinhos Papéis e Artigos de Escritório Central Ltda',
    fornecedorCnpj: '08.614.992/0001-09',
    formaPagamento: 'Boleto Liquidado',
    comprovante: {
      id: 'comp-018',
      despesaId: 'desp-2025-018',
      numeroDocumento: 'NF-e 014350',
      tipo: 'NF-e',
      dataEmissao: '2025-03-14',
      cnpjEmissor: '08.614.992/0001-09',
      razaoSocialEmissor: 'Valinhos Papéis e Artigos de Escritório Central Ltda',
      valor: 580.00,
      itens: [
        { descricao: 'Kit materiais de arquivo e expediente Gabinete 04', quantidade: 1, valorUnitario: 580.00, valorTotal: 580.00 }
      ]
    }
  },

  // 7. Alexandre Japa
  {
    id: 'desp-2025-019',
    vereadorId: 'alexandre-japa',
    vereadorNome: 'Alexandre Japa',
    partido: 'PRD',
    data: '2025-01-30',
    ano: 2025,
    mes: 1,
    numeroEmpenho: 'EMP-2025/000210',
    numeroLiquidacao: 'LIQ-2025/000185',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Impressão gráfica de folhetos sobre segurança pública integrada e botão de pânico para o comércio local',
    valor: 2750.00,
    fornecedorNome: 'Digiprint & Soluções Gráficas Valinhense ME',
    fornecedorCnpj: '12.433.901/0001-55',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-019',
      despesaId: 'desp-2025-019',
      numeroDocumento: 'NFS-e 004890',
      tipo: 'NFS-e',
      dataEmissao: '2025-01-29',
      cnpjEmissor: '12.433.901/0001-55',
      razaoSocialEmissor: 'Digiprint & Soluções Gráficas Valinhense ME',
      valor: 2750.00,
      itens: [
        { descricao: 'Folheto 2 cores orientação comerciante seguro', quantidade: 4000, valorUnitario: 0.6875, valorTotal: 2750.00 }
      ]
    }
  },
  {
    id: 'desp-2025-020',
    vereadorId: 'alexandre-japa',
    vereadorNome: 'Alexandre Japa',
    partido: 'PRD',
    data: '2025-02-28',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000370',
    numeroLiquidacao: 'LIQ-2025/000330',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Combustível para rondas de fiscalização com os comerciantes de Valinhos',
    valor: 920.00,
    fornecedorNome: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
    fornecedorCnpj: '45.192.834/0001-20',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-020',
      despesaId: 'desp-2025-020',
      numeroDocumento: 'NF-e 029315',
      tipo: 'NF-e',
      dataEmissao: '2025-02-27',
      cnpjEmissor: '45.192.834/0001-20',
      razaoSocialEmissor: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
      valor: 920.00,
      itens: [
        { descricao: 'Gasolina Comum', quantidade: 158.9, valorUnitario: 5.79, valorTotal: 920.00 }
      ]
    }
  },

  // 8. Fabio Damasceno
  {
    id: 'desp-2025-021',
    vereadorId: 'fabio-damasceno',
    vereadorNome: 'Fabio Damasceno',
    partido: 'Republicanos',
    data: '2025-01-16',
    ano: 2025,
    mes: 1,
    numeroEmpenho: 'EMP-2025/000148',
    numeroLiquidacao: 'LIQ-2025/000122',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Combustível para averiguação de queixas de saneamento e podas nos bairros rurais',
    valor: 1350.00,
    fornecedorNome: 'Posto Petroval Comércio de Combustíveis Eireli',
    fornecedorCnpj: '03.882.110/0001-94',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-021',
      despesaId: 'desp-2025-021',
      numeroDocumento: 'NF-e 018310',
      tipo: 'NF-e',
      dataEmissao: '2025-01-15',
      cnpjEmissor: '03.882.110/0001-94',
      razaoSocialEmissor: 'Posto Petroval Comércio de Combustíveis Eireli',
      valor: 1350.00,
      itens: [
        { descricao: 'Gasolina Comum', quantidade: 228.8, valorUnitario: 5.90, valorTotal: 1350.00 }
      ]
    }
  },
  {
    id: 'desp-2025-022',
    vereadorId: 'fabio-damasceno',
    vereadorNome: 'Fabio Damasceno',
    partido: 'Republicanos',
    data: '2025-02-19',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000315',
    numeroLiquidacao: 'LIQ-2025/000280',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Vídeos informativos sobre serviços públicos e cronograma de coleta de entulho municipal',
    valor: 1800.00,
    fornecedorNome: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
    fornecedorCnpj: '28.910.443/0001-18',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-022',
      despesaId: 'desp-2025-022',
      numeroDocumento: 'NFS-e 003205',
      tipo: 'NFS-e',
      dataEmissao: '2025-02-18',
      cnpjEmissor: '28.910.443/0001-18',
      razaoSocialEmissor: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
      valor: 1800.00,
      itens: [
        { descricao: 'Produção audiovisual informativo de serviços públicos', quantidade: 1, valorUnitario: 1800.00, valorTotal: 1800.00 }
      ]
    }
  },

  // 9. Rodrigo Fagnani Popó
  {
    id: 'desp-2025-023',
    vereadorId: 'rodrigo-popo',
    vereadorNome: 'Rodrigo Popó',
    partido: 'Republicanos',
    data: '2025-01-26',
    ano: 2025,
    mes: 1,
    numeroEmpenho: 'EMP-2025/000190',
    numeroLiquidacao: 'LIQ-2025/000165',
    categoria: 'Consultorias e Assessorias',
    descricao: 'Assessoria contábil para acompanhamento das metas fiscais do 1º quadrimestre junto ao TCE-SP',
    valor: 4800.00,
    fornecedorNome: 'Lex Assessoria Jurídica & Gestão Parlamentar S/S',
    fornecedorCnpj: '18.772.302/0001-44',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-023',
      despesaId: 'desp-2025-023',
      numeroDocumento: 'NFS-e 001945',
      tipo: 'NFS-e',
      dataEmissao: '2025-01-25',
      cnpjEmissor: '18.772.302/0001-44',
      razaoSocialEmissor: 'Lex Assessoria Jurídica & Gestão Parlamentar S/S',
      valor: 4800.00,
      codigoVerificacao: 'LEX-VAL-CONTAB-891',
      itens: [
        { descricao: 'Análise contábil especializada e auditoria preventiva das metas fiscais LRF', quantidade: 1, valorUnitario: 4800.00, valorTotal: 4800.00 }
      ]
    }
  },
  {
    id: 'desp-2025-024',
    vereadorId: 'rodrigo-popo',
    vereadorNome: 'Rodrigo Popó',
    partido: 'Republicanos',
    data: '2025-02-15',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000300',
    numeroLiquidacao: 'LIQ-2025/000268',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Impressão de jornais informativos com as leis sancionadas e requerimentos do gabinete',
    valor: 2900.00,
    fornecedorNome: 'Digiprint & Soluções Gráficas Valinhense ME',
    fornecedorCnpj: '12.433.901/0001-55',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-024',
      despesaId: 'desp-2025-024',
      numeroDocumento: 'NFS-e 004925',
      tipo: 'NFS-e',
      dataEmissao: '2025-02-14',
      cnpjEmissor: '12.433.901/0001-55',
      razaoSocialEmissor: 'Digiprint & Soluções Gráficas Valinhense ME',
      valor: 2900.00,
      itens: [
        { descricao: 'Impressão de jornal de gabinete 8 páginas cor', quantidade: 4000, valorUnitario: 0.725, valorTotal: 2900.00 }
      ]
    }
  },
  {
    id: 'desp-2025-025',
    vereadorId: 'rodrigo-popo',
    vereadorNome: 'Rodrigo Popó',
    partido: 'Republicanos',
    data: '2025-03-10',
    ano: 2025,
    mes: 3,
    numeroEmpenho: 'EMP-2025/000440',
    numeroLiquidacao: 'LIQ-2025/000398',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Combustível para deslocamentos oficiais do gabinete',
    valor: 980.00,
    fornecedorNome: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
    fornecedorCnpj: '45.192.834/0001-20',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-025',
      despesaId: 'desp-2025-025',
      numeroDocumento: 'NF-e 029410',
      tipo: 'NF-e',
      dataEmissao: '2025-03-09',
      cnpjEmissor: '45.192.834/0001-20',
      razaoSocialEmissor: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
      valor: 980.00,
      itens: [
        { descricao: 'Gasolina Comum', quantidade: 169.2, valorUnitario: 5.79, valorTotal: 980.00 }
      ]
    }
  },

  // 10. Thiago Samasso
  {
    id: 'desp-2025-026',
    vereadorId: 'thiago-samasso',
    vereadorNome: 'Thiago Samasso',
    partido: 'PSD',
    data: '2025-01-24',
    ano: 2025,
    mes: 1,
    numeroEmpenho: 'EMP-2025/000180',
    numeroLiquidacao: 'LIQ-2025/000155',
    categoria: 'Locação de Equipamentos e Software',
    descricao: 'Licença corporativa de software de gestão de demandas e CRM para atendimento dos munícipes',
    valor: 1450.00,
    fornecedorNome: 'Rede Soluções em Informática e Locação de Hardware Eireli',
    fornecedorCnpj: '02.441.229/0001-77',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-026',
      despesaId: 'desp-2025-026',
      numeroDocumento: 'NFS-e 000965',
      tipo: 'NFS-e',
      dataEmissao: '2025-01-23',
      cnpjEmissor: '02.441.229/0001-77',
      razaoSocialEmissor: 'Rede Soluções em Informática e Locação de Hardware Eireli',
      valor: 1450.00,
      itens: [
        { descricao: 'Licença mensal plataforma em nuvem atendimento parlamentar cidadão', quantidade: 1, valorUnitario: 1450.00, valorTotal: 1450.00 }
      ]
    }
  },
  {
    id: 'desp-2025-027',
    vereadorId: 'thiago-samasso',
    vereadorNome: 'Thiago Samasso',
    partido: 'PSD',
    data: '2025-02-20',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000320',
    numeroLiquidacao: 'LIQ-2025/000285',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Divulgação das reuniões abertas sobre juventude e qualificação técnica profissional',
    valor: 1600.00,
    fornecedorNome: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
    fornecedorCnpj: '28.910.443/0001-18',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-027',
      despesaId: 'desp-2025-027',
      numeroDocumento: 'NFS-e 003220',
      tipo: 'NFS-e',
      dataEmissao: '2025-02-19',
      cnpjEmissor: '28.910.443/0001-18',
      razaoSocialEmissor: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
      valor: 1600.00,
      itens: [
        { descricao: 'Campanha de divulgação institucional digital', quantidade: 1, valorUnitario: 1600.00, valorTotal: 1600.00 }
      ]
    }
  },

  // 11. Simone Bellini da Guarda
  {
    id: 'desp-2025-028',
    vereadorId: 'simone-bellini',
    vereadorNome: 'Simone Bellini',
    partido: 'União Brasil',
    data: '2025-01-19',
    ano: 2025,
    mes: 1,
    numeroEmpenho: 'EMP-2025/000158',
    numeroLiquidacao: 'LIQ-2025/000132',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Combustível para vistoria e mapeamento de pontos escuros e áreas com índices de vulnerabilidade',
    valor: 1250.00,
    fornecedorNome: 'Posto Petroval Comércio de Combustíveis Eireli',
    fornecedorCnpj: '03.882.110/0001-94',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-028',
      despesaId: 'desp-2025-028',
      numeroDocumento: 'NF-e 018340',
      tipo: 'NF-e',
      dataEmissao: '2025-01-18',
      cnpjEmissor: '03.882.110/0001-94',
      razaoSocialEmissor: 'Posto Petroval Comércio de Combustíveis Eireli',
      valor: 1250.00,
      itens: [
        { descricao: 'Gasolina Comum', quantidade: 211.8, valorUnitario: 5.90, valorTotal: 1250.00 }
      ]
    }
  },
  {
    id: 'desp-2025-029',
    vereadorId: 'simone-bellini',
    vereadorNome: 'Simone Bellini',
    partido: 'União Brasil',
    data: '2025-02-16',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000305',
    numeroLiquidacao: 'LIQ-2025/000272',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Impressão de cartilhas sobre a Patrulha Maria da Penha e canais de proteção à mulher em Valinhos',
    valor: 2400.00,
    fornecedorNome: 'Digiprint & Soluções Gráficas Valinhense ME',
    fornecedorCnpj: '12.433.901/0001-55',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-029',
      despesaId: 'desp-2025-029',
      numeroDocumento: 'NFS-e 004930',
      tipo: 'NFS-e',
      dataEmissao: '2025-02-15',
      cnpjEmissor: '12.433.901/0001-55',
      razaoSocialEmissor: 'Digiprint & Soluções Gráficas Valinhense ME',
      valor: 2400.00,
      itens: [
        { descricao: 'Cartilha de Conscientização e Proteção Social', quantidade: 3500, valorUnitario: 0.6857, valorTotal: 2400.00 }
      ]
    }
  },

  // 12. Henrique Conti
  {
    id: 'desp-2025-030',
    vereadorId: 'henrique-conti',
    vereadorNome: 'Henrique Conti',
    partido: 'Republicanos',
    data: '2025-01-29',
    ano: 2025,
    mes: 1,
    numeroEmpenho: 'EMP-2025/000205',
    numeroLiquidacao: 'LIQ-2025/000180',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Combustível para vistoria técnica de nascentes e fiscalização de loteamentos rurais irregulares',
    valor: 1120.00,
    fornecedorNome: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
    fornecedorCnpj: '45.192.834/0001-20',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-030',
      despesaId: 'desp-2025-030',
      numeroDocumento: 'NF-e 029140',
      tipo: 'NF-e',
      dataEmissao: '2025-01-28',
      cnpjEmissor: '45.192.834/0001-20',
      razaoSocialEmissor: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
      valor: 1120.00,
      itens: [
        { descricao: 'Gasolina Comum', quantidade: 193.4, valorUnitario: 5.79, valorTotal: 1120.00 }
      ]
    }
  },
  {
    id: 'desp-2025-031',
    vereadorId: 'henrique-conti',
    vereadorNome: 'Henrique Conti',
    partido: 'Republicanos',
    data: '2025-03-08',
    ano: 2025,
    mes: 3,
    numeroEmpenho: 'EMP-2025/000435',
    numeroLiquidacao: 'LIQ-2025/000392',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Elaboração e publicação de guia prático de conservação de recursos hídricos para produtores rurais',
    valor: 2150.00,
    fornecedorNome: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
    fornecedorCnpj: '28.910.443/0001-18',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-031',
      despesaId: 'desp-2025-031',
      numeroDocumento: 'NFS-e 003250',
      tipo: 'NFS-e',
      dataEmissao: '2025-03-07',
      cnpjEmissor: '28.910.443/0001-18',
      razaoSocialEmissor: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
      valor: 2150.00,
      itens: [
        { descricao: 'Guia impresso e digital meio ambiente e mananciais', quantidade: 2000, valorUnitario: 1.075, valorTotal: 2150.00 }
      ]
    }
  },

  // 13. Kiko Beloni
  {
    id: 'desp-2025-032',
    vereadorId: 'kiko-beloni',
    vereadorNome: 'Kiko Beloni',
    partido: 'Cidadania',
    data: '2025-02-05',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000270',
    numeroLiquidacao: 'LIQ-2025/000235',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Informativos sobre direitos da pessoa idosa e acesso facilitado aos remédios de alto custo',
    valor: 2500.00,
    fornecedorNome: 'Digiprint & Soluções Gráficas Valinhense ME',
    fornecedorCnpj: '12.433.901/0001-55',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-032',
      despesaId: 'desp-2025-032',
      numeroDocumento: 'NFS-e 004945',
      tipo: 'NFS-e',
      dataEmissao: '2025-02-04',
      cnpjEmissor: '12.433.901/0001-55',
      razaoSocialEmissor: 'Digiprint & Soluções Gráficas Valinhense ME',
      valor: 2500.00,
      itens: [
        { descricao: 'Guia informativo da terceira idade em Valinhos', quantidade: 3000, valorUnitario: 0.833, valorTotal: 2500.00 }
      ]
    }
  },

  // 14. Veiga
  {
    id: 'desp-2025-033',
    vereadorId: 'veiga',
    vereadorNome: 'Veiga',
    partido: 'PSD',
    data: '2025-01-17',
    ano: 2025,
    mes: 1,
    numeroEmpenho: 'EMP-2025/000150',
    numeroLiquidacao: 'LIQ-2025/000125',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Combustível para acompanhamento das linhas de ônibus e demandas de transporte dos bairros',
    valor: 1300.00,
    fornecedorNome: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
    fornecedorCnpj: '45.192.834/0001-20',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-033',
      despesaId: 'desp-2025-033',
      numeroDocumento: 'NF-e 028990',
      tipo: 'NF-e',
      dataEmissao: '2025-01-16',
      cnpjEmissor: '45.192.834/0001-20',
      razaoSocialEmissor: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
      valor: 1300.00,
      itens: [
        { descricao: 'Gasolina Comum', quantidade: 224.5, valorUnitario: 5.79, valorTotal: 1300.00 }
      ]
    }
  },

  // 15. Jairo Passos
  {
    id: 'desp-2025-034',
    vereadorId: 'jairo-passos',
    vereadorNome: 'Jairo Passos',
    partido: 'PL',
    data: '2025-02-11',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000285',
    numeroLiquidacao: 'LIQ-2025/000250',
    categoria: 'Material de Consumo e Expediente',
    descricao: 'Materiais para registro de cadastros de demandas habitacionais e atendimento aos cidadãos',
    valor: 720.00,
    fornecedorNome: 'Valinhos Papéis e Artigos de Escritório Central Ltda',
    fornecedorCnpj: '08.614.992/0001-09',
    formaPagamento: 'Boleto Liquidado',
    comprovante: {
      id: 'comp-034',
      despesaId: 'desp-2025-034',
      numeroDocumento: 'NF-e 014310',
      tipo: 'NF-e',
      dataEmissao: '2025-02-10',
      cnpjEmissor: '08.614.992/0001-09',
      razaoSocialEmissor: 'Valinhos Papéis e Artigos de Escritório Central Ltda',
      valor: 720.00,
      itens: [
        { descricao: 'Papel sulfite e suprimentos gráficos Gabinete 09', quantidade: 1, valorUnitario: 720.00, valorTotal: 720.00 }
      ]
    }
  },

  // 16. Edinho Garcia
  {
    id: 'desp-2025-035',
    vereadorId: 'edinho-garcia',
    vereadorNome: 'Edinho Garcia',
    partido: 'PRD',
    data: '2025-02-24',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000335',
    numeroLiquidacao: 'LIQ-2025/000300',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Combustível para visitas aos centros comunitários e praças de esportes de Valinhos',
    valor: 860.00,
    fornecedorNome: 'Posto Petroval Comércio de Combustíveis Eireli',
    fornecedorCnpj: '03.882.110/0001-94',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-035',
      despesaId: 'desp-2025-035',
      numeroDocumento: 'NF-e 018590',
      tipo: 'NF-e',
      dataEmissao: '2025-02-23',
      cnpjEmissor: '03.882.110/0001-94',
      razaoSocialEmissor: 'Posto Petroval Comércio de Combustíveis Eireli',
      valor: 860.00,
      itens: [
        { descricao: 'Gasolina Comum', quantidade: 145.7, valorUnitario: 5.90, valorTotal: 860.00 }
      ]
    }
  },

  // 17. Roberson Salame
  {
    id: 'desp-2025-036',
    vereadorId: 'roberson-salame',
    vereadorNome: 'Roberson Salame',
    partido: 'PSD',
    data: '2025-01-27',
    ano: 2025,
    mes: 1,
    numeroEmpenho: 'EMP-2025/000192',
    numeroLiquidacao: 'LIQ-2025/000168',
    categoria: 'Locação de Equipamentos e Software',
    descricao: 'Locação de estação de trabalho de alto desempenho para diagramação legislativa e edição técnica',
    valor: 920.00,
    fornecedorNome: 'Rede Soluções em Informática e Locação de Hardware Eireli',
    fornecedorCnpj: '02.441.229/0001-77',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-036',
      despesaId: 'desp-2025-036',
      numeroDocumento: 'NFS-e 000970',
      tipo: 'NFS-e',
      dataEmissao: '2025-01-26',
      cnpjEmissor: '02.441.229/0001-77',
      razaoSocialEmissor: 'Rede Soluções em Informática e Locação de Hardware Eireli',
      valor: 920.00,
      itens: [
        { descricao: 'Locação mensal de computador com monitor 27 polegadas', quantidade: 1, valorUnitario: 920.00, valorTotal: 920.00 }
      ]
    }
  },

  // 18. Edson Secafim
  {
    id: 'desp-2025-037',
    vereadorId: 'edson-secafim',
    vereadorNome: 'Edson Secafim',
    partido: 'PL',
    data: '2025-02-08',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000280',
    numeroLiquidacao: 'LIQ-2025/000246',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Publicação de informativos e prestação de contas sobre a fiscalização tarifária do saneamento',
    valor: 2650.00,
    fornecedorNome: 'Digiprint & Soluções Gráficas Valinhense ME',
    fornecedorCnpj: '12.433.901/0001-55',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-037',
      despesaId: 'desp-2025-037',
      numeroDocumento: 'NFS-e 004950',
      tipo: 'NFS-e',
      dataEmissao: '2025-02-07',
      cnpjEmissor: '12.433.901/0001-55',
      razaoSocialEmissor: 'Digiprint & Soluções Gráficas Valinhense ME',
      valor: 2650.00,
      itens: [
        { descricao: 'Impressão Informativo Gabinete 15 em papel reciclado', quantidade: 3800, valorUnitario: 0.697, valorTotal: 2650.00 }
      ]
    }
  },

  // 19. Vagner Alves
  {
    id: 'desp-2025-038',
    vereadorId: 'vagner-alves',
    vereadorNome: 'Vagner Alves',
    partido: 'Republicanos',
    data: '2025-02-21',
    ano: 2025,
    mes: 2,
    numeroEmpenho: 'EMP-2025/000322',
    numeroLiquidacao: 'LIQ-2025/000288',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Abastecimento para atendimento nas estradas vicinais e manutenção rural de Valinhos',
    valor: 1150.00,
    fornecedorNome: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
    fornecedorCnpj: '45.192.834/0001-20',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-038',
      despesaId: 'desp-2025-038',
      numeroDocumento: 'NF-e 029270',
      tipo: 'NF-e',
      dataEmissao: '2025-02-20',
      cnpjEmissor: '45.192.834/0001-20',
      razaoSocialEmissor: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
      valor: 1150.00,
      itens: [
        { descricao: 'Gasolina Comum', quantidade: 198.6, valorUnitario: 5.79, valorTotal: 1150.00 }
      ]
    }
  },

  // Despesas adicionais recentes (2025/2026) para enriquecer o gráfico e ranking
  {
    id: 'desp-2025-039',
    vereadorId: 'andre-amaral',
    vereadorNome: 'André Amaral',
    partido: 'PL',
    data: '2025-04-02',
    ano: 2025,
    mes: 4,
    numeroEmpenho: 'EMP-2025/000620',
    numeroLiquidacao: 'LIQ-2025/000570',
    categoria: 'Serviços Postais e Telefonia',
    descricao: 'Telefonia móvel e pacote de dados para canal de atendimento do gabinete',
    valor: 340.00,
    fornecedorNome: 'Telefônica Brasil S.A. (Vivo Telefonia Corporativa)',
    fornecedorCnpj: '33.000.118/0001-01',
    formaPagamento: 'Boleto Liquidado',
    comprovante: {
      id: 'comp-039',
      despesaId: 'desp-2025-039',
      numeroDocumento: 'Fatura 89123891',
      tipo: 'NF-e',
      dataEmissao: '2025-04-01',
      cnpjEmissor: '33.000.118/0001-01',
      razaoSocialEmissor: 'Telefônica Brasil S.A.',
      valor: 340.00,
      itens: [
        { descricao: 'Plano Telefonia Móvel Corporativa Gabinete 01', quantidade: 1, valorUnitario: 340.00, valorTotal: 340.00 }
      ]
    }
  },
  {
    id: 'desp-2025-040',
    vereadorId: 'rodrigo-popo',
    vereadorNome: 'Rodrigo Popó',
    partido: 'Republicanos',
    data: '2025-04-10',
    ano: 2025,
    mes: 4,
    numeroEmpenho: 'EMP-2025/000680',
    numeroLiquidacao: 'LIQ-2025/000615',
    categoria: 'Consultorias e Assessorias',
    descricao: 'Assessoria contábil para elaboração de projeto de auditoria do Instituto de Previdência (VALIPREV)',
    valor: 4900.00,
    fornecedorNome: 'Lex Assessoria Jurídica & Gestão Parlamentar S/S',
    fornecedorCnpj: '18.772.302/0001-44',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-040',
      despesaId: 'desp-2025-040',
      numeroDocumento: 'NFS-e 001990',
      tipo: 'NFS-e',
      dataEmissao: '2025-04-09',
      cnpjEmissor: '18.772.302/0001-44',
      razaoSocialEmissor: 'Lex Assessoria Jurídica & Gestão Parlamentar S/S',
      valor: 4900.00,
      codigoVerificacao: 'LEX-VAL-PREV-901',
      itens: [
        { descricao: 'Estudo atuarial e financeiro previdenciário municipal', quantidade: 1, valorUnitario: 4900.00, valorTotal: 4900.00 }
      ]
    }
  },
  {
    id: 'desp-2025-041',
    vereadorId: 'gabriel-bueno',
    vereadorNome: 'Gabriel Bueno',
    partido: 'MDB',
    data: '2025-04-14',
    ano: 2025,
    mes: 4,
    numeroEmpenho: 'EMP-2025/000710',
    numeroLiquidacao: 'LIQ-2025/000642',
    categoria: 'Combustíveis e Lubrificantes',
    descricao: 'Abastecimento para rondas de fiscalização de recapeamento asfáltico',
    valor: 1390.00,
    fornecedorNome: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
    fornecedorCnpj: '45.192.834/0001-20',
    formaPagamento: 'PIX Tesouro',
    comprovante: {
      id: 'comp-041',
      despesaId: 'desp-2025-041',
      numeroDocumento: 'NF-e 029510',
      tipo: 'NF-e',
      dataEmissao: '2025-04-13',
      cnpjEmissor: '45.192.834/0001-20',
      razaoSocialEmissor: 'Auto Posto Rigesa & Valinhos Derivados de Petróleo Ltda',
      valor: 1390.00,
      itens: [
        { descricao: 'Gasolina Comum', quantidade: 240.06, valorUnitario: 5.79, valorTotal: 1390.00 }
      ]
    }
  },
  {
    id: 'desp-2025-042',
    vereadorId: 'andre-amaral',
    vereadorNome: 'André Amaral',
    partido: 'PL',
    data: '2025-05-05',
    ano: 2025,
    mes: 5,
    numeroEmpenho: 'EMP-2025/000810',
    numeroLiquidacao: 'LIQ-2025/000740',
    categoria: 'Divulgação da Atividade Parlamentar',
    descricao: 'Divulgação em mídias regionais e redes sociais das audiências públicas sobre o Plano Diretor de Valinhos',
    valor: 3200.00,
    fornecedorNome: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
    fornecedorCnpj: '28.910.443/0001-18',
    formaPagamento: 'Transferência Bancária',
    comprovante: {
      id: 'comp-042',
      despesaId: 'desp-2025-042',
      numeroDocumento: 'NFS-e 003310',
      tipo: 'NFS-e',
      dataEmissao: '2025-05-04',
      cnpjEmissor: '28.910.443/0001-18',
      razaoSocialEmissor: 'Anhanguera Comunicação Visual e Mídia Digital Ltda',
      valor: 3200.00,
      itens: [
        { descricao: 'Pacote de comunicação visual para audiências públicas do plano diretor', quantidade: 1, valorUnitario: 3200.00, valorTotal: 3200.00 }
      ]
    }
  }
];

// Atualiza o totalGasto de cada vereador com base nas despesas
export function getVereadoresComTotais(): Vereador[] {
  const totaisPorVereador: Record<string, number> = {};

  for (const d of DESPESAS_MOCK) {
    totaisPorVereador[d.vereadorId] = (totaisPorVereador[d.vereadorId] || 0) + d.valor;
  }

  return VEREADORES_VALINHOS.map(v => ({
    ...v,
    totalGasto: Number((totaisPorVereador[v.id] || 0).toFixed(2))
  })).sort((a, b) => b.totalGasto - a.totalGasto);
}
