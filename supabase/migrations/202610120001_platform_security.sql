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
create policy "Authenticated users can read exercises" on public.exercises for select to authenticated using (true);

drop policy if exists "Participants read own profile" on public.profiles;
create policy "Participants read own profile" on public.profiles for select to authenticated using (id = (select auth.uid()));
drop policy if exists "Participants update own profile" on public.profiles;
create policy "Participants update own profile" on public.profiles for update to authenticated using (id = (select auth.uid())) with check (id = (select auth.uid()));

drop policy if exists "Participants read own enrollments" on public.enrollments;
create policy "Participants read own enrollments" on public.enrollments for select to authenticated using (user_id = (select auth.uid()));
drop policy if exists "Participants create own enrollments" on public.enrollments;
create policy "Participants create own enrollments" on public.enrollments for insert to authenticated with check (user_id = (select auth.uid()));
drop policy if exists "Participants update own enrollments" on public.enrollments;
create policy "Participants update own enrollments" on public.enrollments for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

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
as $
  select c.verification_code, c.status, c.issued_at, s.title,
    (lower(c.status) in ('issued','valid','active','concluido','concluído')) as is_valid
  from public.certificates c
  left join public.skills s on s.id = c.skill_id
  where upper(c.verification_code) = upper(trim(p_code))
  limit 1;
$;
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
