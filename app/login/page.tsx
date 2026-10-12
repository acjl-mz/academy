import Link from "next/link";
import AuthForm from "@/components/auth-form";
export default function LoginPage(){return <main className="auth-page"><div className="auth-card"><Link href="/" className="brand auth-brand"><span className="brand-mark">S</span><span>SkillHub <small>by ALINVEST</small></span></Link><span className="eyebrow">ÁREA DE PARTICIPANTE</span><h1>Bem-vindo de volta.</h1><p>Entre para continuar o seu percurso de aprendizagem.</p><AuthForm mode="login"/></div></main>}
