-- =====================================================================
-- TENVO — Fondations v0.1 (Version complète et réexécutable)
-- Cible : projet Supabase (Postgres). À exécuter dans l'éditeur SQL.
-- =====================================================================

drop table if exists public.clients cascade;
drop table if exists public.memberships cascade;
drop table if exists public.workspaces cascade;
drop table if exists public.profiles cascade;

drop type if exists public.member_role cascade;
drop type if exists public.workspace_type cascade;

drop function if exists public.is_member(uuid, public.member_role[]) cascade;
drop function if exists public.create_workspace(text, public.workspace_type) cascade;
drop function if exists public.handle_new_user() cascade;
drop function if exists public.set_updated_at() cascade;

create type public.workspace_type as enum ('solo', 'structure');
create type public.member_role    as enum ('owner', 'admin', 'coach');

create table public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  full_name   text,
  created_at  timestamptz not null default now()
);

create table public.workspaces (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(name) between 1 and 120),
  type        public.workspace_type not null default 'solo',
  discipline  text not null default 'sport',
  created_at  timestamptz not null default now()
);

create table public.memberships (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id      uuid not null references auth.users(id) on delete cascade,
  role         public.member_role not null,
  created_at   timestamptz not null default now(),
  primary key (workspace_id, user_id)
);
create index memberships_user_idx on public.memberships (user_id);

create table public.clients (
  id           uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id      uuid references auth.users(id) on delete set null,
  first_name   text not null check (char_length(first_name) between 1 and 120),
  last_name    text,
  email        text,
  phone        text,
  status       text not null default 'active' check (status in ('active', 'inactive')),
  goals        text,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);
create index clients_workspace_idx on public.clients (workspace_id);
create unique index clients_workspace_user_uniq
  on public.clients (workspace_id, user_id) where user_id is not null;

create or replace function public.is_member(ws uuid, roles public.member_role[] default null)
returns boolean
language sql stable security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.memberships m
    where m.workspace_id = ws
      and m.user_id = auth.uid()
      and (roles is null or m.role = any (roles))
  );
$$;

create or replace function public.create_workspace(
  p_name text,
  p_type public.workspace_type default 'solo'
)
returns uuid
language plpgsql security definer
set search_path = public
as $$
declare
  ws uuid;
begin
  if auth.uid() is null then
    raise exception 'not authenticated';
  end if;

  insert into public.workspaces (name, type)
  values (p_name, p_type)
  returning id into ws;

  insert into public.memberships (workspace_id, user_id, role)
  values (ws, auth.uid(), 'owner');

  return ws;
end;
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, left(new.raw_user_meta_data ->> 'full_name', 120));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger clients_set_updated_at
  before update on public.clients
  for each row execute function public.set_updated_at();

revoke all on function public.is_member(uuid, public.member_role[])            from public, anon;
revoke all on function public.create_workspace(text, public.workspace_type)    from public, anon;
grant execute on function public.is_member(uuid, public.member_role[])         to authenticated;
grant execute on function public.create_workspace(text, public.workspace_type) to authenticated;

revoke all on public.profiles, public.workspaces, public.memberships, public.clients from anon, authenticated;

grant select on public.profiles to authenticated;
grant update (full_name) on public.profiles to authenticated;

grant select, delete on public.workspaces to authenticated;
grant update (name, discipline) on public.workspaces to authenticated;

grant select, delete on public.memberships to authenticated;
grant update (role) on public.memberships to authenticated;

grant select, delete on public.clients to authenticated;
grant insert (workspace_id, first_name, last_name, email, phone, status, goals)
  on public.clients to authenticated;
grant update (first_name, last_name, email, phone, status, goals)
  on public.clients to authenticated;

alter table public.profiles    enable row level security;
alter table public.workspaces  enable row level security;
alter table public.memberships enable row level security;
alter table public.clients     enable row level security;

create policy profiles_select_own on public.profiles
  for select to authenticated
  using (id = (select auth.uid()));

create policy profiles_update_own on public.profiles
  for update to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));

create policy workspaces_select on public.workspaces
  for select to authenticated
  using (public.is_member(id));

create policy workspaces_update on public.workspaces
  for update to authenticated
  using (public.is_member(id, array['owner','admin']::public.member_role[]))
  with check (public.is_member(id, array['owner','admin']::public.member_role[]));

create policy workspaces_delete on public.workspaces
  for delete to authenticated
  using (public.is_member(id, array['owner']::public.member_role[]));

create policy memberships_select on public.memberships
  for select to authenticated
  using (public.is_member(workspace_id));

create policy memberships_update on public.memberships
  for update to authenticated
  using (public.is_member(workspace_id, array['owner']::public.member_role[]))
  with check (public.is_member(workspace_id, array['owner']::public.member_role[]));

create policy memberships_delete on public.memberships
  for delete to authenticated
  using (public.is_member(workspace_id, array['owner']::public.member_role[]));

create policy clients_select on public.clients
  for select to authenticated
  using (public.is_member(workspace_id) or user_id = (select auth.uid()));

create policy clients_insert on public.clients
  for insert to authenticated
  with check (public.is_member(workspace_id));

create policy clients_update on public.clients
  for update to authenticated
  using (public.is_member(workspace_id))
  with check (public.is_member(workspace_id));

create policy clients_delete on public.clients
  for delete to authenticated
  using (public.is_member(workspace_id, array['owner','admin']::public.member_role[]));