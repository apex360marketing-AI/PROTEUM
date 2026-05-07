"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

/**
 * Server-safe version is no longer required — the shell needs to render
 * a softer, scoped backdrop for the quiz environment, distinct from the
 * marketing pages.
 */
export function QuizShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-proteum-void">
      {/* Scoped quiz backdrop — softer than the marketing hero (~12% sapphire) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-[-30%] h-[1400px] w-[1400px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0) 60%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            opacity: 0.06,
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[40vh]"
          style={{
            background:
              "linear-gradient(to top, rgba(5, 8, 16, 0.7) 0%, rgba(5, 8, 16, 0) 100%)",
          }}
        />
      </div>

      <header className="relative border-b border-proteum-chrome-mid/15 backdrop-blur-[16px]">
        <Container size="wide" className="flex h-20 items-center justify-between">
          <Logo size="md" />
          <Link
            href="/"
            className="font-mono text-[11px] uppercase text-proteum-mist transition-colors duration-200 hover:text-proteum-sapphire-glow"
            style={{ letterSpacing: "0.18em" }}
          >
            ← Exit
          </Link>
        </Container>
      </header>

      <Container size="default" className="relative py-12 md:py-16">
        <div className="mx-auto max-w-[720px]">{children}</div>
      </Container>
    </div>
  );
}
