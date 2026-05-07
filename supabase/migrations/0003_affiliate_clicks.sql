-- PROTEUM Phase B — affiliate click tracking
-- Logs every click on a vendor product link via the /go redirect handler.
-- Anonymous inserts only; reads are service-role only (never from the client).

create table if not exists public.affiliate_clicks (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references public.quiz_sessions(id) on delete set null,
  vendor_id text not null,
  compound_id text not null,
  product_url text not null,
  referrer text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists affiliate_clicks_vendor_idx
  on public.affiliate_clicks(vendor_id, created_at desc);
create index if not exists affiliate_clicks_compound_idx
  on public.affiliate_clicks(compound_id, created_at desc);
create index if not exists affiliate_clicks_session_idx
  on public.affiliate_clicks(session_id);

alter table public.affiliate_clicks enable row level security;

drop policy if exists "anon insert clicks" on public.affiliate_clicks;
create policy "anon insert clicks"
  on public.affiliate_clicks
  for insert
  to anon
  with check (true);
