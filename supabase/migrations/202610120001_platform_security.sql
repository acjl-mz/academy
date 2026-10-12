-- SkillHub baseline security. Confirm table status values against the live project before applying.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role, skill_score, created_at, updated_at)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', ''), 'participant', 0, now(), now())
  on conflict (id) do update set full_name = coalesce(excluded.full_name, public.profiles.full_name), updated_at = now();
  return new;
end;
$$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

create or replace function public.protect_profile_privileges()
returns trigger language plpgsql set search_path = public
as $function$
begin
  if coalesce(auth.role(), '') <> 'service_role' then
    new.role := old.role;
    new.skill_score := old.skill_score;
  end if;
  return new;
end;
$function$;
drop trigger if exists protect_profile_privileges_before_update on public.profiles;
create trigger protect_profile_privileges_before_update before update on public.profiles
for each row execute procedure public.protect_profile_privileges();

alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.skills enable row level security;
alter table public.exercises enable row level security;
alter table public.enrollments enable row level security;
alter table public.submissions enable row level security;
alter table public.reviews enable row level security;
alter table public.certificates enable row level security;
alter table public.companies enable row level security;
alter table public.challenges enable row level security;
alter table public.notifications enable row level security;

drop policy if exists "Public can read categories" on public.categories;
create policy "Public can read categories" on public.categories for select using (true);
drop policy if exists "Public can read published skills" on public.skills;
create policy "Public can read published skills" on public.skills for select using (status = 'published');
drop policy if exists "Authenticated users can read exercises" on public.exercises;
create policy "Enrolled participants can read exercises" on public.exercises for select to authenticated using (exists (select 1 from public.skills sk join public.enrollments e on e.skill_id = sk.id where sk.id = exercises.skill_id and sk.status = 'published' and e.user_id = (select auth.uid())));

drop policy if exists "Participants read own profile" on public.profiles;
create policy "Participants read own profile" on public.profiles for select to authenticated using (id = (select auth.uid()));
drop policy if exists "Participants update own profile" on public.profiles;
create policy "Participants update own profile" on public.profiles for update to authenticated using (id = (select auth.uid())) with check (id = (select auth.uid()));

drop policy if exists "Participants read own enrollments" on public.enrollments;
create policy "Participants read own enrollments" on public.enrollments for select to authenticated using (user_id = (select auth.uid()));
drop policy if exists "Participants create own enrollments" on public.enrollments;
create policy "Participants create own enrollments" on public.enrollments for insert to authenticated with check (user_id = (select auth.uid()));
drop policy if exists "Participants update own enrollments" on public.enrollments;

drop policy if exists "Participants read own submissions" on public.submissions;
create policy "Participants read own submissions" on public.submissions for select to authenticated using (user_id = (select auth.uid()));
drop policy if exists "Participants create own submissions" on public.submissions;
create policy "Participants create own submissions" on public.submissions for insert to authenticated with check (user_id = (select auth.uid()));
drop policy if exists "Participants update own submissions" on public.submissions;
create policy "Participants update own submissions" on public.submissions for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

drop policy if exists "Participants read own certificates" on public.certificates;
create policy "Participants read own certificates" on public.certificates for select to authenticated using (user_id = (select auth.uid()));
drop policy if exists "Public verify issued certificates" on public.certificates;
create or replace function public.verify_certificate(p_code text)
returns table (verification_code text, status text, issued_at timestamptz, skill_title text, is_valid boolean)
language sql stable security definer set search_path = public
as $function$
  select c.verification_code, c.status, c.issued_at, s.title,
    (lower(c.status) in ('issued','valid','active','concluido','concluído')) as is_valid
  from public.certificates c
  left join public.skills s on s.id = c.skill_id
  where upper(c.verification_code) = upper(trim(p_code))
  limit 1;
$function$;
revoke all on function public.verify_certificate(text) from public;
grant execute on function public.verify_certificate(text) to anon, authenticated;

drop policy if exists "Participants read own notifications" on public.notifications;
create policy "Participants read own notifications" on public.notifications for select to authenticated using (user_id = (select auth.uid()));
drop policy if exists "Participants update own notifications" on public.notifications;
create policy "Participants update own notifications" on public.notifications for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

drop policy if exists "Companies read own company records" on public.companies;
create policy "Companies read own company records" on public.companies for select to authenticated using (profile_id = (select auth.uid()));
drop policy if exists "Companies manage own challenges" on public.challenges;
create policy "Companies manage own challenges" on public.challenges for all to authenticated using (exists (select 1 from public.companies c where c.id = company_id and c.profile_id = (select auth.uid()))) with check (exists (select 1 from public.companies c where c.id = company_id and c.profile_id = (select auth.uid())));

drop policy if exists "Participants read reviews of own submissions" on public.reviews;
create policy "Participants read reviews of own submissions" on public.reviews for select to authenticated using (exists (select 1 from public.submissions s where s.id = submission_id and s.user_id = (select auth.uid())));


-- Seed the initial catalogue so enrolment references real database records.
insert into public.categories (name, slug) values
  ('Finanças', 'financas'),
  ('Recursos Humanos', 'recursos-humanos'),
  ('Contabilidade', 'contabilidade'),
  ('Excel & Dados', 'excel-dados'),
  ('Fiscalidade', 'fiscalidade'),
  ('Marketing', 'marketing')
on conflict (slug) do update set name = excluded.name;

insert into public.skills (slug, title, category_id, level, duration_weeks, price_mzn, mentor_id, description, outcomes, status)
select v.slug, v.title, c.id, v.level, v.duration_weeks, v.price_mzn, null, v.description, v.outcomes::jsonb, 'published'
from (values
  ('excel-gestao-financeira','Excel para Gestão Financeira','Finanças', 'Intermédio',6,1500,'Aprenda a transformar dados financeiros em informação útil para acompanhar resultados, custos e decisões.','["Modelar mapas financeiros","Criar indicadores de gestão","Construir análises e dashboards"]'),
  ('processamento-salarios','Processamento de Salários','Recursos Humanos','Prático',4,1200,'Domine um processo completo de payroll através de exercícios baseados em situações empresariais reais.','["Organizar dados de colaboradores","Processar remunerações","Preparar mapas e conferências"]'),
  ('contabilidade-pequenas-empresas','Contabilidade para Pequenas Empresas','Contabilidade','Fundamentos',5,1300,'Construa uma visão prática da contabilidade e use a informação financeira para apoiar o negócio.','["Registar operações","Reconhecer documentos","Interpretar resultados"]'),
  ('power-bi-decisao','Power BI para Decisão','Excel & Dados','Intermédio',6,1800,'Passe de tabelas dispersas para indicadores claros e painéis que apoiam decisões.','["Preparar dados","Criar métricas","Construir dashboards"]'),
  ('gestao-fiscal-pratica','Gestão Fiscal na Prática','Fiscalidade','Prático',4,1500,'Trabalhe situações fiscais através de casos e exercícios que aproximam a aprendizagem da rotina profissional.','["Organizar obrigações","Analisar situações fiscais","Documentar procedimentos"]'),
  ('marketing-digital-negocios','Marketing Digital para Negócios','Marketing','Intermédio',5,1400,'Planeie e execute ações digitais com foco em objetivos comerciais e medição de resultados.','["Definir públicos","Criar campanhas","Medir resultados"]')
) as v(slug,title,category,level,duration_weeks,price_mzn,description,outcomes)
join public.categories c on c.name = v.category
on conflict (slug) do update set
  title = excluded.title, category_id = excluded.category_id, level = excluded.level,
  duration_weeks = excluded.duration_weeks, price_mzn = excluded.price_mzn,
  description = excluded.description, outcomes = excluded.outcomes, status = 'published';
