import {NextResponse} from "next/server";
import {createClient} from "@/lib/supabase/server";
export async function POST(request:Request){
 const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();if(!user)return NextResponse.json({error:"Entre na sua conta para se inscrever."},{status:401});
 let body:unknown;try{body=await request.json()}catch{return NextResponse.json({error:"Pedido inválido."},{status:400})}
 const slug=body&&typeof body==="object"&&"slug" in body&&typeof body.slug==="string"?body.slug:"";if(!slug)return NextResponse.json({error:"Competência inválida."},{status:400});
 const db=supabase as any;const {data:skill,error:skillError}=await db.from("skills").select("id,status").eq("slug",slug).maybeSingle();if(skillError||!skill||["draft","archived","unpublished"].includes(skill.status))return NextResponse.json({error:"Esta competência não está disponível para inscrição."},{status:404});
 const {data:existing}=await db.from("enrollments").select("id").eq("user_id",user.id).eq("skill_id",skill.id).maybeSingle();if(existing)return NextResponse.json({ok:true,existing:true});
 const {error}=await db.from("enrollments").insert({user_id:user.id,skill_id:skill.id,status:"active",progress:0});if(error)return NextResponse.json({error:"Não foi possível concluir a inscrição. Confirme a configuração da plataforma e tente novamente."},{status:500});
 return NextResponse.json({ok:true});
}
