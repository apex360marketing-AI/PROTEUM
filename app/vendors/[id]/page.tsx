import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allVendors, getVendorById } from "@/content/vendors";
import { VendorDetail } from "@/components/vendors/VendorDetail";

type Params = { id: string };

export function generateStaticParams() {
  return allVendors.map((v) => ({ id: v.id }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const vendor = getVendorById(params.id);
  if (!vendor) return {};
  const description = `${vendor.tagline} — Quality score ${vendor.qualityScore}/100. ${vendor.proteumVerdict === "recommended" ? "Recommended by PROTEUM." : vendor.proteumVerdict === "acceptable" ? "Acceptable per PROTEUM's quality criteria." : "Listed with caution."}`;
  const url = `/vendors/${vendor.id}`;
  return {
    title: `${vendor.name} — Vendor profile`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${vendor.name} — PROTEUM`,
      description,
      url,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default function VendorDetailPage({ params }: { params: Params }) {
  const vendor = getVendorById(params.id);
  if (!vendor) notFound();
  return <VendorDetail vendor={vendor} />;
}
