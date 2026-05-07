-- PROTEUM Phase B — quiz session metadata
-- Adds denormalized analytics columns to quiz_sessions so common slices
-- (primary goal, age band, symptom count, time-to-complete) don't require
-- parsing JSONB across answers.

alter table public.quiz_sessions add column if not exists primary_goal text;
alter table public.quiz_sessions add column if not exists age_range text;
alter table public.quiz_sessions add column if not exists symptoms_count int;
alter table public.quiz_sessions add column if not exists completion_seconds int;

-- Indexes for analytics
create index if not exists quiz_sessions_primary_goal_idx
  on public.quiz_sessions(primary_goal);
create index if not exists quiz_sessions_age_range_idx
  on public.quiz_sessions(age_range);

-- Allow anon clients to update these metadata fields when marking a session
-- complete. The existing "anon update quiz_sessions completed_at" policy
-- already covers UPDATE for anon, so no new policy is required.
