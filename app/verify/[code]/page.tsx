import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
type VerificationRow={verification_code:string;status:string;issued_at:string|null;skill_title:string|null;is_valid:boolean};
function certificateStatus(status:string){const labels:Record<string,string>={issued:"Emitido",valid:"Válido",active:"Activo",revoked:"Revogado",pending:"Pendente",concluido:"Concluído","concluído":"Concluído"};return labels[status.toLowerCase()]||status}
export default async function VerifyPage({params}:{params:Promise<{code:string}>}) {
 const {code}=await params;
 let data:VerificationRow|null=null; let verificationError:unknown=null;
 if(process.env.NEXT_PUBLIC_SUPABASE_URL&&process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY){
  const supabase=await createClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db=supabase as any;
  const {data:result,error}=await db.rpc("verify_certificate",{p_code:code});
  data=(Array.isArray(result)?result[0]:result) as VerificationRow|null;verificationError=error;
 }
 const valid=!!data && !verificationError && data.is_valid===true;
 return <main className="verify-page"><div className="verify-card"><div className={valid?"verify-badge":"verify-badge verify-badge-invalid"}>{valid?"✓":"!"}</div><span className="eyebrow">SKILLHUB · CERTIFICAÇÃO VERIFICÁVEL</span><h1>{valid?"Certificado encontrado":"Certificado não verificado"}</h1><p>{valid?"O código corresponde a um registo de certificado na plataforma.":"Não foi possível confirmar um certificado válido com este código. Verifique o código ou contacte a equipa SkillHub."}</p><div className="verify-code"><span>CÓDIGO DE VERIFICAÇÃO</span><strong>{code}</strong></div>{valid&&data&&<div className="verify-person"><span>Competência</span><strong>{data.skill_title||"Competência SkillHub"}</strong><span>Estado registado</span><strong className="valid">{certificateStatus(data.status)}</strong>{data.issued_at&&<><span>Data de emissão</span><strong>{new Date(data.issued_at).toLocaleDateString("pt-MZ")}</strong></>}</div>}<Link href="/" className="btn btn-primary">Conhecer o SkillHub</Link></div></main>;
}
