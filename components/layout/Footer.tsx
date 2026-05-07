import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerNav, siteConfig } from "@/lib/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24">
      {/* Top hairline */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(200, 205, 214, 0.2) 50%, transparent 100%)",
        }}
      />

      <div
        className="relative"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 18, 40, 0.6) 0%, rgba(11, 18, 40, 0.85) 100%)",
          backdropFilter: "blur(24px)",
        }}
      >
        <Container size="wide" className="py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            {/* Brand column */}
            <div className="md:col-span-5 lg:col-span-4">
              <Logo size="md" />
              <p
                className="mt-6 max-w-xs font-display text-base font-light text-proteum-bone"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                {siteConfig.tagline}
              </p>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-proteum-mist">
                Affiliate disclosure: PROTEUM may earn a commission on purchases
                made through outbound links to vetted vendor partners. This does
                not influence our editorial standards.
              </p>
            </div>

            {/* Nav columns */}
            <nav
              aria-label="Footer"
              className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3 lg:col-span-8"
            >
              {footerNav.map((column) => (
                <div key={column.title}>
                  <h4
                    className="font-mono text-[11px] uppercase text-proteum-chrome-mid"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    {column.title}
                  </h4>
                  <ul className="mt-5 space-y-3">
                    {column.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-proteum-mist transition-colors duration-200 hover:text-proteum-sapphire-glow"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col gap-3 border-t border-proteum-chrome-low/20 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-proteum-mist-low">
              © {year} PROTEUM. Educational content only. Not medical advice.
            </p>
            <p
              className="font-mono text-[10px] uppercase text-proteum-mist-low"
              style={{ letterSpacing: "0.18em" }}
            >
              Built with research · Vancouver, BC
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
