import Link from "next/link";
import AuthForm from "@/components/auth-form";
export default function SignupPage(){return <main className="auth-page"><div className="auth-card"><Link href="/" className="brand auth-brand"><span className="brand-mark">S</span><span>SkillHub <small>by ALINVEST</small></span></Link><span className="eyebrow">COMEÇAR NO SKILLHUB</span><h1>Construa competências reais.</h1><p>Crie a sua conta e comece a aprender através de prática, feedback e evidência.</p><AuthForm mode="signup"/></div></main>}
