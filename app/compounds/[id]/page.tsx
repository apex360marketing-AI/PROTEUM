import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allCompounds, getCompoundById } from "@/content/knowledge-base";
import { siteConfig } from "@/lib/constants/site";
import { CompoundDetail } from "@/components/compounds/CompoundDetail";

type Params = { id: string };

export function generateStaticParams() {
  return allCompounds.map((c) => ({ id: c.id }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const compound = getCompoundById(params.id);
  if (!compound) return {};
  const firstSentence = compound.longDescription.split(". ").slice(0, 1).join(". ");
  const description = `${compound.tagline} ${firstSentence}`.slice(0, 280);
  const url = `/compounds/${compound.id}`;
  return {
    title: `${compound.name} — Mechanism, Studies & Considerations`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${compound.name} — ${siteConfig.name}`,
      description,
      url,
      type: "article",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${compound.name} — ${siteConfig.name}`,
      description,
    },
  };
}

export default function CompoundDetailPage({ params }: { params: Params }) {
  const compound = getCompoundById(params.id);
  if (!compound) notFound();
  return <CompoundDetail compound={compound} />;
}
