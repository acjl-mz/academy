"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Props = { mode: "login" | "signup" };

export default function AuthForm({ mode }: Props) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const isSignup = mode === "signup";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
      if (!url || !key) {
        setMessage("A autenticação ainda não está configurada. Contacte a equipa SkillHub.");
        return;
      }
      const supabase = createClient();
      if (isSignup) {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: { data: { full_name: name.trim() }, emailRedirectTo: `${window.location.origin}/login` },
        });
        if (error) throw error;
        if (data.session) {
          router.replace("/dashboard");
          router.refresh();
        } else {
          setMessage("Conta criada. Verifique o seu email para confirmar o registo antes de entrar.");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        if (error) throw error;
        const requested = new URLSearchParams(window.location.search).get("next");
        router.replace(requested?.startsWith("/") && !requested.startsWith("//") ? requested : "/dashboard");
        router.refresh();
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Não foi possível concluir a operação. Tente novamente.");
    } finally {
      setBusy(false);
    }
  }

  return <form className="auth-form" onSubmit={submit}>
    {isSignup && <label>Nome completo<input autoComplete="name" value={name} onChange={e => setName(e.target.value)} required minLength={2} placeholder="O seu nome" /></label>}
    <label>Email<input autoComplete="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="nome@empresa.co.mz" /></label>
    <label>Palavra-passe<input autoComplete={isSignup ? "new-password" : "current-password"} type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={8} placeholder={isSignup ? "Mínimo de 8 caracteres" : "A sua palavra-passe"} /></label>
    {message && <p className="form-message" role="status">{message}</p>}
    <button className="btn btn-primary btn-large auth-submit" type="submit" disabled={busy}>{busy ? "A processar..." : isSignup ? "Criar conta" : "Entrar"}</button>
    <small>{isSignup ? "Já tem uma conta? " : "Ainda não tem conta? "}<Link href={isSignup ? "/login" : "/signup"}>{isSignup ? "Entrar" : "Criar conta"}</Link></small>
  </form>;
}
