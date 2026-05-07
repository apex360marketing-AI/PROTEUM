export const siteConfig = {
  name: "PROTEUM",
  tagline: "Rise beyond your biology.",
  description:
    "The precision intelligence platform for clinical-grade peptides — decoding the molecules redefining performance, recovery, and longevity.",
  url: "https://proteum.com",
  ogImage: "/og-image.png",
} as const;

/**
 * Visual mode — Mode A is the default restrained luxury treatment.
 * Switch to "B" for a more lit / animated / atmospheric feel
 * (stronger orb glow, hue-shift, animated grain, brighter glass borders).
 * Single-line change, no other code edits required.
 */
export const VISUAL_MODE: "A" | "B" = "A";

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Compounds", href: "/#what" },
  { label: "Research", href: "/#thesis" },
  { label: "About", href: "/#trust" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Platform",
    items: [
      { label: "Compounds", href: "/#what" },
      { label: "Assessment", href: "/assessment" },
      { label: "Research", href: "/#thesis" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/#trust" },
      { label: "Methodology", href: "/research-use" },
      { label: "Contact", href: "mailto:hello@proteum.com" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Research Use", href: "/research-use" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];
