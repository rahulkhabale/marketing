import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-text mb-12">
            Last updated: February 14, 2026
          </p>

          <div className="prose prose-lg max-w-none text-slate-text space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">1. Introduction</h2>
              <p>
                Mailblew (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our email delivery platform, website, and related services (collectively, the &quot;Service&quot;).
              </p>
              <p>
                By using our Service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-deep-navy mb-3">2.1 Account Information</h3>
              <p>When you create an account, we collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and email address</li>
                <li>Company name and billing information</li>
                <li>Phone number (optional)</li>
                <li>Password (stored in encrypted form)</li>
              </ul>

              <h3 className="text-xl font-semibold text-deep-navy mb-3 mt-6">2.2 Email Data</h3>
              <p>When you use our Service to send emails, we process:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sender and recipient email addresses</li>
                <li>Email subject lines and content</li>
                <li>Email metadata (timestamps, message IDs, delivery status)</li>
                <li>Attachments (temporarily, for delivery purposes)</li>
              </ul>

              <h3 className="text-xl font-semibold text-deep-navy mb-3 mt-6">2.3 Usage Data</h3>
              <p>We automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP addresses and browser information</li>
                <li>API usage logs and request data</li>
                <li>Email engagement metrics (opens, clicks, bounces)</li>
                <li>Device and platform information</li>
              </ul>

              <h3 className="text-xl font-semibold text-deep-navy mb-3 mt-6">2.4 Cookies and Tracking</h3>
              <p>
                We use cookies and similar technologies to maintain your session, remember preferences, and analyze usage patterns. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process and deliver your emails</li>
                <li>Send you account-related notifications</li>
                <li>Process billing and payments</li>
                <li>Provide customer support</li>
                <li>Monitor and prevent abuse, fraud, and spam</li>
                <li>Generate aggregated, anonymized analytics</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">4. Data Sharing and Disclosure</h2>
              <p>We do not sell your personal data. We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist with infrastructure, payment processing, and analytics</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you have given explicit permission</li>
              </ul>
              <p className="mt-4">
                We require all third-party service providers to respect the security of your data and treat it in accordance with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">5. Data Retention</h2>
              <p>
                We retain your account data for as long as your account is active or as needed to provide the Service. Email content is retained temporarily for delivery and then deleted within 30 days. Email metadata and delivery logs are retained for up to 12 months for analytics and troubleshooting purposes.
              </p>
              <p>
                You may request deletion of your data at any time by contacting us at <a href="mailto:privacy@mailblew.com" className="text-electric-cobalt hover:underline">privacy@mailblew.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">6. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure data centers with physical security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">7. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Request your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain processing of your data</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us at <a href="mailto:privacy@mailblew.com" className="text-electric-cobalt hover:underline">privacy@mailblew.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">8. International Data Transfers</h2>
              <p>
                Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including standard contractual clauses and compliance with applicable data protection regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">9. Children&apos;s Privacy</h2>
              <p>
                Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. Your continued use of the Service after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">11. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> <a href="mailto:privacy@mailblew.com" className="text-electric-cobalt hover:underline">privacy@mailblew.com</a></li>
                <li><strong>Phone:</strong> +91 8898 424444</li>
                <li><strong>Address:</strong> Mumbai, India</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
