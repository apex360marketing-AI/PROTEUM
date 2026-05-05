import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { LegalPage, LegalSection } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "The terms governing your use of the PROTEUM educational platform.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 md:pt-20">
        <LegalPage
          eyebrow="Terms of use"
          title="Terms of use."
          effective="January 1, 2026"
          intro="These Terms of Use govern your access to and use of the PROTEUM website and platform. By using the site, you agree to these terms."
        >
          <LegalSection heading="1. Acceptance of terms">
            <p>
              By accessing or using PROTEUM (the "Site"), you agree to be bound
              by these Terms of Use, our Privacy Policy, our Disclaimer, and
              our Research Use page. If you do not agree, do not use the Site.
              We may update these terms from time to time; continued use after
              an update constitutes acceptance of the revised terms.
            </p>
          </LegalSection>

          <LegalSection heading="2. Eligibility">
            <p>
              You must be at least 18 years old to use PROTEUM. By using the
              Site, you represent that you are 18 or older and that you have
              the legal capacity to enter into these terms.
            </p>
          </LegalSection>

          <LegalSection heading="3. Educational purpose">
            <p>
              PROTEUM is an educational and informational platform. The Site
              does not provide medical advice, diagnosis, or treatment, and
              nothing on the Site creates a doctor-patient or
              practitioner-client relationship. See our Disclaimer for
              additional detail.
            </p>
          </LegalSection>

          <LegalSection heading="4. Affiliate relationships">
            <p>
              PROTEUM participates in affiliate programs with third-party
              vendor partners. When you click an outbound link to a vendor and
              complete a transaction, PROTEUM may earn a commission at no
              additional cost to you. This funding model supports the free
              educational content on the Site. Affiliate relationships do not
              influence which peptides we cover, the editorial framing of any
              brief, or our quality criteria for vendor inclusion.
            </p>
          </LegalSection>

          <LegalSection heading="5. Third-party vendors">
            <p>
              PROTEUM does not sell, manufacture, ship, or fulfill any peptide
              or other product. Transactions with vendor partners occur
              directly between you and the vendor under the vendor's terms,
              policies, and applicable law. PROTEUM makes no representation or
              warranty regarding any third-party product, service, or
              statement. Disputes related to a vendor transaction must be
              resolved with that vendor.
            </p>
          </LegalSection>

          <LegalSection heading="6. Intellectual property">
            <p>
              All content on the Site, including text, graphics, design,
              logos, and software, is the property of PROTEUM or its licensors
              and is protected by copyright and other intellectual-property
              laws. You may view and share content for personal,
              non-commercial purposes with attribution. Any other use,
              including reproduction, modification, distribution, or
              commercial use, requires prior written permission.
            </p>
          </LegalSection>

          <LegalSection heading="7. Acceptable use">
            <p>
              You agree not to use the Site to: (a) violate any law or
              regulation; (b) infringe the rights of any party; (c) interfere
              with or disrupt the Site or its underlying infrastructure; (d)
              attempt to gain unauthorized access to any portion of the Site
              or related systems; (e) collect or harvest data about other
              users; or (f) misrepresent your identity or affiliation.
            </p>
          </LegalSection>

          <LegalSection heading="8. Disclaimer of warranties">
            <p>
              THE SITE AND ALL CONTENT ARE PROVIDED ON AN "AS IS" AND "AS
              AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
              IMPLIED. PROTEUM DISCLAIMS ALL WARRANTIES INCLUDING, BUT NOT
              LIMITED TO, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              NON-INFRINGEMENT, AND ACCURACY. PROTEUM DOES NOT WARRANT THAT
              THE SITE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
            </p>
          </LegalSection>

          <LegalSection heading="9. Limitation of liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL PROTEUM, ITS OFFICERS, EMPLOYEES, OR AFFILIATES BE LIABLE
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, USE, OR GOODWILL,
              ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE,
              WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL
              THEORY, AND WHETHER OR NOT PROTEUM HAS BEEN ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES.
            </p>
          </LegalSection>

          <LegalSection heading="10. Indemnification">
            <p>
              You agree to indemnify and hold harmless PROTEUM and its
              affiliates from any claim, demand, loss, or damage, including
              reasonable attorneys' fees, arising out of or related to your
              use of the Site, your violation of these terms, or your
              violation of any rights of another party.
            </p>
          </LegalSection>

          <LegalSection heading="11. Governing law">
            <p>
              These terms are governed by the laws of the jurisdiction in
              which PROTEUM is established, without regard to conflict-of-laws
              principles. Any dispute arising under these terms shall be
              brought exclusively in the courts of that jurisdiction.
            </p>
          </LegalSection>

          <LegalSection heading="12. Contact">
            <p>
              Questions about these terms can be directed to{" "}
              <a href="mailto:legal@proteum.com">legal@proteum.com</a>.
            </p>
          </LegalSection>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
