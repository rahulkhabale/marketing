import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AcceptableUsePolicyPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Acceptable Use Policy
          </h1>
          <p className="text-slate-text mb-12">
            Last updated: February 14, 2026
          </p>

          <div className="prose prose-lg max-w-none text-slate-text space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">1. Overview</h2>
              <p>
                This Acceptable Use Policy (&quot;AUP&quot;) defines the rules and guidelines for using the Mailblew email delivery platform. All users must comply with this policy to ensure the integrity, deliverability, and reputation of our platform for all customers.
              </p>
              <p>
                Violation of this policy may result in immediate suspension or termination of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">2. Anti-Spam Policy</h2>
              <p>
                Mailblew has a zero-tolerance policy for spam. You must not use our Service to send unsolicited bulk emails. All emails sent through our platform must comply with the following:
              </p>

              <h3 className="text-xl font-semibold text-deep-navy mb-3 mt-6">2.1 Consent Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Opt-in Only:</strong> You must only send emails to recipients who have explicitly opted in to receive communications from you</li>
                <li><strong>No Purchased Lists:</strong> You must not send emails to purchased, rented, or scraped email lists</li>
                <li><strong>Proof of Consent:</strong> You must be able to provide proof of consent for any recipient upon request</li>
                <li><strong>Double Opt-in Recommended:</strong> We strongly recommend using double opt-in (confirmed opt-in) for marketing emails</li>
              </ul>

              <h3 className="text-xl font-semibold text-deep-navy mb-3 mt-6">2.2 Unsubscribe Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All marketing emails must include a clearly visible and functional unsubscribe link</li>
                <li>Unsubscribe requests must be honored within 10 business days</li>
                <li>The unsubscribe process must not require the recipient to log in or provide additional information</li>
                <li>You must not send further marketing emails to users who have unsubscribed</li>
              </ul>

              <h3 className="text-xl font-semibold text-deep-navy mb-3 mt-6">2.3 Email Content Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Emails must accurately identify the sender</li>
                <li>Subject lines must not be deceptive or misleading</li>
                <li>Marketing emails must include your valid physical mailing address</li>
                <li>The &quot;From&quot; name and address must clearly identify your business</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">3. Bounce and Complaint Management</h2>
              <p>
                Maintaining low bounce and complaint rates is critical for email deliverability. You are required to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Bounce Rate:</strong> Maintain a hard bounce rate below 5%. Accounts exceeding this threshold may be suspended</li>
                <li><strong>Complaint Rate:</strong> Maintain a spam complaint rate below 0.1%. High complaint rates will trigger an account review</li>
                <li><strong>List Hygiene:</strong> Regularly clean your mailing lists by removing invalid, bounced, and unsubscribed addresses</li>
                <li><strong>Suppression Lists:</strong> Maintain and honor suppression lists for bounced and unsubscribed recipients</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">4. Prohibited Content</h2>
              <p>You must not use Mailblew to send emails that contain or promote:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Malware, viruses, or other harmful software</li>
                <li>Phishing attempts or fraudulent schemes</li>
                <li>Content that violates any applicable laws or regulations</li>
                <li>Illegal products or services</li>
                <li>Deceptive or misleading content</li>
                <li>Content that infringes on intellectual property rights</li>
                <li>Threats, harassment, or abusive content</li>
                <li>Content that promotes violence or discrimination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">5. Prohibited Activities</h2>
              <p>The following activities are strictly prohibited:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Using the Service to harvest or collect email addresses without consent</li>
                <li>Sending emails using forged headers or deceptive sender information</li>
                <li>Attempting to bypass sending limits, rate limits, or other platform restrictions</li>
                <li>Using the Service to conduct denial-of-service attacks</li>
                <li>Sharing account credentials or API keys with unauthorized parties</li>
                <li>Reselling the Service without written authorization</li>
                <li>Testing email deliverability by sending to spam traps or honey pots</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">6. Compliance with Laws</h2>
              <p>You must comply with all applicable laws and regulations, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>CAN-SPAM Act</strong> (United States)</li>
                <li><strong>GDPR</strong> (European Union)</li>
                <li><strong>CASL</strong> (Canada)</li>
                <li><strong>IT Act, 2000</strong> (India)</li>
                <li><strong>PECR</strong> (United Kingdom)</li>
                <li>Any other applicable local, national, or international email and data protection regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">7. Monitoring and Enforcement</h2>
              <p>
                We actively monitor our platform to ensure compliance with this policy. Our monitoring includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Automated scanning for spam patterns and prohibited content</li>
                <li>Monitoring bounce rates, complaint rates, and sending patterns</li>
                <li>Reviewing reports from email service providers and anti-spam organizations</li>
                <li>Investigating user reports and complaints</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">8. Consequences of Violation</h2>
              <p>
                Violations of this policy may result in one or more of the following actions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Warning:</strong> A written notice to correct the violation</li>
                <li><strong>Rate Limiting:</strong> Temporary reduction in sending limits</li>
                <li><strong>Suspension:</strong> Temporary suspension of sending privileges</li>
                <li><strong>Termination:</strong> Permanent termination of your account</li>
                <li><strong>Legal Action:</strong> Pursuit of legal remedies for damages caused</li>
              </ul>
              <p className="mt-4">
                The severity of the action depends on the nature and extent of the violation. Severe violations, such as sending malware or phishing emails, will result in immediate termination without prior warning.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">9. Reporting Violations</h2>
              <p>
                If you believe someone is using Mailblew in violation of this policy, please report it to us:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> <a href="mailto:abuse@mailblew.com" className="text-electric-cobalt hover:underline">abuse@mailblew.com</a></li>
                <li><strong>Phone:</strong> +91 8898 424444</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">10. Contact Us</h2>
              <p>
                If you have questions about this Acceptable Use Policy, please contact us:
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
