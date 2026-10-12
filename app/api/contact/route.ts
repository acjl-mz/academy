import { NextResponse } from "next/server";
const allowedSubjects=new Set(["Quero saber mais sobre uma Skill","Quero falar sobre formação empresarial","Tenho uma dúvida","Outro assunto"]);
export async function POST(request:Request){
 let input:Record<string,unknown>;try{input=await request.json()}catch{return NextResponse.json({error:"Pedido inválido."},{status:400})}
 const name=typeof input.name==="string"?input.name.trim():"",email=typeof input.email==="string"?input.email.trim():"",subject=typeof input.subject==="string"?input.subject:"",message=typeof input.message==="string"?input.message.trim():"";
 if(name.length<2||name.length>120||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.length>254||!allowedSubjects.has(subject)||message.length<10||message.length>5000)return NextResponse.json({error:"Verifique os campos. A mensagem deve ter entre 10 e 5.000 caracteres."},{status:400});
 const webhook=process.env.CONTACT_WEBHOOK_URL;if(!webhook)return NextResponse.json({error:"O canal de receção de mensagens ainda não está configurado. Contacte info@skillhub.co.mz."},{status:503});
 try{const result=await fetch(webhook,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,email,subject,message,source:"SkillHub contact form",submittedAt:new Date().toISOString()}),signal:AbortSignal.timeout(8000)});if(!result.ok)throw new Error("Webhook failed");return NextResponse.json({ok:true})}catch{return NextResponse.json({error:"Não foi possível enviar a mensagem neste momento. Tente novamente mais tarde."},{status:502})}
}
