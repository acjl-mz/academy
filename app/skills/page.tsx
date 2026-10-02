import Link from 'next/link';
import { categories, skills } from '@/lib/data';

export default function SkillsPage() {
  return (
    <main>
      <header className="site-header"><div className="container nav"><Link href="/" className="brand"><span className="brand-mark">S</span><span>SkillHub <small>by ALINVEST</small></span></Link><nav><Link href="/skills">Skills</Link><Link href="/#como-funciona">Como funciona</Link><Link href="/empresa">Para empresas</Link></nav><div className="nav-actions"><Link href="/login" className="btn btn-ghost">Entrar</Link><Link href="/signup" className="btn btn-primary">Começar</Link></div></div></header>
      <section className="page-hero"><div className="container"><span className="eyebrow">CATÁLOGO DE COMPETÊNCIAS</span><h1>Escolha uma competência.<br/><span>Pratique até dominar.</span></h1><p>Skills profissionais desenhadas para transformar aprendizagem em evidência de competência.</p></div></section>
      <section className="section"><div className="container"><div className="catalog-layout"><aside className="filter-panel"><div className="filter-title">Explorar</div><label className="search-box"><span>⌕</span><input placeholder="Pesquisar skills..." /></label><div className="filter-group"><strong>Áreas</strong>{categories.slice(0, 8).map((category) => <button key={category}>{category}</button>)}</div></aside><div className="catalog-main"><div className="catalog-head"><div><span className="eyebrow">SKILLS DISPONÍVEIS</span><h2>Aprendizagem orientada à prática</h2></div><span className="result-count">{skills.length} skills</span></div><div className="skill-grid">{skills.map((skill) => <article className="skill-card" key={skill.slug}><div className="skill-top"><span className="skill-tag">{skill.category}</span><span className="skill-level">{skill.level}</span></div><h3>{skill.title}</h3><p>{skill.description}</p><div className="skill-meta"><span>{skill.duration}</span><span>·</span><span>{skill.exercises} exercícios</span></div><div className="skill-bottom"><strong>{skill.price}</strong><Link href={`/skills/${skill.slug}`} className="text-link">Ver skill →</Link></div></article>)}</div></div></div></div></section>
      <footer className="footer"><div className="container footer-inner"><div><strong>SkillHub <small>by ALINVEST</small></strong><p>Competências que se provam na prática.</p></div><span>© 2026 ALINVEST</span></div></footer>
    </main>
  );
}
