-- =====================================================================
-- TENVO — Espace compte v0.2 (Corrigé)
-- À exécuter APRÈS 01_fondations.sql, une seule fois.
-- =====================================================================

alter table public.profiles
  add column phone      text,
  add column timezone   text not null default 'Europe/Paris',
  add column updated_at timestamptz not null default now();

alter table public.profiles
  add constraint profiles_full_name_len check (full_name is null or char_length(full_name) <= 120),
  add constraint profiles_phone_len     check (phone is null or phone = '' or char_length(phone) between 6 and 20),
  add constraint profiles_timezone_len  check (char_length(timezone) between 1 and 64);

create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

grant update (full_name, phone, timezone) on public.profiles to authenticated;

create or replace function public.delete_my_account()
returns void
language plpgsql security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  ws  record;
begin
  if uid is null then
    raise exception 'not authenticated';
  end if;

  for ws in
    select workspace_id, role from public.memberships where user_id = uid
  loop
    if not exists (
      select 1 from public.memberships m
      where m.workspace_id = ws.workspace_id and m.user_id <> uid
    ) then
      delete from public.workspaces where id = ws.workspace_id;
    elsif ws.role = 'owner' and not exists (
      select 1 from public.memberships m
      where m.workspace_id = ws.workspace_id
        and m.user_id <> uid
        and m.role = 'owner'
    ) then
      raise exception 'sole_owner_of_shared_workspace';
    end if;
  end loop;

  delete from auth.users where id = uid;
end;
$$;

revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;