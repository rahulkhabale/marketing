import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />

      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-text mb-12">
            Last updated: February 14, 2026
          </p>

          <div className="prose prose-lg max-w-none text-slate-text space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Mailblew platform, website, APIs, and related services (the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">2. Description of Service</h2>
              <p>
                Mailblew provides an email delivery platform that enables users to send transactional and marketing emails through APIs and SMTP relay. The Service includes email sending, delivery tracking, analytics, contact management, and related tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">3. Account Registration</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the security of your account credentials</li>
                <li>You must be at least 18 years old to use the Service</li>
                <li>One person or entity may not maintain more than one account</li>
                <li>You are responsible for all activities that occur under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">4. Acceptable Use</h2>
              <p>
                Your use of the Service is subject to our <a href="/acceptable-use" className="text-electric-cobalt hover:underline">Acceptable Use Policy</a>, which is incorporated into these Terms by reference. You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send unsolicited emails (spam) or violate anti-spam laws</li>
                <li>Send emails containing malware, phishing attempts, or fraudulent content</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the intellectual property rights of others</li>
                <li>Transmit any harmful, offensive, or illegal content</li>
                <li>Attempt to bypass sending limits or abuse the platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">5. Email Sending Requirements</h2>
              <p>When using the Service, you must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Only send emails to recipients who have given valid consent (opt-in)</li>
                <li>Include a clear and working unsubscribe mechanism in marketing emails</li>
                <li>Include your valid physical mailing address in all marketing emails</li>
                <li>Honor unsubscribe requests within 10 business days</li>
                <li>Maintain clean mailing lists and promptly remove bounced addresses</li>
                <li>Comply with CAN-SPAM Act, GDPR, and all other applicable email regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">6. Credits and Payment</h2>
              <h3 className="text-xl font-semibold text-deep-navy mb-3">6.1 Credit-Based Pricing</h3>
              <p>
                Email sending is billed on a credit-based system. Credits are purchased in advance and consumed when emails are sent or received. Purchased credits do not expire.
              </p>

              <h3 className="text-xl font-semibold text-deep-navy mb-3 mt-6">6.2 Subscription Plans</h3>
              <p>
                Marketing plans and support tiers are billed on a monthly or annual subscription basis. Annual billing provides a discounted rate as shown on our pricing page.
              </p>

              <h3 className="text-xl font-semibold text-deep-navy mb-3 mt-6">6.3 Refunds</h3>
              <p>
                Unused credits are non-refundable. Subscription plans may be canceled at any time, with access continuing until the end of the current billing period. Refunds for annual plans are considered on a case-by-case basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">7. Service Availability</h2>
              <p>
                We strive to maintain 99.9% uptime for our Service. However, we do not guarantee uninterrupted access. The Service may be temporarily unavailable for maintenance, updates, or due to circumstances beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">8. Intellectual Property</h2>
              <p>
                The Service, including its design, features, and content, is owned by Mailblew and protected by intellectual property laws. You retain ownership of the content you send through our Service. By using the Service, you grant us a limited license to process your content solely for the purpose of delivering your emails.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">9. Suspension and Termination</h2>
              <p>We may suspend or terminate your account if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You violate these Terms or the Acceptable Use Policy</li>
                <li>Your emails generate excessive bounces or spam complaints</li>
                <li>You engage in fraudulent or illegal activity</li>
                <li>Your account poses a risk to our infrastructure or other users</li>
              </ul>
              <p className="mt-4">
                You may terminate your account at any time by contacting us. Upon termination, your data will be deleted in accordance with our <a href="/privacy" className="text-electric-cobalt hover:underline">Privacy Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Mailblew shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of revenue, data, or business opportunities, arising from your use of the Service.
              </p>
              <p>
                Our total liability for any claim arising from or related to the Service shall not exceed the amount you paid to us in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">11. Indemnification</h2>
              <p>
                You agree to indemnify and hold Mailblew harmless from any claims, damages, or expenses arising from your use of the Service, your violation of these Terms, or your violation of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of material changes by email or by posting a notice on our website. Your continued use of the Service after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">14. Contact Us</h2>
              <p>
                If you have questions about these Terms, please contact us:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> <a href="mailto:legal@mailblew.com" className="text-electric-cobalt hover:underline">legal@mailblew.com</a></li>
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
