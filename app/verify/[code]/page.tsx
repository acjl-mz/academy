import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
export default async function VerifyPage({params}:{params:Promise<{code:string}>}) {
 const {code}=await params;
 const supabase=await createClient();
 const {data,error}=await supabase.from("certificates").select("verification_code,status,issued_at,skills(title)").eq("verification_code",code).maybeSingle();
 const skill=data?.skills as unknown as {title:string}|null;
 const valid=!!data && !error && ["issued","valid","active","concluido","concluído"].includes((data.status||"").toLowerCase());
 return <main className="verify-page"><div className="verify-card"><div className={valid?"verify-badge":"verify-badge verify-badge-invalid"}>{valid?"✓":"!"}</div><span className="eyebrow">SKILLHUB · CERTIFICAÇÃO VERIFICÁVEL</span><h1>{valid?"Certificado encontrado":"Certificado não verificado"}</h1><p>{valid?"O código corresponde a um registo de certificado na plataforma.":"Não foi possível confirmar um certificado válido com este código. Verifique o código ou contacte a equipa SkillHub."}</p><div className="verify-code"><span>CÓDIGO DE VERIFICAÇÃO</span><strong>{code}</strong></div>{valid&&<div className="verify-person"><span>Competência</span><strong>{skill?.title||"Competência SkillHub"}</strong><span>Estado registado</span><strong className="valid">{data.status}</strong>{data.issued_at&&<><span>Data de emissão</span><strong>{new Date(data.issued_at).toLocaleDateString("pt-MZ")}</strong></>}</div>}<Link href="/" className="btn btn-primary">Conhecer o SkillHub</Link></div></main>;
}
