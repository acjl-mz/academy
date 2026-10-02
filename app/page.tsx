import { ArrowRight, BarChart3, BriefcaseBusiness, CalendarDays, Check, ChevronRight, CircleCheck, FileCheck2, Search, Sparkles, UsersRound } from "lucide-react";

const categories: {name:string; description:string; icon: typeof BarChart3}[] = [
  {name:"Excel & Dados",description:"Dados, Excel, Power BI e análise",icon:BarChart3},
  {name:"Contabilidade",description:"Registos, fecho e informação financeira",icon:FileCheck2},
  {name:"Fiscalidade",description:"Gestão fiscal e cumprimento",icon:CircleCheck},
  {name:"Recursos Humanos",description:"Pessoas, payroll e processos",icon:UsersRound},
  {name:"Gestão",description:"Organização, processos e liderança",icon:BriefcaseBusiness},
  {name:"Marketing",description:"Comunicação, estratégia e execução",icon:ArrowRight},
  {name:"Vendas",description:"Processos e competências comerciais",icon:ArrowRight},
  {name:"Finanças",description:"Análise e decisão financeira",icon:BarChart3},
];

const skills = [
  {code:"EX",slug:"excel-gestao-financeira",title:"Excel para Gestão Financeira",category:"Finanças",level:"Intermédio",duration:"6 semanas",price:"1 500 MT",mentor:"Ana Mucavele",description:"Transforme dados financeiros em informação útil para acompanhar resultados e decisões."},
  {code:"RH",slug:"processamento-salarios",title:"Processamento de Salários",category:"Recursos Humanos",level:"Prático",duration:"4 semanas",price:"1 200 MT",mentor:"Carlos Nhantumbo",description:"Pratique um processo completo de payroll através de situações empresariais reais."},
  {code:"CT",slug:"contabilidade-pequenas-empresas",title:"Contabilidade para Pequenas Empresas",category:"Contabilidade",level:"Fundamentos",duration:"5 semanas",price:"1 300 MT",mentor:"Marta Cossa",description:"Construa uma visão prática da contabilidade e da informação financeira do negócio."},
  {code:"BI",slug:"power-bi-decisao",title:"Power BI para Decisão",category:"Excel & Dados",level:"Intermédio",duration:"6 semanas",price:"1 800 MT",mentor:"Edson Matavele",description:"Passe de dados dispersos para indicadores e dashboards que apoiam decisões."},
];

const tracks: {number:string; title:string; description:string; skills:string[]}[] = [
  {number:"01",title:"Finanças e Contabilidade",description:"Da organização da informação à análise que apoia a decisão.",skills:["Excel para Gestão Financeira","Contabilidade para Pequenas Empresas"]},
  {number:"02",title:"Pessoas e Operações",description:"Competências práticas para gerir pessoas, rotinas e processos.",skills:["Processamento de Salários","Gestão de Equipas"]},
  {number:"03",title:"Dados e Decisão",description:"Transforme dados de trabalho em informação que pode usar.",skills:["Power BI para Decisão","Excel & Dados"]},
];

const events = [
  {type:"MASTERCLASS",title:"IA aplicada ao trabalho",meta:"Sessão especial · Em breve",tag:"ONLINE",number:"01"},
  {type:"WORKSHOP",title:"Excel para Gestão Financeira",meta:"Workshop prático · Em breve",tag:"PRÁTICO",number:"02"},
  {type:"CONFERÊNCIA",title:"O futuro das competências profissionais",meta:"Encontro SkillHub · Em breve",tag:"EVENTO",number:"03"},
];

function Brand(){return <span className="brand"><span className="brand-mark">S</span><span className="brand-copy">Skill<span>Hub</span><small>by ALINVEST</small></span></span>}

export default function Home(){
return <div className="site-shell">
<header className="topbar"><div className="container topbar-inner">
<a href="/" aria-label="SkillHub by ALINVEST"><Brand/></a>
<nav className="main-nav"><a href="/skills">Explorar</a><a href="/percursos">Percursos</a><a href="/eventos">Eventos</a><a href="/empresa">Para empresas</a></nav>
<details className="mobile-menu"><summary aria-label="Abrir menu"><span></span><span></span><span></span></summary><div className="mobile-menu-panel"><a href="/skills">Explorar</a><a href="#percursos">Percursos</a><a href="#eventos">Eventos</a><a href="#empresas">Para empresas</a></div></details>
<div className="header-search"><Search size={16}/><input aria-label="Pesquisar" placeholder="Pesquisar competências..."/></div>
<div className="header-actions"><a className="login-link" href="/login">Entrar</a><a className="button button-primary button-small" href="/signup">Criar conta</a></div>
</div></header>

<main>
<section className="hero-billboard"><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="container hero-grid">
<div className="hero-copy">
<h1>Competências que se transformam em <span>resultado.</span></h1>
<p>Aprenda competências profissionais de forma prática, aplique em exercícios reais, receba orientação e construa evidências daquilo que sabe fazer.</p>
<div className="hero-actions"><a className="button button-primary button-large" href="/skills">Explorar competências <ArrowRight size={17}/></a><a className="text-link" href="#como-funciona">Como funciona <ChevronRight size={15}/></a></div>
<div className="hero-search"><Search size={19}/><input aria-label="Pesquisar competências" placeholder="O que quer aprender hoje?"/><a className="button button-dark" href="/skills">Pesquisar</a></div>
</div>
<div className="event-billboard">
<div className="billboard-glow"/>
<div className="billboard-top"><span><CalendarDays size={14}/> EM DESTAQUE</span><span className="billboard-live">SKILLHUB EVENTS</span></div>
<div className="billboard-date"><strong>EM<br/>BREVE</strong><span>EVENTO<br/>ESPECIAL</span></div>
<div className="billboard-content"><div className="event-kicker">MASTERCLASS</div><h2>IA aplicada<br/>ao trabalho</h2><p>Uma sessão prática para explorar como novas ferramentas podem apoiar tarefas, produtividade e decisões profissionais.</p></div>
<div className="billboard-footer"><span>Inscrições serão abertas em breve</span><a href="#eventos">Ver eventos <ArrowRight size={15}/></a></div>
</div>
</div></section>

<section className="momentum"><div className="container momentum-inner"><div className="momentum-intro"><span className="pulse-dot"/> AGORA NO SKILLHUB</div><div className="momentum-item"><strong>Aprender</strong><span>conteúdo estruturado</span></div><div className="momentum-item"><strong>Praticar</strong><span>exercícios reais</span></div><div className="momentum-item"><strong>Feedback</strong><span>orientação de mentor</span></div><div className="momentum-item"><strong>Demonstrar</strong><span>certificação verificável</span></div></div></section>

<section className="section action-section" id="como-funciona"><div className="container">
<div className="section-heading two-column"><div><div className="eyebrow">COMECE PELO QUE PRECISA</div><h2>O que quer <span>fazer</span> hoje?</h2></div><p>Uma experiência pensada para acompanhar diferentes momentos: aprender algo novo, resolver um desafio ou desenvolver uma competência para o próximo passo.</p></div>
<div className="intent-grid">
<a className="intent-card intent-main" href="/skills"><span className="intent-index">01</span><div><Sparkles size={24}/><h3>Quero aprender</h3><p>Encontre uma competência, ferramenta ou área e comece um percurso estruturado.</p></div><span className="intent-arrow"><ArrowRight size={19}/></span></a>
<a className="intent-card" href="/skills"><span className="intent-index">02</span><div><BarChart3 size={23}/><h3>Quero praticar</h3><p>Resolva exercícios próximos da realidade profissional.</p></div><span className="intent-arrow"><ArrowRight size={19}/></span></a>
<a className="intent-card" href="/signup"><span className="intent-index">03</span><div><CircleCheck size={23}/><h3>Quero evoluir</h3><p>Construa evidências, receba feedback e acompanhe o seu progresso.</p></div><span className="intent-arrow"><ArrowRight size={19}/></span></a>
</div></div></section>

<section className="section section-soft featured-section"><div className="container">
<div className="section-heading section-heading-row"><div><div className="eyebrow">SKILLS EM DESTAQUE</div><h2>Escolha uma competência.<br/><span>Comece a aplicar.</span></h2></div><a className="outline-link" href="/skills">Ver catálogo completo <ArrowRight size={15}/></a></div>
<div className="featured-skill-layout">
<a className="featured-skill" href={`/skills/${skills[0].slug}`}><div className="featured-art"><span>EX</span><small>FINANÇAS · INTERMÉDIO</small><div className="art-lines"><i/><i/><i/></div></div><div className="featured-content"><div className="skill-meta"><span>{skills[0].level}</span><i/><span>{skills[0].duration}</span></div><h3>{skills[0].title}</h3><p>{skills[0].description}</p><div className="featured-bottom"><span>Com {skills[0].mentor}</span><strong>{skills[0].price}</strong></div></div></a>
<div className="mini-skill-list">{skills.slice(1).map((s,i)=><a className="mini-skill" href={`/skills/${s.slug}`} key={s.slug}><div className={`mini-code mini-code-${i+2}`}>{s.code}</div><div><div className="skill-meta"><span>{s.category}</span><i/><span>{s.level}</span></div><h3>{s.title}</h3><p>{s.description}</p><strong>{s.price}</strong></div><ArrowRight size={17}/></a>)}</div>
</div></div></section>

<section className="section" id="percursos"><div className="container"><div className="section-heading section-heading-row"><div><div className="eyebrow">PERCURSOS PROFISSIONAIS</div><h2>Desenvolva o conjunto,<br/><span>não apenas uma skill.</span></h2></div><a className="outline-link" href="/skills">Explorar percursos <ArrowRight size={15}/></a></div>
<div className="track-grid">{tracks.map(t=><a className="track-card" href="/skills" key={t.number}><span className="track-number">{t.number}</span><h3>{t.title}</h3><p>{t.description}</p><div className="track-skills">{t.skills.map(x=><span key={x}>{x}</span>)}</div><span className="track-link">Explorar percurso <ArrowRight size={15}/></span></a>)}</div></div></section>

<section className="section area-section section-soft"><div className="container area-layout"><div className="area-intro"><div className="eyebrow">EXPLORE POR ÁREA</div><h2>Encontre o próximo<br/><span>passo.</span></h2><p>Competências organizadas por áreas de trabalho para tornar a descoberta mais simples.</p><a className="text-link green-link" href="/skills">Ver todas as áreas <ArrowRight size={15}/></a></div><div className="area-list">{categories.map(({name,description,icon:Icon},i)=><a href="/skills" className="area-item" key={name}><span className="area-number">{String(i+1).padStart(2,"0")}</span><span className="category-icon"><Icon size={17}/></span><span className="category-copy"><strong>{name}</strong><small>{description}</small></span><ArrowRight size={16}/></a>)}</div></div></section>

<section className="section events-section" id="eventos"><div className="container"><div className="section-heading section-heading-row"><div><div className="eyebrow eyebrow-green">EVENTOS SKILLHUB</div><h2>Aprendizagem também<br/><span>acontece ao vivo.</span></h2></div><a className="outline-link" href="/eventos">Ver todos os eventos <ArrowRight size={15}/></a></div>
<div className="events-grid">{events.map((event,i)=><a href="/eventos" className={`event-card event-card-${i+1}`} key={event.number}><div className="event-card-top"><span>{event.type}</span><small>{event.tag}</small></div><div className="event-number">{event.number}</div><h3>{event.title}</h3><p>{event.meta}</p><span className="event-card-link">Saber mais <ArrowRight size={15}/></span></a>)}</div></div></section>

<section className="section practice-section"><div className="container practice-layout"><div><div className="eyebrow eyebrow-green">APRENDER É FAZER</div><h2>Do conhecimento<br/>à <span>evidência.</span></h2><p>O percurso não termina quando o conteúdo acaba. A aprendizagem passa por aplicação, feedback e demonstração.</p><a className="button button-primary" href="/skills">Conhecer a experiência <ArrowRight size={16}/></a></div><div className="journey"><div className="journey-line"/><div className="journey-step active"><span>01</span><strong>Aprender</strong><small>Conteúdo e orientação</small></div><div className="journey-step"><span>02</span><strong>Praticar</strong><small>Exercícios reais</small></div><div className="journey-step"><span>03</span><strong>Feedback</strong><small>Mentor avalia</small></div><div className="journey-step"><span>04</span><strong>Demonstrar</strong><small>Certificação</small></div></div></div></section>

<section className="section certification-section"><div className="container certification-panel"><div className="certificate-visual"><div className="certificate-paper"><div className="certificate-mark">S</div><small>SKILLHUB BY ALINVEST</small><strong>Certificado de<br/>Competência</strong><span>Competência demonstrada através de aprendizagem e prática.</span><b>SKH-XXXXXXXXXX</b></div></div><div><div className="eyebrow">CERTIFICAÇÃO VERIFICÁVEL</div><h2>Uma conquista que<br/><span>pode ser demonstrada.</span></h2><p>Ao concluir um percurso, o participante pode receber um certificado associado às competências e resultados alcançados.</p><div className="check-list"><span><Check size={15}/> Código único de verificação</span><span><Check size={15}/> Consulta pública online</span><span><Check size={15}/> Associado ao percurso concluído</span></div><a className="text-link green-link" href="/certificados">Como funciona a certificação <ArrowRight size={15}/></a></div></div></section>

<section className="section companies-section" id="empresas"><div className="container company-panel"><div><div className="eyebrow">PARA EMPRESAS</div><h2>Transforme necessidades da equipa em <span>desafios de aprendizagem.</span></h2><p>Estruture desafios práticos, acompanhe desenvolvimento e crie uma visão mais clara das competências que a sua equipa consegue demonstrar.</p><a className="button button-dark" href="/empresa">Conhecer solução para empresas <ArrowRight size={16}/></a></div><div className="company-list"><div><span>01</span><strong>Desafios práticos</strong><small>Competências avaliadas através de tarefas.</small></div><div><span>02</span><strong>Acompanhamento</strong><small>Visibilidade sobre o desenvolvimento.</small></div><div><span>03</span><strong>Evidências</strong><small>Resultados que podem ser consultados.</small></div></div></div></section>

<section className="final-section"><div className="container final-inner"><div className="final-mark">SH</div><div className="eyebrow eyebrow-green">SKILLHUB BY ALINVEST</div><h2>A próxima competência<br/><span>começa aqui.</span></h2><p>Aprenda. Pratique. Receba feedback. Demonstre o que sabe fazer.</p><a className="button button-primary button-large" href="/skills">Explorar skills <ArrowRight size={17}/></a></div></section>
</main>

<footer className="footer"><div className="container footer-grid"><div className="footer-brand"><a href="/"><Brand/></a><p>Formação prática de competências profissionais em Moçambique.</p></div><div><strong>Plataforma</strong><a href="/skills">Explorar skills</a><a href="#percursos">Percursos</a><a href="#eventos">Eventos</a></div><div><strong>Empresas</strong><a href="/empresa">Solução para empresas</a><a href="/signup">Criar conta</a></div><div><strong>ALINVEST</strong><span>Moçambique</span><span>© 2026 ALINVEST</span></div></div></footer>
</div>
}
