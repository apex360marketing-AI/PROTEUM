export const siteConfig = {
  name: "PROTEUM",
  tagline: "Rise beyond your biology.",
  description:
    "The precision intelligence platform for clinical-grade peptides — decoding the molecules redefining performance, recovery, and longevity.",
  url: "https://proteum.com",
  ogImage: "/og-image.png",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "The thesis", href: "/#thesis" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Platform",
    items: [
      { label: "Take the assessment", href: "/assessment" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Built for", href: "/#built-for" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "The thesis", href: "/#thesis" },
      { label: "Trust & rigor", href: "/#trust" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Research use", href: "/research-use" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];
