import Link from "next/link";

type Props = {
  /** "compact" inline strip vs "full" panel layout. */
  variant?: "compact" | "full";
};

/**
 * Affiliate disclosure component. Per the editorial policy, this appears
 * prominently on every page that surfaces vendor links — never hidden in a
 * footer.
 */
export function AffiliateDisclosure({ variant = "compact" }: Props) {
  if (variant === "full") {
    return (
      <div className="rounded-2xl border border-proteum-chrome-low/20 bg-proteum-surface/40 p-6 backdrop-blur-[8px]">
        <p
          className="font-mono text-[11px] uppercase text-proteum-mist-low"
          style={{ letterSpacing: "0.18em" }}
        >
          Affiliate disclosure
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-proteum-mist">
          PROTEUM earns commissions when you research a vendor partner and
          complete a purchase through our links. The price you pay is
          unaffected by this. Our editorial criteria — the third-party testing,
          manufacturing, transparency, service, shipping, and review-aggregate
          standards laid out in our{" "}
          <Link
            href="/methodology"
            className="text-proteum-sapphire-glow underline underline-offset-4 hover:text-proteum-bone"
          >
            methodology
          </Link>
          {" "}— determine which vendors we feature. Commission rate does not.
        </p>
      </div>
    );
  }

  return (
    <p className="text-[12px] leading-relaxed text-proteum-mist-low">
      PROTEUM earns commissions from vendor partners. Our recommendations are
      based on our{" "}
      <Link
        href="/methodology"
        className="text-proteum-sapphire-glow underline underline-offset-4 hover:text-proteum-bone"
      >
        quality criteria
      </Link>
      , not commission rates.
    </p>
  );
}
