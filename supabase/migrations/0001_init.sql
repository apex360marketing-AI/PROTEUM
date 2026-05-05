-- PROTEUM Phase A — initial schema
-- Anonymous quiz sessions and per-step answers.

create extension if not exists "pgcrypto";

create table if not exists public.quiz_sessions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  completed_at timestamptz,
  user_agent text,
  referrer text
);

create table if not exists public.quiz_answers (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.quiz_sessions(id) on delete cascade,
  question_key text not null,
  answer_value jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists quiz_answers_session_idx on public.quiz_answers(session_id);
create index if not exists quiz_sessions_created_idx on public.quiz_sessions(created_at desc);

-- Row Level Security: anonymous clients are allowed to insert their own
-- session and answers, but cannot read back data. Reads are service-role only.
alter table public.quiz_sessions enable row level security;
alter table public.quiz_answers enable row level security;

drop policy if exists "anon insert quiz_sessions" on public.quiz_sessions;
create policy "anon insert quiz_sessions"
  on public.quiz_sessions
  for insert
  to anon
  with check (true);

drop policy if exists "anon update quiz_sessions completed_at" on public.quiz_sessions;
create policy "anon update quiz_sessions completed_at"
  on public.quiz_sessions
  for update
  to anon
  using (true)
  with check (true);

drop policy if exists "anon insert quiz_answers" on public.quiz_answers;
create policy "anon insert quiz_answers"
  on public.quiz_answers
  for insert
  to anon
  with check (true);
