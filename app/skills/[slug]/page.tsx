import Link from 'next/link';
import { notFound } from 'next/navigation';
import { skills } from '@/lib/data';

export function generateStaticParams() { return skills.map((skill) => ({ slug: skill.slug })); }

export default async function SkillDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = skills.find((item) => item.slug === slug);
  if (!skill) notFound();
  return <main><header className="site-header"><div className="container nav"><Link href="/" className="brand"><span className="brand-mark">S</span><span>SkillHub <small>by ALINVEST</small></span></Link><div className="nav-actions"><Link href="/skills" className="btn btn-ghost">← Catálogo</Link><Link href="/login" className="btn btn-primary">Entrar</Link></div></div></header><section className="detail-hero"><div className="container detail-grid"><div><span className="skill-tag">{skill.category}</span><span className="skill-level detail-level">{skill.level}</span><h1>{skill.title}</h1><p>{skill.description}</p><div className="detail-meta"><span>◷ {skill.duration}</span><span>▣ {skill.exercises} exercícios práticos</span><span>◉ Mentoria</span></div><Link href="/signup" className="btn btn-primary btn-large">Começar esta Skill</Link></div><aside className="enroll-card"><span className="eyebrow">INVESTIMENTO</span><strong>{skill.price}</strong><p>Acesso à aprendizagem, exercícios e avaliação.</p><hr/><span>Mentor</span><b>{skill.mentor}</b><span>Turma</span><b>Aprendizagem individual</b></aside></div></section><section className="section"><div className="container two-column"><div><span className="eyebrow">O QUE VAI PRATICAR</span><h2>Aprender fazendo</h2><div className="outcomes">{skill.outcomes.map((outcome, index) => <div className="outcome" key={outcome}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{outcome}</strong><p>Aplicação em um exercício baseado em uma situação profissional.</p></div></div>)}</div></div><aside className="process-card"><strong>Como funciona</strong><div><b>01</b><span>Estude o conteúdo essencial</span></div><div><b>02</b><span>Resolva exercícios reais</span></div><div><b>03</b><span>Receba feedback do mentor</span></div><div><b>04</b><span>Conclua e obtenha certificado</span></div></aside></div></section></main>;
}
