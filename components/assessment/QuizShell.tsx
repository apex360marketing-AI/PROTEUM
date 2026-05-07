import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { BackgroundLayers } from "@/components/layout/BackgroundLayers";

export function QuizShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundLayers />

      <header className="relative border-b border-proteum-chrome-mid/15 backdrop-blur-[16px]">
        <Container
          size="wide"
          className="flex h-20 items-center justify-between"
        >
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
      <Container size="default" className="relative py-12 md:py-20">
        {children}
      </Container>
    </div>
  );
}
