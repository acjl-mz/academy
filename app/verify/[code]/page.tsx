import Link from 'next/link';

export default async function VerifyPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  return <main className="verify-page"><div className="verify-card"><div className="verify-badge">✓</div><span className="eyebrow">SKILLHUB · CERTIFICAÇÃO VERIFICÁVEL</span><h1>Certificado válido</h1><p>Este código corresponde a um certificado emitido pela plataforma SkillHub by ALINVEST.</p><div className="verify-code"><span>CÓDIGO DE VERIFICAÇÃO</span><strong>{code.toUpperCase()}</strong></div><div className="verify-person"><span>Participante</span><strong>Utilizador SkillHub</strong><span>Competência</span><strong>Gestão Fiscal na Prática</strong><span>Estado</span><strong className="valid">Concluído e aprovado</strong></div><Link href="/" className="btn btn-primary">Conhecer o SkillHub</Link></div></main>;
}
