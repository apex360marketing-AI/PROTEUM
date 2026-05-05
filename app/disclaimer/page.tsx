import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { LegalPage, LegalSection } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "PROTEUM is an educational platform. Content is informational and is not medical advice.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 md:pt-20">
        <LegalPage
          eyebrow="Disclaimer"
          title="Educational content, not medical advice."
          effective="January 1, 2026"
          intro="Please read this disclaimer carefully. By using PROTEUM, you acknowledge that you have read, understood, and agreed to the terms below."
        >
          <LegalSection heading="No medical advice">
            <p>
              PROTEUM publishes educational and informational content about
              peptides and related research. Nothing on this site is intended
              as, or should be interpreted as, medical advice, diagnosis, or
              treatment. The content does not establish a doctor-patient,
              practitioner-client, or any other professional relationship.
            </p>
            <p>
              Always seek the advice of a qualified, licensed healthcare
              professional with any questions about a medical condition,
              symptom, supplement, medication, or lifestyle change. Never
              disregard, delay, or discontinue professional medical advice
              because of something you read on PROTEUM.
            </p>
          </LegalSection>

          <LegalSection heading="Research-use framing">
            <p>
              The peptides discussed on PROTEUM are commonly sold by third
              parties for laboratory and research purposes and are typically
              not approved for human therapeutic use by major regulatory
              bodies, including but not limited to the U.S. Food and Drug
              Administration (FDA) and Health Canada. We discuss these
              molecules in that research-and-education context.
            </p>
            <p>
              <strong>PROTEUM does not advise, encourage, or instruct any
              reader to consume, inject, ingest, or otherwise self-administer
              any peptide or other substance.</strong> Decisions about
              substances you put into your body belong to you and the
              professionals who advise you, not to a website.
            </p>
          </LegalSection>

          <LegalSection heading="Individual variability">
            <p>
              Individual physiology, medical history, medications, and
              circumstances vary. Information presented as general or
              representative may not apply to your situation. The
              recommendation engine provides directional, education-oriented
              output based on a limited set of inputs — it is not a substitute
              for clinical evaluation by a qualified professional who knows
              your full medical context.
            </p>
          </LegalSection>

          <LegalSection heading="Third-party vendors">
            <p>
              PROTEUM is an educational platform. We do not manufacture, sell,
              ship, or take possession of any peptide product. When you choose
              to research a vendor partner, you transact directly with that
              vendor under their terms of sale, return policy, and applicable
              law. We make no warranty, express or implied, regarding any
              third-party product, service, or representation. Independent
              verification before any transaction is your responsibility.
            </p>
          </LegalSection>

          <LegalSection heading="No guarantee of outcomes">
            <p>
              References to clinical studies, peer-reviewed literature, or
              practitioner experience are provided to inform — not to
              guarantee. Outcomes vary. Risk exists. We make no representation
              that any peptide, protocol, or strategy described will produce
              any specific result for any specific person.
            </p>
          </LegalSection>

          <LegalSection heading="Acknowledgment">
            <p>
              By using PROTEUM, you confirm that you are at least 18 years old,
              that you accept full responsibility for any decisions you make
              based on information you find here, and that you will consult a
              qualified healthcare professional before acting on anything you
              learn.
            </p>
          </LegalSection>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
