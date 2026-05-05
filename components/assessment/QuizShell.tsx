import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function QuizShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-30%] -z-10 mx-auto h-[60vh] w-[80vw] max-w-3xl rounded-full bg-radial-purple blur-3xl"
      />
      <header className="border-b border-white/[0.06]">
        <Container size="wide" className="flex h-16 items-center justify-between md:h-20">
          <Logo />
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-proteum-mist hover:text-proteum-bone"
          >
            ← Exit
          </Link>
        </Container>
      </header>
      <Container size="default" className="py-12 md:py-20">
        {children}
      </Container>
    </div>
  );
}
