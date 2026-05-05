export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type QuizSession = {
  id: string;
  created_at: string;
  completed_at: string | null;
  user_agent: string | null;
  referrer: string | null;
};

export type QuizAnswer = {
  id: string;
  session_id: string;
  question_key: string;
  answer_value: Json;
  created_at: string;
};

export type Database = {
  public: {
    Tables: {
      quiz_sessions: {
        Row: QuizSession;
        Insert: Partial<QuizSession> & { id?: string };
        Update: Partial<QuizSession>;
      };
      quiz_answers: {
        Row: QuizAnswer;
        Insert: Omit<QuizAnswer, "id" | "created_at"> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<QuizAnswer>;
      };
    };
  };
};
