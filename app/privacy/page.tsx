import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { LegalPage, LegalSection } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How PROTEUM handles personal information, quiz responses, and affiliate click data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 md:pt-20">
        <LegalPage
          eyebrow="Privacy policy"
          title="Privacy policy."
          effective="January 1, 2026"
          intro="This Privacy Policy explains what information PROTEUM collects, how we use it, and the choices you have. We aim to collect as little as possible while still operating a useful platform."
        >
          <LegalSection heading="1. Information we collect">
            <p>
              <strong>Assessment responses.</strong> When you complete the
              assessment, your answers are stored anonymously in our database.
              We do not require an account, name, email, or phone number to
              participate. Assessment sessions are identified by a randomly
              generated session identifier and may be associated with the user
              agent and referring page that brought you to the Site.
            </p>
            <p>
              <strong>Email addresses.</strong> Phase A of PROTEUM does not
              collect email addresses. If we add optional email features in
              the future (such as a results-by-email option), we will update
              this policy and clearly disclose what is collected and how it is
              used at the point of collection.
            </p>
            <p>
              <strong>Affiliate click events.</strong> When you click an
              outbound link to a vendor partner, that click may be recorded by
              the vendor's affiliate platform alongside a referral identifier.
              This is how affiliate attribution works across the web. The
              vendor's privacy policy applies to whatever happens after you
              leave PROTEUM.
            </p>
            <p>
              <strong>Server and operational logs.</strong> Like virtually all
              websites, our hosting and infrastructure providers (such as
              Netlify and Supabase) maintain operational logs that may include
              IP addresses, request timestamps, and user-agent strings. These
              logs are retained per provider defaults and used for security
              and reliability.
            </p>
          </LegalSection>

          <LegalSection heading="2. How we use information">
            <p>
              We use the limited information we collect to: operate and
              improve the Site and the assessment, understand which steps of
              the assessment work and which cause drop-off, comply with legal
              obligations, and protect against abuse or misuse. We do not sell
              your information.
            </p>
          </LegalSection>

          <LegalSection heading="3. Cookies and storage">
            <p>
              PROTEUM uses browser <strong>localStorage</strong> to keep your
              in-progress assessment answers on your device so that you can
              navigate between steps without losing data. We may set
              first-party cookies necessary for the site to function. We do
              not use third-party advertising cookies or cross-site tracking
              pixels in Phase A. If we add analytics in a later phase, we will
              prefer privacy-respecting tools that do not require cookie
              consent banners.
            </p>
          </LegalSection>

          <LegalSection heading="4. Sharing">
            <p>
              We do not sell or rent personal information. We share information
              only with: (a) service providers who help us operate the Site
              (hosting, database, infrastructure) under contractual privacy
              obligations; (b) authorities, when legally required; and (c)
              successors in connection with a merger, acquisition, or
              reorganization, with notice to users where required.
            </p>
          </LegalSection>

          <LegalSection heading="5. Affiliate disclosure">
            <p>
              When you click through to a vendor partner and complete a
              transaction, PROTEUM may earn a commission. The vendor's privacy
              policy governs any data they collect from that point forward.
              We disclose this affiliate relationship wherever outbound links
              are present.
            </p>
          </LegalSection>

          <LegalSection heading="6. Data retention">
            <p>
              Anonymous assessment sessions are retained for analytical
              purposes and to support feature improvements. Because sessions
              are not tied to identified individuals by default, "deletion of
              your account" is not generally applicable in Phase A. If we
              later add identified accounts, we will publish corresponding
              retention and deletion controls.
            </p>
          </LegalSection>

          <LegalSection heading="7. Your choices">
            <p>
              You can clear your in-progress assessment data at any time by
              clearing your browser's site data for PROTEUM, or by using the
              "Start over" control in the assessment. You can stop using the
              Site at any time. Where applicable law (such as GDPR or CCPA)
              grants you specific rights — access, correction, deletion,
              portability, or objection — you may exercise those rights by
              contacting us at <a href="mailto:privacy@proteum.com">privacy@proteum.com</a>.
            </p>
          </LegalSection>

          <LegalSection heading="8. Children">
            <p>
              PROTEUM is intended for adults aged 18 and older. We do not
              knowingly collect information from children. If you believe a
              child has provided information to us, please contact us and we
              will delete it.
            </p>
          </LegalSection>

          <LegalSection heading="9. International users">
            <p>
              PROTEUM may be accessed globally. By using the Site, you
              acknowledge that information may be processed in jurisdictions
              other than your own, including jurisdictions whose data
              protection laws may differ from those in your country.
            </p>
          </LegalSection>

          <LegalSection heading="10. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. The
              effective date at the top of this page reflects the most recent
              update. Material changes will be communicated through the Site.
            </p>
          </LegalSection>

          <LegalSection heading="11. Contact">
            <p>
              Privacy questions can be directed to{" "}
              <a href="mailto:privacy@proteum.com">privacy@proteum.com</a>.
            </p>
          </LegalSection>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
