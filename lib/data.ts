export type Skill = {
  slug: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  price: string;
  mentor: string;
  description: string;
  outcomes: string[];
  exercises: number;
  enrolled: number;
};

export const categories = [
  'Excel & Dados', 'Contabilidade', 'Fiscalidade', 'Recursos Humanos',
  'Gestão', 'Marketing', 'Vendas', 'Finanças', 'Power BI', 'Tecnologia',
  'Administração', 'Empreendedorismo'
];

export const skills: Skill[] = [
  { slug: 'excel-gestao-financeira', title: 'Excel para Gestão Financeira', category: 'Finanças', level: 'Intermédio', duration: '6 semanas', price: '1 500 MT', mentor: 'Ana Mucavele', description: 'Aprenda a transformar dados financeiros em informação útil para acompanhar resultados, custos e decisões.', outcomes: ['Modelar mapas financeiros', 'Criar indicadores de gestão', 'Construir análises e dashboards'], exercises: 6, enrolled: 84 },
  { slug: 'processamento-salarios', title: 'Processamento de Salários', category: 'Recursos Humanos', level: 'Prático', duration: '4 semanas', price: '1 200 MT', mentor: 'Carlos Nhantumbo', description: 'Domine um processo completo de payroll através de exercícios baseados em situações empresariais reais.', outcomes: ['Organizar dados de colaboradores', 'Processar remunerações', 'Preparar mapas e conferências'], exercises: 5, enrolled: 61 },
  { slug: 'contabilidade-pequenas-empresas', title: 'Contabilidade para Pequenas Empresas', category: 'Contabilidade', level: 'Fundamentos', duration: '5 semanas', price: '1 300 MT', mentor: 'Marta Cossa', description: 'Construa uma visão prática da contabilidade e use a informação financeira para apoiar o negócio.', outcomes: ['Registar operações', 'Reconhecer documentos', 'Interpretar resultados'], exercises: 5, enrolled: 73 },
  { slug: 'power-bi-decisao', title: 'Power BI para Decisão', category: 'Excel & Dados', level: 'Intermédio', duration: '6 semanas', price: '1 800 MT', mentor: 'Edson Matavele', description: 'Passe de tabelas dispersas para indicadores claros e painéis que apoiam decisões.', outcomes: ['Preparar dados', 'Criar métricas', 'Construir dashboards'], exercises: 7, enrolled: 49 },
  { slug: 'gestao-fiscal-pratica', title: 'Gestão Fiscal na Prática', category: 'Fiscalidade', level: 'Prático', duration: '4 semanas', price: '1 500 MT', mentor: 'João Macuácua', description: 'Trabalhe situações fiscais através de casos e exercícios que aproximam a aprendizagem da rotina profissional.', outcomes: ['Organizar obrigações', 'Analisar situações fiscais', 'Documentar procedimentos'], exercises: 6, enrolled: 92 },
  { slug: 'marketing-digital-negocios', title: 'Marketing Digital para Negócios', category: 'Marketing', level: 'Intermédio', duration: '5 semanas', price: '1 400 MT', mentor: 'Lídia Sitoe', description: 'Planeie e execute ações digitais com foco em objetivos comerciais e medição de resultados.', outcomes: ['Definir públicos', 'Criar campanhas', 'Medir resultados'], exercises: 5, enrolled: 56 },
];

export const participant = {
  name: 'Utilizador SkillHub',
  role: 'Participante',
  score: 78,
  completed: 2,
  inProgress: 2,
  certificates: 1,
};

export const dashboardSkills = [
  { ...skills[0], progress: 72, next: 'Exercício 5 · Análise de desvios' },
  { ...skills[4], progress: 45, next: 'Exercício 3 · Caso fiscal' },
  { ...skills[2], progress: 100, next: 'Certificado disponível' },
];
