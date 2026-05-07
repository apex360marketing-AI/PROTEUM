"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { primaryNav } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        "bg-proteum-void/70 backdrop-blur-[16px] backdrop-saturate-150",
        "border-b border-proteum-chrome-mid/15",
        scrolled && "shadow-[0_4px_24px_rgba(5,8,16,0.4)]",
      )}
    >
      <Container size="wide">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo lockup */}
          <Logo size="md" />

          {/* Center nav */}
          <ul className="hidden items-center gap-10 md:flex">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-proteum-mist transition-colors duration-200 hover:text-proteum-sapphire-glow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right CTA — chrome ghost */}
          <div className="hidden md:block">
            <Button href="/assessment" variant="chrome-ghost" size="sm">
              Begin assessment
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-proteum-bone transition-colors hover:text-proteum-sapphire-glow md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {open && (
        <div className="border-t border-proteum-chrome-mid/15 bg-proteum-void/95 backdrop-blur-xl md:hidden">
          <Container size="wide">
            <ul className="flex flex-col gap-1 py-4">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-3 text-base text-proteum-bone hover:text-proteum-sapphire-glow"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  href="/assessment"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Begin assessment
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
