import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
type EnrollmentRow={id:string;status:string;progress:number|null;skills:{title:string;slug:string;level:string}|{title:string;slug:string;level:string}[]|null};
function statusLabel(status:string){const labels:Record<string,string>={in_progress:"Em progresso",active:"Activo",completed:"Concluído",pending:"Pendente",submitted:"Submetido",reviewed:"Avaliado"};return labels[status]||status}
export default async function DashboardPage(){
 const supabase=await createClient();
 const {data:{user}}=await supabase.auth.getUser();
 if(!user) redirect("/login?next=%2Fdashboard");
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const db=supabase as any;
 const {data:profile}=await db.from("profiles").select("full_name,skill_score").eq("id",user.id).maybeSingle();
 const {data:enrollments}=await db.from("enrollments").select("id,status,progress,skills(title,slug,level,categories(name))").eq("user_id",user.id).order("enrolled_at",{ascending:false});
 const {count:certificateCount}=await db.from("certificates").select("id",{count:"exact",head:true}).eq("user_id",user.id);
 const items:EnrollmentRow[]=(enrollments||[]) as EnrollmentRow[];
 const firstName=(profile?.full_name||user.user_metadata?.full_name||user.email||"Participante").split(" ")[0];
 const inProgress=items.filter(item=>item.status!=="completed"&&(item.progress||0)<100);
 const completed=items.filter(item=>item.status==="completed"||(item.progress||0)>=100);
 return <main><header className="app-header"><div className="container app-nav"><Link href="/" className="brand"><span className="brand-mark">S</span><span>SkillHub <small>by ALINVEST</small></span></Link><nav><Link className="active" href="/dashboard">Meu percurso</Link><Link href="/skills">Explorar Skills</Link><Link href="/certificados">Certificados</Link><Link href="/portfolio">Portfólio</Link></nav><form action="/auth/signout" method="post"><button className="btn btn-ghost" type="submit">Sair</button></form></div></header><section className="dashboard"><div className="container"><div className="welcome"><div><span className="eyebrow">ÁREA DO PARTICIPANTE</span><h1>Olá, {firstName}.</h1><p>Continue a construir competências que pode demonstrar.</p></div><Link href="/skills" className="btn btn-primary">Explorar novas Skills</Link></div><div className="stats"><div><span>Skill Score</span><strong>{profile?.skill_score??0}</strong><small>/ 100</small></div><div><span>Em progresso</span><strong>{inProgress.length}</strong><small>skills</small></div><div><span>Concluídas</span><strong>{completed.length}</strong><small>skills</small></div><div><span>Certificados</span><strong>{certificateCount??0}</strong><small>emitidos</small></div></div><div className="dashboard-heading"><h2>O seu percurso</h2><Link href="/skills">Ver catálogo →</Link></div>{!items.length?<div className="empty-state"><strong>O seu percurso começa aqui</strong><p>Ainda não tem competências associadas à sua conta.</p><Link href="/skills" className="text-link">Explorar o catálogo →</Link></div>:<div className="learning-list">{items.map(item=>{const skill=Array.isArray(item.skills)?item.skills[0]:item.skills;const progress=Math.min(100,Math.max(0,item.progress||0));return <article className="learning-card" key={item.id}><div className="learning-icon">{skill?.title?.slice(0,1)||"S"}</div><div className="learning-info"><span>{skill?.level||"Competência"} · {statusLabel(item.status)}</span><h3>{skill?.title||"Competência SkillHub"}</h3><div className="progress-track"><i style={{width:progress+"%"}}/></div><div className="progress-line"><small>{progress}% concluído</small><small>{progress>=100?"A aguardar validação":"Continue a praticar"}</small></div></div>{skill?.slug&&<Link href={"/skills/"+skill.slug} className="btn btn-ghost">Ver competência</Link>}</article>})}</div>}</div></section></main>
}
