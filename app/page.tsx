const categories = [
  ['Excel & Dados','Transformar informação em decisões.'],
  ['Contabilidade','Prática financeira para a rotina empresarial.'],
  ['Fiscalidade','Competências para processos e obrigações fiscais.'],
  ['Recursos Humanos','Pessoas, processos e ferramentas de gestão.'],
  ['Gestão','Organizar e gerir melhor o negócio.'],
  ['Marketing','Estratégia, comunicação e execução.'],
  ['Vendas','Processos e técnicas comerciais.'],
  ['Finanças','Análise financeira aplicada à decisão.'],
];
const skills = [
  ['excel-gestao-financeira','Excel para Gestão Financeira','Finanças','Intermédio','6 semanas','1 500 MT'],
  ['processamento-salarios','Processamento de Salários','Recursos Humanos','Prático','4 semanas','1 200 MT'],
  ['contabilidade-pequenas-empresas','Contabilidade para Pequenas Empresas','Contabilidade','Fundamentos','5 semanas','1 300 MT'],
  ['power-bi-decisao','Power BI para Decisão','Excel & Dados','Intermédio','6 semanas','1 800 MT'],
];

export default function Home(){
  return <div>
    <header className="site-header"><div className="container nav">
      <a className="brand" href="/"><span className="brand-mark">S</span><span>Skill<span>Hub</span><small>by ALINVEST</small></span></a>
      <nav><a href="/skills">Explorar skills</a><a href="#como-funciona">Como funciona</a><a href="#empresas">Para empresas</a></nav>
      <div className="nav-actions"><a className="btn btn-text" href="/login">Entrar</a><a className="btn btn-primary" href="/signup">Começar</a></div>
    </div></header>

    <main>
      <section className="hero"><div className="container hero-grid">
        <div><div className="eyebrow">FORMAÇÃO PROFISSIONAL · MOÇAMBIQUE</div>
          <h1>Aprenda competências que <em>fazem diferença</em> no trabalho.</h1>
          <p className="hero-lead">Formação prática, exercícios baseados em situações reais, orientação de mentores e certificação que comprova aquilo que sabe fazer.</p>
          <div className="hero-actions"><a className="btn btn-primary btn-large" href="/skills">Explorar competências →</a><a className="btn btn-light btn-large" href="#como-funciona">Como funciona</a></div>
          <div className="hero-proof"><span>✓ Exercícios práticos</span><span>✓ Feedback humano</span><span>✓ Certificação verificável</span></div>
        </div>
        <div className="hero-visual"><div className="dashboard-window">
          <div className="window-top"><i/><i/><i/><small>skillhub.alinvest</small></div>
          <div className="window-body"><aside><strong>Skill<span>Hub</span></strong><b>▦ &nbsp; O meu percurso</b><b>◇ &nbsp; Skills</b><b>□ &nbsp; Certificados</b></aside>
            <div className="mock-content"><div className="mock-top">O meu percurso <i>U</i></div><h3>Bom dia, Utilizador.</h3><small>Continue de onde parou.</small>
              <div className="mock-course"><span>EX</span><div><small>FINANÇAS · INTERMÉDIO</small><strong>Excel para Gestão Financeira</strong><div className="mock-progress"><i/></div><small>72% concluído · Próximo: Análise de desvios</small></div></div>
              <div className="mock-row"><div><small>SKILL SCORE</small><strong>78</strong></div><div><small>EXERCÍCIOS</small><strong>8/12</strong></div><div><small>CERTIFICADOS</small><strong>01</strong></div></div>
            </div>
          </div>
        </div><div className="floating-card feedback">✓ <span><b>Exercício avaliado</b><small>Feedback do mentor disponível</small></span></div><div className="floating-card cert">✦ <span><b>Certificado</b><small>Verificação pública</small></span></div></div>
      </div></section>

      <section className="trust-strip"><div className="container"><span>UMA NOVA FORMA DE DEMONSTRAR COMPETÊNCIA</span><div><b>Aprender</b> → <b>Praticar</b> → <b>Receber feedback</b> → <b>Demonstrar</b></div></div></section>

      <section className="section" id="como-funciona"><div className="container">
        <div className="intro-row"><div><div className="eyebrow">COMO FUNCIONA</div><h2>Mais do que assistir.<br/><em>Aprender fazendo.</em></h2></div><p>O SkillHub aproxima a formação da realidade profissional. Cada percurso combina conhecimento, prática e evidência de competência.</p></div>
        <div className="steps">{[['01','Escolha uma competência','Encontre uma skill alinhada ao seu trabalho, carreira ou próximo desafio.'],['02','Aprenda com orientação','Conteúdo estruturado e acompanhamento de profissionais.'],['03','Resolva casos práticos','Aplique o conhecimento em exercícios próximos da realidade.'],['04','Receba feedback e prove','Um mentor avalia o seu trabalho e ajuda a construir evidências.']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </div></section>

      <section className="section muted"><div className="container"><div className="section-head"><div><div className="eyebrow">EXPLORE O CATÁLOGO</div><h2>Competências para o mundo profissional.</h2></div><a href="/skills" className="text-link">Ver todas →</a></div>
        <div className="catalog">{skills.map(([slug,title,cat,level,duration,price],i)=><a className="skill-card" href={`/skills/${slug}`} key={slug}><div className="skill-cover"><strong>{['EX','RH','CT','BI'][i]}</strong><small>{cat}</small></div><div className="skill-body"><div className="meta">{level} · {duration}</div><h3>{title}</h3><p>Aprendizagem aplicada com exercícios e acompanhamento.</p><div className="card-foot"><b>{price}</b><span>Ver skill →</span></div></div></a>)}</div>
      </div></section>

      <section className="section"><div className="container"><div className="section-head"><div><div className="eyebrow">ÁREAS DE COMPETÊNCIA</div><h2>Encontre onde quer crescer.</h2></div></div><div className="categories">{categories.map(([name,desc],i)=><a href="/skills" key={name}><small>{String(i+1).padStart(2,'0')}</small><div><h3>{name}</h3><p>{desc}</p></div><b>→</b></a>)}</div></div></section>

      <section className="evidence"><div className="container evidence-grid"><div><div className="eyebrow">COMPETÊNCIA COM EVIDÊNCIA</div><h2>O que aprendeu importa.<br/><em>O que consegue fazer também.</em></h2><p>O SkillHub não termina quando acaba uma aula. O percurso termina quando existe evidência do que consegue aplicar.</p><a className="btn btn-primary" href="/skills">Começar a aprender</a></div><div className="evidence-list"><div><span>01</span><b>Exercícios reais</b><p>Trabalhos construídos para simular situações profissionais.</p></div><div><span>02</span><b>Feedback de mentor</b><p>Orientação humana sobre aquilo que produziu.</p></div><div><span>03</span><b>Certificação verificável</b><p>Um registo que pode ser consultado e validado online.</p></div></div></div></section>

      <section className="section" id="empresas"><div className="container business"><div><div className="eyebrow">PARA EMPRESAS</div><h2>Desenvolva pessoas.<br/><em>Descubra competências.</em></h2><p>Crie desafios práticos, acompanhe desenvolvimento e encontre evidências de competências relevantes para a sua organização.</p><a className="btn btn-dark" href="/empresa">Conhecer solução para empresas →</a></div><div className="business-stats"><div><small>DESAFIOS PRÁTICOS</small><strong>24</strong><span>competências avaliadas</span></div><div><small>TALENTO</small><strong>86</strong><span>perfis com evidências</span></div></div></div></section>

      <section className="final-cta"><div className="container"><div className="eyebrow">SKILLHUB BY ALINVEST</div><h2>Comece pela competência<br/>que quer desenvolver.</h2><p>Escolha uma skill, pratique e transforme aprendizagem em evidência profissional.</p><a className="btn btn-primary btn-large" href="/skills">Explorar skills →</a></div></section>
    </main>

    <footer><div className="container footer-grid"><div><a className="brand" href="/"><span className="brand-mark">S</span><span>Skill<span>Hub</span><small>by ALINVEST</small></span></a><p>Formação prática de competências profissionais em Moçambique.</p></div><div><b>Plataforma</b><a href="/skills">Skills</a><a href="#como-funciona">Como funciona</a><a href="/login">Entrar</a></div><div><b>Empresas</b><a href="/empresa">Solução para empresas</a><a href="/signup">Criar conta</a></div><div><b>ALINVEST</b><span>Moçambique</span><span>© 2026 ALINVEST</span></div></div></footer>
    </main>
}