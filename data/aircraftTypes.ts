export type AircraftType = {
  slug: string;
  title: string;
  description: string[];
  useCases: string[];
};

export const AIRCRAFT_TYPES: AircraftType[] = [
  {
    slug: 'jets',
    title: 'Jatos Executivos',
    description: [
      'Coordenamos dos light jets aos widebody corporativos, alinhando tripulação, slots e logística de peças em cooperação com OEMs.',
      'Programas de teste pós-entrega e transição para o time do cliente garantem transferência suave do conhecimento operacional.'
    ],
    useCases: ['Entregas para bancos e leasing', 'Atualização de frota corporativa', 'Programas de demonstração global']
  },
  {
    slug: 'commercial',
    title: 'Aeronaves Comerciais',
    description: [
      'Planejamento detalhado para narrow e wide bodies, cobrindo ETOPS, coordenação de slots e equipes de manutenção locais.',
      'Ideal para fabricantes, companhias aéreas regionais e leasing que precisam de logística integrada em múltiplos países.'
    ],
    useCases: ['Recebimento de novos pedidos', 'Reposicionamento para MRO', 'Ferry pós-leasing']
  },
  {
    slug: 'turboprop',
    title: 'Turboélices',
    description: [
      'Roteiros híbridos envolvendo aeroportos remotos, infraestrutura restrita e planejamento de combustível sob medida.',
      'Integramos suporte técnico, estoque de peças e acompanhamento do cliente em todas as escalas.'
    ],
    useCases: ['Programas governamentais', 'Empresas de táxi aéreo', 'Operadores offshore']
  },
  {
    slug: 'helicopters',
    title: 'Helicópteros',
    description: [
      'Consultoria para desmontagem, transporte e remontagem quando necessário, além de voos demonstrativos pós-chegada.',
      'Suporte documental completo para operações onshore e offshore em diferentes países.'
    ],
    useCases: ['Operações offshore', 'Serviços médicos', 'Missões corporativas em larga escala']
  },
  {
    slug: 'piston',
    title: 'Aeronaves a Pistão',
    description: [
      'Soluções ágeis para proprietários privados e escolas de aviação que precisam deslocar aeronaves com rapidez e previsibilidade.',
      'Coordenamos importação, nacionalização e treinamento básico para o time do cliente.'
    ],
    useCases: ['Aviação geral', 'Treinamento e instrução', 'Reposicionamento de estoque de revendas']
  }
];
