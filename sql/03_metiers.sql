-- =====================================================================
-- TENVO — Métiers v0.3 (Planning & Facturation)
-- À exécuter APRÈS 01_fondations.sql et 02_compte.sql.
-- =====================================================================

create table if not exists public.sessions (
  id           uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  client_id    uuid references public.clients(id) on delete set null,
  title        text not null check (char_length(title) <= 120),
  start_time   timestamptz not null,
  end_time     timestamptz not null,
  status       text not null default 'scheduled' check (status in ('scheduled', 'completed', 'cancelled')),
  created_at   timestamptz not null default now()
);

create table if not exists public.invoices (
  id           uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  client_id    uuid not null references public.clients(id) on delete cascade,
  amount       numeric(10,2) not null check (amount >= 0),
  status       text not null default 'pending' check (status in ('paid', 'pending', 'overdue')),
  due_date     date not null,
  created_at   timestamptz not null default now()
);

alter table public.sessions enable row level security;
alter table public.invoices enable row level security;

drop policy if exists sessions_all on public.sessions;
create policy sessions_all on public.sessions for all to authenticated using (public.is_member(workspace_id));

drop policy if exists invoices_all on public.invoices;
create policy invoices_all on public.invoices for all to authenticated using (public.is_member(workspace_id));

grant select, insert, update, delete on public.sessions to authenticated;
grant select, insert, update, delete on public.invoices to authenticated;