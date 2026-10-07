// Todo o conteúdo do portfólio fica aqui.
// Pra atualizar texto, projeto ou link, edite só este arquivo.

import type { IconType } from 'react-icons'
import {
  SiTypescript, SiReact, SiNextdotjs, SiNestjs, SiDotnet, SiPostgresql, SiPrisma,
  SiTailwindcss, SiNodedotjs, SiJavascript, SiPython, SiGit, SiExpress, SiPhp,
  SiMysql, SiMongodb, SiBootstrap, SiPostman, SiFigma, SiLinux,
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import { DiMsqlServer } from 'react-icons/di'

export const perfil = {
  nome: 'Leandro Candido',
  apelido: 'Léo',
  cargo: 'Desenvolvedor de software',
  empresa: 'Tahto',
  local: 'Campo Grande, MS',
  idade: 21,
  foto: '/media/foto-perfil.jpeg',
  email: 'leandrocandido638@gmail.com',
  resumo:
    'Trabalho na Tahto desenvolvendo plataformas internas usadas no dia a dia da empresa, do banco de dados à interface. Por fora, atendo clientes como freelancer, construindo sites e sistemas sob medida.',
  sobre: [
    'Sou formado em Análise e Desenvolvimento de Sistemas pela UCDB e técnico em Desenvolvimento de Sistemas pelo Senac. Comecei como jovem aprendiz na Digix e hoje atuo na Tahto, em desenvolvimento e documentação de sistemas.',
    'No dia a dia transito entre C#/.NET, NestJS, Next.js e SQL Server. Já corrigi bugs em produção com apoio de consultas SQL, participei da correção de vulnerabilidades de SQL Injection em APIs e cuido de levantamento de requisitos, documentação técnica e diagramas.',
    'Gosto de entender o problema inteiro antes de escrever código, e de entregar coisas que as pessoas realmente usam.',
  ],
}

export const redes = {
  github: 'https://github.com/Leandro-Oli2',
  linkedin: 'https://www.linkedin.com/in/leandro-oliveira29/',
  instagram: 'https://www.instagram.com/leandro_oli29/',
}

export type Etapa = {
  periodo: string
  titulo: string
  lugar: string
  descricao: string
}

export const trajetoria: Etapa[] = [
  {
    periodo: 'Mar 2023 a Dez 2025',
    titulo: 'Análise e Desenvolvimento de Sistemas',
    lugar: 'UCDB',
    descricao: 'Graduação tecnológica concluída, com foco em engenharia de software e banco de dados.',
  },
  {
    periodo: 'Mar 2024 a Jul 2025',
    titulo: 'Técnico em Desenvolvimento de Sistemas',
    lugar: 'Senac MS (Senac Hub Academy)',
    descricao: 'Formação técnica com projetos práticos, como o e-commerce Tweeb.',
  },
  {
    periodo: 'Set 2024 a Set 2025',
    titulo: 'Jovem aprendiz em desenvolvimento de software',
    lugar: 'Digix',
    descricao: 'Apoio no desenvolvimento de aplicações internas em C# e .NET, integração de funcionalidades e versionamento com Git.',
  },
  {
    periodo: 'Out 2025 até hoje',
    titulo: 'Jovem aprendiz em desenvolvimento e documentação de sistemas',
    lugar: 'Tahto',
    descricao:
      'Desenvolvimento full stack na plataforma de gamificação e na intranet corporativa, correções de segurança e de bugs em produção, requisitos e documentação técnica.',
  },
]

export type Curso = { nome: string; instituicao: string; data: string }

export const cursos: Curso[] = [
  { nome: 'PCAP: Programming Essentials in Python', instituicao: 'Cisco Networking Academy / OpenEDG Python Institute', data: 'Mai 2024' },
  { nome: 'JavaScript Essentials 1', instituicao: 'Cisco Networking Academy / Senac MS', data: 'Out 2024' },
]

export type Skill = { nome: string; icone: IconType }

export const skills: Skill[] = [
  { nome: 'C#', icone: TbBrandCSharp },
  { nome: 'ASP.NET Core', icone: SiDotnet },
  { nome: 'TypeScript', icone: SiTypescript },
  { nome: 'JavaScript', icone: SiJavascript },
  { nome: 'React', icone: SiReact },
  { nome: 'Next.js', icone: SiNextdotjs },
  { nome: 'Node.js', icone: SiNodedotjs },
  { nome: 'NestJS', icone: SiNestjs },
  { nome: 'Express', icone: SiExpress },
  { nome: 'Prisma', icone: SiPrisma },
  { nome: 'SQL Server', icone: DiMsqlServer },
  { nome: 'PostgreSQL', icone: SiPostgresql },
  { nome: 'MySQL', icone: SiMysql },
  { nome: 'MongoDB', icone: SiMongodb },
  { nome: 'Tailwind', icone: SiTailwindcss },
  { nome: 'Bootstrap', icone: SiBootstrap },
  { nome: 'PHP', icone: SiPhp },
  { nome: 'Python', icone: SiPython },
  { nome: 'Git', icone: SiGit },
  { nome: 'Postman', icone: SiPostman },
  { nome: 'Figma', icone: SiFigma },
  { nome: 'Linux', icone: SiLinux },
]

export type Projeto = {
  nome: string
  // Define em qual grupo o projeto aparece
  tipo: 'profissional' | 'pessoal'
  contexto: 'Tahto' | 'Freelance' | 'Projeto pessoal' | 'Estudo'
  descricao: string
  destaques?: string[]
  stack: string[]
  status?: string
  link?: { texto: string; url: string }
  imagem?: string
  // Cores do "planeta" que representa o projeto quando não tem imagem
  cores: [string, string]
}

export const projetos: Projeto[] = [
  {
    nome: 'Imobiliária Legado',
    tipo: 'profissional',
    contexto: 'Freelance',
    descricao: 'Site imobiliário desenvolvido para cliente, com vitrine de imóveis e painel de gestão.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'ASP.NET Core', 'PostgreSQL', 'Cloudinary'],
    status: 'No ar',
    link: { texto: 'Visitar site', url: 'https://xn--imobilirialegado-lmb.com.br/' },
    cores: ['#E6C36A', '#1B4332'],
  },
  {
    nome: 'Plataforma de gamificação',
    tipo: 'profissional',
    contexto: 'Tahto',
    descricao:
      'Plataforma interna de desempenho e recompensas para colaboradores, com metas, moedas e loja.',
    destaques: [
      'Desenvolvimento full stack de funcionalidades',
      'Correção de vulnerabilidades de SQL Injection em APIs C#',
      'Investigação e correção de bugs em produção com apoio de consultas SQL',
    ],
    stack: ['C#', '.NET', 'NestJS', 'Next.js', 'SQL Server'],
    status: 'Sistema interno',
    cores: ['#FFB265', '#B2462E'],
  },
  {
    nome: 'Intranet corporativa',
    tipo: 'profissional',
    contexto: 'Tahto',
    descricao: 'Portal interno com publicações, comunicados e notificações para os colaboradores.',
    destaques: [
      'Autenticação SSO',
      'Sistema de publicações e notificações',
    ],
    stack: ['ASP.NET Core', 'Entity Framework Core', 'PostgreSQL'],
    status: 'Sistema interno',
    cores: ['#8C7BFF', '#2C2475'],
  },
  {
    nome: 'Tweeb',
    tipo: 'pessoal',
    contexto: 'Estudo',
    descricao: 'E-commerce de peças de informática com sistema de recomendação de produtos.',
    stack: ['PHP', 'JavaScript', 'MySQL'],
    imagem: '/media/tweeb.png',
    link: { texto: 'Ver no GitHub', url: 'https://github.com/VoucherDesenvSenacHub/Tweeb-2025' },
    cores: ['#5AB8FF', '#123A6B'],
  },
  {
    nome: 'Landing page de hamburgueria',
    tipo: 'pessoal',
    contexto: 'Estudo',
    descricao: 'Página de cardápio e promoções com carrossel e depoimentos.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    imagem: '/media/landing-burger.png',
    link: { texto: 'Abrir página', url: '/landing/index.html' },
    cores: ['#FF8A4C', '#7A2A10'],
  },
]
