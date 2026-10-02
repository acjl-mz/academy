import { ArrowRight, BarChart3, BriefcaseBusiness, Check, ChevronRight, CircleCheck, FileCheck2, Search, UsersRound } from "lucide-react";

const categories: {name:string; description:string; icon: typeof BarChart3}[]=[
{name:"Excel & Dados",description:"Dados, Excel, Power BI e análise",icon:BarChart3},{name:"Contabilidade",description:"Registos, fecho e informação financeira",icon:FileCheck2},{name:"Fiscalidade",description:"Gestão fiscal e cumprimento",icon:CircleCheck},{name:"Recursos Humanos",description:"Pessoas, payroll e processos",icon:UsersRound},{name:"Gestão",description:"Organização, processos e liderança",icon:BriefcaseBusiness},{name:"Marketing",description:"Comunicação, estratégia e execução",icon:ArrowRight},{name:"Vendas",description:"Processos e competências comerciais",icon:ArrowRight},{name:"Finanças",description:"Análise e decisão financeira",icon:BarChart3},
];
const skills=[
{code:"EX",slug:"excel-gestao-financeira",title:"Excel para Gestão Financeira",category:"Finanças",level:"Intermédio",duration:"6 semanas",price:"1 500 MT",mentor:"Ana Mucavele",description:"Transforme dados financeiros em informação útil para acompanhar resultados e decisões."},
{code:"RH",slug:"processamento-salarios",title:"Processamento de Salários",category:"Recursos Humanos",level:"Prático",duration:"4 semanas",price:"1 200 MT",mentor:"Carlos Nhantumbo",description:"Pratique um processo completo de payroll através de situações empresariais reais."},
{code:"CT",slug:"contabilidade-pequenas-empresas",title:"Contabilidade para Pequenas Empresas",category:"Contabilidade",level:"Fundamentos",duration:"5 semanas",price:"1 300 MT",mentor:"Marta Cossa",description:"Construa uma visão prática da contabilidade e da informação financeira do negócio."},
{code:"BI",slug:"power-bi-decisao",title:"Power BI para Decisão",category:"Excel & Dados",level:"Intermédio",duration:"6 semanas",price:"1 800 MT",mentor:"Edson Matavele",description:"Passe de dados dispersos para indicadores e dashboards que apoiam decisões."},
];
const tracks: {number:string; title:string; description:string; skills:string[]}[]=[
{number:"01",title:"Finanças e Contabilidade",description:"Da organização da informação à análise que apoia a decisão.",skills:["Excel para Gestão Financeira","Contabilidade para Pequenas Empresas"]},
{number:"02",title:"Pessoas e Operações",description:"Competências práticas para gerir pessoas, rotinas e processos.",skills:["Processamento de Salários","Gestão de Equipas"]},
{number:"03",title:"Dados e Decisão",description:"Transforme dados de trabalho em informação que pode usar.",skills:["Power BI para Decisão","Excel & Dados"]},
];
function Brand(){return <span className="brand"><span className="brand-mark">S</span><span className="brand-copy">Skill<span>Hub</span><small>by ALINVEST</small></span></span>}

export default function Home(){
return <div className="site-shell">
<header className="topbar"><div className="container topbar-inner">
<a href="/" aria-label="SkillHub by ALINVEST"><Brand/></a>
<nav className="main-nav"><a href="/skills">Explorar</a><a href="#percursos">Percursos</a><a href="#como-funciona">Como funciona</a><a href="#empresas">Para empresas</a></nav>
<div className="header-search"><Search size={16}/><input aria-label="Pesquisar" placeholder="Pesquisar competências..."/></div>
<div className="header-actions"><a className="login-link" href="/login">Entrar</a><a className="button button-primary button-small" href="/signup">Criar conta</a></div>
</div></header>

<main>
<section className="hero-modern"><div className="container hero-modern-grid"><div className="hero-copy">
<div className="eyebrow eyebrow-blue">SKILLHUB BY ALINVEST · MOÇAMBIQUE</div>
<h1>Desenvolva as competências que o seu trabalho exige.</h1>
<p>Formação profissional prática para aprender, aplicar, receber orientação e construir evidências reais daquilo que sabe fazer.</p>
<div className="hero-search"><Search size={19}/><input aria-label="Pesquisar competências" placeholder="O que quer aprender? Pesquise por competência, ferramenta ou área"/><a className="button button-primary" href="/skills">Pesquisar</a></div>
<div className="quick-links"><span>Explore:</span><a href="/skills?category=Excel">Excel</a><a href="/skills?category=Contabilidade">Contabilidade</a><a href="/skills?category=RH">Recursos Humanos</a><a href="/skills?category=Power%20BI">Power BI</a></div>
</div>
<div className="learning-preview"><div className="preview-top"><span>O SEU PERCURSO</span><span className="preview-status"><Check size={12}/> Em progresso</span></div>
<div className="preview-main"><div className="preview-icon">EX</div><div><span className="preview-category">FINANÇAS · INTERMÉDIO</span><h2>Excel para Gestão Financeira</h2><p>Próximo exercício: análise de desvios</p></div></div>
<div className="progress-row"><div className="progress-track"><span/></div><strong>72%</strong></div><div className="preview-divider"/>
<div className="preview-footer"><div><span>EXERCÍCIOS</span><strong>6</strong></div><div><span>MENTOR</span><strong>Ana M.</strong></div><div><span>CERTIFICADO</span><strong>Verificável</strong></div></div>
<a href="/skills/excel-gestao-financeira" className="preview-link">Continuar percurso <ArrowRight size={15}/></a></div>
</div></section>

<section className="proof-bar"><div className="container proof-bar-inner"><span>UMA EXPERIÊNCIA DE APRENDIZAGEM CENTRADA NA COMPETÊNCIA</span><div><b>Aprender</b><ChevronRight size={14}/><b>Praticar</b><ChevronRight size={14}/><b>Receber feedback</b><ChevronRight size={14}/><b>Demonstrar</b></div></div></section>

<section className="section section-tight" id="como-funciona"><div className="container">
<div className="section-heading two-column"><div><div className="eyebrow">COMO FUNCIONA</div><h2>Aprenda pelo que precisa <span>fazer.</span></h2></div><p>O SkillHub aproxima a formação da realidade profissional. Em vez de apenas consumir conteúdo, o participante pratica, recebe orientação e constrói evidências.</p></div>
<div className="process-grid">{[["01","Escolha uma skill","Encontre uma competência alinhada ao seu trabalho, carreira ou próximo desafio."],["02","Aprenda com orientação","Conteúdo estruturado e orientação para compreender como aplicar."],["03","Resolva exercícios","Trabalhe casos e tarefas próximos da realidade profissional."],["04","Receba feedback","Um mentor avalia o seu trabalho e orienta os próximos passos."]].map(([n,t,d])=><article className="process-item" key={n}><span className="process-number">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
</div></section>

<section className="section section-soft"><div className="container"><div className="section-heading section-heading-row"><div><div className="eyebrow">SKILLS EM DESTAQUE</div><h2>Competências para aplicar no trabalho.</h2></div><a className="outline-link" href="/skills">Ver catálogo completo <ArrowRight size={15}/></a></div>
<div className="skill-grid">{skills.map((s,i)=><a className="skill-card-modern" href={`/skills/${s.slug}`} key={s.slug}><div className={"skill-visual skill-visual-"+(i+1)}><span>{s.code}</span><small>{s.category}</small></div><div className="skill-card-content"><div className="skill-meta"><span>{s.level}</span><i/><span>{s.duration}</span></div><h3>{s.title}</h3><p>{s.description}</p><div className="skill-card-bottom"><div className="mentor"><span className="avatar">{s.mentor.charAt(0)}</span><span>Com {s.mentor}</span></div><strong>{s.price}</strong></div></div></a>)}</div></div></section>

<section className="section" id="percursos"><div className="container"><div className="section-heading section-heading-row"><div><div className="eyebrow">PERCURSOS PROFISSIONAIS</div><h2>Comece pela área. Desenvolva o conjunto.</h2></div><a className="outline-link" href="/skills">Explorar percursos <ArrowRight size={15}/></a></div>
<div className="track-grid">{tracks.map(t=><a className="track-card" href="/skills" key={t.number}><span className="track-number">{t.number}</span><h3>{t.title}</h3><p>{t.description}</p><div className="track-skills">{t.skills.map(x=><span key={x}>{x}</span>)}</div><span className="track-link">Explorar percurso <ArrowRight size={15}/></span></a>)}</div></div></section>

<section className="section section-soft categories-section"><div className="container"><div className="section-heading"><div className="eyebrow">EXPLORE POR ÁREA</div><h2>O que quer desenvolver hoje?</h2></div>
<div className="category-grid">{categories.map(({name,description,icon:Icon})=><a href="/skills" className="category-item" key={name}><span className="category-icon"><Icon size={18}/></span><span className="category-copy"><strong>{name}</strong><small>{description}</small></span><ArrowRight size={16}/></a>)}</div></div></section>

<section className="section evidence-section"><div className="container evidence-layout"><div><div className="eyebrow eyebrow-blue">APRENDIZAGEM COM EVIDÊNCIA</div><h2>Não basta saber.<br/><span>É preciso conseguir demonstrar.</span></h2><p>O percurso do SkillHub foi pensado para ligar aprendizagem e aplicação: exercícios práticos, feedback humano e certificação verificável.</p><a className="button button-primary" href="/skills">Começar a aprender <ArrowRight size={16}/></a></div>
<div className="evidence-list"><div><span>01</span><div><strong>Exercícios práticos</strong><p>Tarefas baseadas em situações que podem acontecer no trabalho.</p></div></div><div><span>02</span><div><strong>Feedback de mentor</strong><p>Orientação sobre aquilo que produziu, não apenas sobre o que assistiu.</p></div></div><div><span>03</span><div><strong>Certificação verificável</strong><p>Um certificado associado a um percurso e consultável online.</p></div></div></div></div></section>

<section className="section companies-section" id="empresas"><div className="container company-panel"><div><div className="eyebrow">PARA EMPRESAS</div><h2>Desenvolva competências dentro da sua organização.</h2><p>Estruture desafios práticos, acompanhe desenvolvimento e crie uma visão mais clara das competências que a sua equipa consegue demonstrar.</p><a className="button button-dark" href="/empresa">Conhecer solução para empresas <ArrowRight size={16}/></a></div>
<div className="company-list"><div><span>01</span><strong>Desafios práticos</strong><small>Competências avaliadas através de tarefas.</small></div><div><span>02</span><strong>Acompanhamento</strong><small>Visibilidade sobre o desenvolvimento.</small></div><div><span>03</span><strong>Evidências</strong><small>Resultados que podem ser consultados.</small></div></div></div></section>

<section className="final-section"><div className="container final-inner"><div className="eyebrow eyebrow-blue">SKILLHUB BY ALINVEST</div><h2>Escolha uma competência.<br/>Comece a construir.</h2><p>Aprenda. Pratique. Receba feedback. Demonstre o que sabe fazer.</p><a className="button button-primary button-large" href="/skills">Explorar skills <ArrowRight size={17}/></a></div></section>
</main>

<footer className="footer"><div className="container footer-grid"><div className="footer-brand"><a href="/"><Brand/></a><p>Formação prática de competências profissionais em Moçambique.</p></div><div><strong>Plataforma</strong><a href="/skills">Explorar skills</a><a href="#percursos">Percursos</a><a href="#como-funciona">Como funciona</a></div><div><strong>Empresas</strong><a href="/empresa">Solução para empresas</a><a href="/signup">Criar conta</a></div><div><strong>ALINVEST</strong><span>Moçambique</span><span>© 2026 ALINVEST</span></div></div></footer>
</div>
}
