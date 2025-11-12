// Dados estruturados do AprovaPM

export const estados = [
  { sigla: 'AC', nome: 'Acre', vagas: 120 },
  { sigla: 'AL', nome: 'Alagoas', vagas: 200 },
  { sigla: 'AP', nome: 'Amapá', vagas: 80 },
  { sigla: 'AM', nome: 'Amazonas', vagas: 350 },
  { sigla: 'BA', nome: 'Bahia', vagas: 500 },
  { sigla: 'CE', nome: 'Ceará', vagas: 450 },
  { sigla: 'DF', nome: 'Distrito Federal', vagas: 300 },
  { sigla: 'ES', nome: 'Espírito Santo', vagas: 250 },
  { sigla: 'GO', nome: 'Goiás', vagas: 400 },
  { sigla: 'MA', nome: 'Maranhão', vagas: 350 },
  { sigla: 'MT', nome: 'Mato Grosso', vagas: 280 },
  { sigla: 'MS', nome: 'Mato Grosso do Sul', vagas: 220 },
  { sigla: 'MG', nome: 'Minas Gerais', vagas: 600 },
  { sigla: 'PA', nome: 'Pará', vagas: 400 },
  { sigla: 'PB', nome: 'Paraíba', vagas: 180 },
  { sigla: 'PR', nome: 'Paraná', vagas: 500 },
  { sigla: 'PE', nome: 'Pernambuco', vagas: 450 },
  { sigla: 'PI', nome: 'Piauí', vagas: 150 },
  { sigla: 'RJ', nome: 'Rio de Janeiro', vagas: 700 },
  { sigla: 'RN', nome: 'Rio Grande do Norte', vagas: 200 },
  { sigla: 'RS', nome: 'Rio Grande do Sul', vagas: 550 },
  { sigla: 'RO', nome: 'Rondônia', vagas: 180 },
  { sigla: 'RR', nome: 'Roraima', vagas: 70 },
  { sigla: 'SC', nome: 'Santa Catarina', vagas: 400 },
  { sigla: 'SP', nome: 'São Paulo', vagas: 1200 },
  { sigla: 'SE', nome: 'Sergipe', vagas: 150 },
  { sigla: 'TO', nome: 'Tocantins', vagas: 120 },
];

export const disciplinas = [
  {
    id: 'portugues',
    nome: 'Língua Portuguesa',
    icon: 'BookOpen',
    cor: 'from-blue-500 to-blue-700',
    topicos: [
      'Interpretação de Texto',
      'Gramática e Ortografia',
      'Concordância Verbal e Nominal',
      'Regência Verbal e Nominal',
      'Crase',
      'Pontuação',
      'Semântica',
      'Redação Oficial'
    ],
    questoes: 450
  },
  {
    id: 'matematica',
    nome: 'Matemática e Raciocínio Lógico',
    icon: 'Calculator',
    cor: 'from-purple-500 to-purple-700',
    topicos: [
      'Operações Básicas',
      'Porcentagem e Juros',
      'Regra de Três',
      'Equações e Inequações',
      'Geometria Plana e Espacial',
      'Raciocínio Lógico',
      'Sequências e Padrões',
      'Probabilidade e Estatística'
    ],
    questoes: 380
  },
  {
    id: 'direito',
    nome: 'Direito Constitucional',
    icon: 'Scale',
    cor: 'from-red-500 to-red-700',
    topicos: [
      'Princípios Fundamentais',
      'Direitos e Garantias Fundamentais',
      'Organização do Estado',
      'Poderes da União',
      'Defesa do Estado',
      'Segurança Pública',
      'Ordem Social',
      'Emendas Constitucionais'
    ],
    questoes: 520
  },
  {
    id: 'administrativo',
    nome: 'Direito Administrativo',
    icon: 'FileText',
    cor: 'from-green-500 to-green-700',
    topicos: [
      'Princípios da Administração',
      'Atos Administrativos',
      'Poderes Administrativos',
      'Licitações e Contratos',
      'Servidores Públicos',
      'Responsabilidade Civil',
      'Improbidade Administrativa',
      'Processo Administrativo'
    ],
    questoes: 410
  },
  {
    id: 'penal',
    nome: 'Direito Penal',
    icon: 'Gavel',
    cor: 'from-orange-500 to-orange-700',
    topicos: [
      'Princípios do Direito Penal',
      'Aplicação da Lei Penal',
      'Crime e Contravenção',
      'Imputabilidade',
      'Crimes contra a Pessoa',
      'Crimes contra o Patrimônio',
      'Crimes contra a Administração',
      'Lei de Drogas'
    ],
    questoes: 480
  },
  {
    id: 'informatica',
    nome: 'Informática',
    icon: 'Monitor',
    cor: 'from-cyan-500 to-cyan-700',
    topicos: [
      'Windows e Linux',
      'Microsoft Office',
      'Internet e Navegadores',
      'E-mail e Comunicação',
      'Segurança da Informação',
      'Redes de Computadores',
      'Hardware e Software',
      'Cloud Computing'
    ],
    questoes: 290
  },
  {
    id: 'atualidades',
    nome: 'Atualidades',
    icon: 'Newspaper',
    cor: 'from-pink-500 to-pink-700',
    topicos: [
      'Política Nacional',
      'Economia Brasileira',
      'Segurança Pública',
      'Meio Ambiente',
      'Tecnologia e Inovação',
      'Saúde Pública',
      'Educação',
      'Direitos Humanos'
    ],
    questoes: 320
  },
  {
    id: 'historia',
    nome: 'História do Brasil',
    icon: 'Landmark',
    cor: 'from-amber-500 to-amber-700',
    topicos: [
      'Brasil Colônia',
      'Império Brasileiro',
      'República Velha',
      'Era Vargas',
      'Ditadura Militar',
      'Redemocratização',
      'Brasil Contemporâneo',
      'História Regional'
    ],
    questoes: 250
  },
  {
    id: 'geografia',
    nome: 'Geografia do Brasil',
    icon: 'Map',
    cor: 'from-teal-500 to-teal-700',
    topicos: [
      'Geografia Física',
      'Regiões Brasileiras',
      'Clima e Vegetação',
      'Hidrografia',
      'População e Demografia',
      'Urbanização',
      'Economia Regional',
      'Geopolítica'
    ],
    questoes: 230
  }
];

export const questoesExemplo = [
  {
    id: 1,
    disciplina: 'portugues',
    estado: 'SP',
    ano: 2023,
    banca: 'VUNESP',
    enunciado: 'Assinale a alternativa em que a concordância verbal está CORRETA:',
    alternativas: [
      'Fazem dois anos que não o vejo.',
      'Houveram muitos problemas na operação.',
      'Deve haver soluções para o caso.',
      'Podem existir outras explicações.',
      'Haviam muitas pessoas no local.'
    ],
    correta: 2,
    explicacao: 'O verbo "haver" no sentido de existir é impessoal e fica sempre no singular. "Deve haver" está correto.'
  },
  {
    id: 2,
    disciplina: 'matematica',
    estado: 'RJ',
    ano: 2023,
    banca: 'IBFC',
    enunciado: 'Um policial percorre 3/5 de um trajeto em 2 horas. Mantendo a mesma velocidade, quanto tempo levará para percorrer o trajeto completo?',
    alternativas: [
      '2h 30min',
      '3h',
      '3h 20min',
      '3h 30min',
      '4h'
    ],
    correta: 2,
    explicacao: '3/5 = 2h, então 1/5 = 40min. Total: 5/5 = 5 × 40min = 200min = 3h 20min'
  },
  {
    id: 3,
    disciplina: 'direito',
    estado: 'MG',
    ano: 2024,
    banca: 'FUMARC',
    enunciado: 'Segundo a Constituição Federal, a segurança pública é dever do Estado e responsabilidade de:',
    alternativas: [
      'Apenas das polícias militares.',
      'Apenas do governo federal.',
      'De todos os cidadãos.',
      'Apenas das forças armadas.',
      'Apenas dos órgãos de segurança.'
    ],
    correta: 2,
    explicacao: 'CF/88, Art. 144: "A segurança pública, dever do Estado, direito e responsabilidade de todos..."'
  }
];

export const simulados = [
  {
    id: 1,
    titulo: 'Simulado Geral - Nível Básico',
    descricao: 'Simulado completo com questões de todas as disciplinas',
    questoes: 50,
    tempo: 180,
    nivel: 'Básico',
    disciplinas: ['portugues', 'matematica', 'direito', 'informatica']
  },
  {
    id: 2,
    titulo: 'Simulado Geral - Nível Intermediário',
    descricao: 'Simulado com questões de dificuldade média',
    questoes: 60,
    tempo: 210,
    nivel: 'Intermediário',
    disciplinas: ['portugues', 'matematica', 'direito', 'administrativo', 'penal']
  },
  {
    id: 3,
    titulo: 'Simulado Geral - Nível Avançado',
    descricao: 'Simulado completo com questões difíceis',
    questoes: 80,
    tempo: 240,
    nivel: 'Avançado',
    disciplinas: ['portugues', 'matematica', 'direito', 'administrativo', 'penal', 'atualidades']
  },
  {
    id: 4,
    titulo: 'Simulado PM-SP 2024',
    descricao: 'Baseado no último edital da PM-SP',
    questoes: 100,
    tempo: 300,
    nivel: 'Específico',
    disciplinas: ['portugues', 'matematica', 'direito', 'historia', 'geografia']
  },
  {
    id: 5,
    titulo: 'Simulado PM-RJ 2024',
    descricao: 'Baseado no último edital da PM-RJ',
    questoes: 90,
    tempo: 270,
    nivel: 'Específico',
    disciplinas: ['portugues', 'matematica', 'direito', 'informatica', 'atualidades']
  }
];

export const estatisticas = {
  totalQuestoes: 3330,
  totalSimulados: 50,
  totalEstados: 27,
  totalDisciplinas: 9,
  aprovados: 15420,
  notaMedia: 8.5
};
