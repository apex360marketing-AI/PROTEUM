import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { LegalPage, LegalSection } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Research use",
  description:
    "How PROTEUM frames peptides under research-use conventions and the regulatory landscape readers should understand.",
};

export default function ResearchUsePage() {
  return (
    <>
      <Nav />
      <main className="pt-16 md:pt-20">
        <LegalPage
          eyebrow="Research use"
          title="How we frame the peptides we cover."
          effective="January 1, 2026"
          intro="Most peptides discussed on PROTEUM are sold by third parties for laboratory research purposes and are not approved for human therapeutic use. This page explains what that means and how to read our content responsibly."
        >
          <LegalSection heading="What 'research use' means">
            <p>
              In most major jurisdictions, including the United States, Canada,
              the United Kingdom, the European Union, and Australia, the
              majority of peptides PROTEUM covers are not approved drugs. They
              are typically sold under designations such as "for research
              purposes only," "not for human consumption," or "laboratory use
              only." These designations carry legal weight: the substances are
              produced and distributed under research-product conventions, not
              under pharmaceutical good-manufacturing-practice (GMP) approvals
              for therapeutic use in humans.
            </p>
            <p>
              When PROTEUM publishes a peptide brief, we are summarizing the
              available scientific literature — preclinical studies, clinical
              trials where they exist, mechanism-of-action research, and known
              safety signals — for educational purposes. We are not endorsing
              human use, off-label use, or any specific protocol.
            </p>
          </LegalSection>

          <LegalSection heading="Regulatory landscape, at a high level">
            <p>
              Regulation varies materially by country, by state or province, by
              substance, and by the channel through which a substance is
              acquired. In the United States, certain peptides have been the
              subject of FDA Section 503A and 503B compounding guidance,
              import-alert actions, and ongoing rulemaking. In Canada, Health
              Canada classifies many peptides under the Food and Drugs Act and
              its associated regulations. In other jurisdictions, separate
              frameworks apply.
            </p>
            <p>
              Regulatory status changes. A peptide that is freely sold for
              research today may be restricted tomorrow, and vice versa.
              Verifying the current legal status that applies to you, in your
              jurisdiction, is your responsibility — not PROTEUM's, and not
              that of any vendor partner.
            </p>
          </LegalSection>

          <LegalSection heading="Why we still publish">
            <p>
              Demand for information about these molecules already exists, and
              the alternative to thoughtful, citation-grounded coverage is
              shallow content with worse incentives. PROTEUM was built to be
              the rigorous default: clear about evidence, clear about
              uncertainty, clear about the regulatory framing, and clear about
              the limits of educational content.
            </p>
            <p>
              We frame every brief in the research-and-education context. We
              cite primary literature wherever possible. We disclose
              uncertainty when the evidence is preliminary or contested. And we
              consistently route readers toward qualified clinicians for any
              decision that touches their body.
            </p>
          </LegalSection>

          <LegalSection heading="Vendor partners">
            <p>
              Vendor partners listed on PROTEUM operate under their own terms,
              policies, and applicable laws. Their inclusion reflects our
              quality criteria — third-party analytical testing, transparent
              sourcing, operating history — and not a representation that
              their products are approved for human use in your jurisdiction.
              You are responsible for confirming that any transaction you
              undertake is legal where you live and appropriate for your use.
            </p>
          </LegalSection>

          <LegalSection heading="What PROTEUM does not do">
            <p>
              PROTEUM does not prescribe, dispense, sell, ship, hold inventory,
              or fulfill orders. PROTEUM does not provide medical advice, does
              not diagnose, does not treat, and does not direct any reader to
              consume any substance. PROTEUM does not represent that any
              peptide is safe, effective, or legal for any specific reader's
              use — those determinations belong to qualified professionals
              who know the reader's full context.
            </p>
          </LegalSection>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
