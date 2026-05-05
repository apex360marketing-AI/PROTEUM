import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerNav, siteConfig } from "@/lib/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-proteum-black">
      <Container size="wide" className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-proteum-mist">
              {siteConfig.tagline} The precision intelligence platform for
              clinical-grade peptides.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3"
          >
            {footerNav.map((column) => (
              <div key={column.title}>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-proteum-mist">
                  {column.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {column.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-proteum-bone/80 hover:text-proteum-bone"
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

        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.06] pt-8 text-xs text-proteum-mist md:flex-row md:items-center md:justify-between">
          <p>© {year} PROTEUM. Educational content only. Not medical advice.</p>
          <p className="max-w-2xl md:text-right">
            Affiliate disclosure: PROTEUM may earn a commission on purchases made
            through outbound links to vetted vendor partners. This does not
            influence our editorial standards.
          </p>
        </div>
      </Container>
    </footer>
  );
}
