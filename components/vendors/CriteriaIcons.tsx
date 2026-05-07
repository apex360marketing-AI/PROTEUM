import { CheckCircle2, AlertTriangle, ShieldCheck, FlaskConical, Truck, Star, Eye } from "lucide-react";
import type { Vendor } from "@/content/vendors/types";
import { cn } from "@/lib/utils/cn";

type CriteriaTone = "ok" | "warn" | "fail";

type CriteriaPill = {
  label: string;
  status: string;
  tone: CriteriaTone;
  icon: typeof CheckCircle2;
};

const TONE_CLASS: Record<CriteriaTone, string> = {
  ok: "border-proteum-cyan/35 text-proteum-cyan",
  warn: "border-proteum-gold-dim/40 text-proteum-gold-dim",
  fail: "border-proteum-chrome-low/40 text-proteum-mist-low",
};

/**
 * Compact 4-column row of the most important criteria for a vendor — used
 * inside the top-recommendation hero card on compound pages and in vendor
 * cards. Always shows: testing, manufacturing, transparency, service.
 */
export function CriteriaIcons({ vendor }: { vendor: Vendor }) {
  const items = pickPills(vendor).slice(0, 4);
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {items.map((item) => (
        <li
          key={item.label}
          className={cn(
            "flex items-start gap-2 rounded-lg border bg-proteum-void/30 px-3 py-2",
            TONE_CLASS[item.tone],
          )}
        >
          <item.icon size={14} className="mt-0.5 shrink-0" strokeWidth={1.5} />
          <div className="min-w-0">
            <p
              className="font-mono text-[10px] uppercase opacity-80"
              style={{ letterSpacing: "0.15em" }}
            >
              {item.label}
            </p>
            <p className="mt-0.5 text-[12px] text-proteum-bone/85 leading-tight">
              {item.status}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function pickPills(v: Vendor): CriteriaPill[] {
  return [
    {
      label: "Testing",
      icon: FlaskConical,
      status: testingStatus(v.thirdPartyTested.status),
      tone: testingTone(v.thirdPartyTested.status),
    },
    {
      label: "Manufacturing",
      icon: ShieldCheck,
      status: manufacturingStatus(v.manufacturingStandard.status),
      tone: manufacturingTone(v.manufacturingStandard.status),
    },
    {
      label: "Transparency",
      icon: Eye,
      status: transparencyStatus(v.ingredientTransparency.status),
      tone: transparencyTone(v.ingredientTransparency.status),
    },
    {
      label: "Service",
      icon: Star,
      status:
        v.customerService.responseTimeHours !== null
          ? `~${v.customerService.responseTimeHours}h reply`
          : "Unknown",
      tone:
        v.customerService.responseTimeHours !== null &&
        v.customerService.responseTimeHours <= 24
          ? "ok"
          : "warn",
    },
    {
      label: "Shipping",
      icon: Truck,
      status: `~${v.shippingPolicy.averageDays}d`,
      tone: v.shippingPolicy.averageDays <= 5 ? "ok" : "warn",
    },
    {
      label: "Reviews",
      icon: CheckCircle2,
      status:
        typeof v.reviewAggregate.trustpilotRating === "number"
          ? `${v.reviewAggregate.trustpilotRating.toFixed(1)} ★`
          : "Unknown",
      tone:
        typeof v.reviewAggregate.trustpilotRating === "number" &&
        v.reviewAggregate.trustpilotRating >= 4.0
          ? "ok"
          : "warn",
    },
  ];
}

function testingStatus(s: string) {
  switch (s) {
    case "verified":
      return "Verified COAs";
    case "partial":
      return "Some COAs";
    case "unverified":
      return "Self-attested";
    default:
      return "None";
  }
}
function testingTone(s: string): CriteriaTone {
  if (s === "verified") return "ok";
  if (s === "partial") return "warn";
  return "fail";
}

function manufacturingStatus(s: string) {
  switch (s) {
    case "GMP":
      return "GMP-certified";
    case "ISO":
      return "ISO-certified";
    case "self-attested":
      return "Self-attested";
    default:
      return "Unverified";
  }
}
function manufacturingTone(s: string): CriteriaTone {
  if (s === "GMP" || s === "ISO") return "ok";
  if (s === "self-attested") return "warn";
  return "fail";
}

function transparencyStatus(s: string) {
  switch (s) {
    case "full":
      return "Full disclosure";
    case "partial":
      return "Partial";
    default:
      return "Opaque";
  }
}
function transparencyTone(s: string): CriteriaTone {
  if (s === "full") return "ok";
  if (s === "partial") return "warn";
  return "fail";
}

export const VerdictIcon = AlertTriangle;
