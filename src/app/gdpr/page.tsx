import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function GDPRPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            GDPR Compliance
          </h1>
          <p className="text-slate-text mb-12">
            Last updated: February 14, 2026
          </p>

          <div className="prose prose-lg max-w-none text-slate-text space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">1. Our Commitment to GDPR</h2>
              <p>
                Mailblew is committed to complying with the General Data Protection Regulation (GDPR). We process personal data lawfully, fairly, and transparently. This page outlines how we comply with GDPR requirements and how we help our customers maintain their own compliance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">2. Roles and Responsibilities</h2>
              <h3 className="text-xl font-semibold text-deep-navy mb-3">2.1 Mailblew as Data Processor</h3>
              <p>
                When you use Mailblew to send emails to your contacts, we act as a <strong>Data Processor</strong> on your behalf. You, as the customer, are the <strong>Data Controller</strong> and determine the purposes and means of processing personal data.
              </p>

              <h3 className="text-xl font-semibold text-deep-navy mb-3 mt-6">2.2 Mailblew as Data Controller</h3>
              <p>
                For data related to your Mailblew account (your registration information, billing details, etc.), we act as the <strong>Data Controller</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">3. Legal Basis for Processing</h2>
              <p>We process personal data under the following legal bases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contract Performance:</strong> To provide and maintain the Service you have subscribed to</li>
                <li><strong>Legitimate Interest:</strong> To improve our Service, prevent fraud, and ensure platform security</li>
                <li><strong>Consent:</strong> When you have given explicit consent for specific processing activities</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">4. Data Subject Rights</h2>
              <p>Under GDPR, individuals have the following rights regarding their personal data:</p>

              <div className="space-y-4 mt-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-deep-navy">Right of Access</h4>
                  <p className="text-sm mt-1">You can request a copy of all personal data we hold about you.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-deep-navy">Right to Rectification</h4>
                  <p className="text-sm mt-1">You can request correction of any inaccurate or incomplete data.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-deep-navy">Right to Erasure</h4>
                  <p className="text-sm mt-1">You can request deletion of your personal data, subject to legal retention requirements.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-deep-navy">Right to Data Portability</h4>
                  <p className="text-sm mt-1">You can request your data in a structured, commonly used, machine-readable format.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-deep-navy">Right to Restrict Processing</h4>
                  <p className="text-sm mt-1">You can request that we limit how we process your data in certain circumstances.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-deep-navy">Right to Object</h4>
                  <p className="text-sm mt-1">You can object to processing based on legitimate interests or for direct marketing purposes.</p>
                </div>
              </div>

              <p className="mt-4">
                To exercise any of these rights, contact our Data Protection Officer at <a href="mailto:dpo@mailblew.com" className="text-electric-cobalt hover:underline">dpo@mailblew.com</a>. We will respond to your request within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">5. Data Processing Agreement</h2>
              <p>
                We offer a Data Processing Agreement (DPA) to all customers who process personal data of EU residents through our platform. The DPA outlines our obligations as a Data Processor, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processing data only on your documented instructions</li>
                <li>Ensuring confidentiality of personnel who process data</li>
                <li>Implementing appropriate technical and organizational security measures</li>
                <li>Assisting with data subject rights requests</li>
                <li>Notifying you of any data breaches without undue delay</li>
                <li>Deleting or returning data upon termination of the agreement</li>
              </ul>
              <p className="mt-4">
                To request a DPA, contact us at <a href="mailto:dpo@mailblew.com" className="text-electric-cobalt hover:underline">dpo@mailblew.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">6. Data Retention</h2>
              <p>We retain personal data only for as long as necessary:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Data:</strong> Retained for the duration of your account plus 30 days after deletion</li>
                <li><strong>Email Content:</strong> Temporarily stored for delivery, deleted within 30 days</li>
                <li><strong>Email Metadata:</strong> Retained for up to 12 months for analytics and compliance</li>
                <li><strong>Billing Records:</strong> Retained as required by applicable tax and financial regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">7. International Data Transfers</h2>
              <p>
                When personal data is transferred outside the European Economic Area (EEA), we ensure adequate safeguards are in place through:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Data Processing Agreements with all sub-processors</li>
                <li>Ensuring recipient countries provide an adequate level of data protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">8. Data Breach Notification</h2>
              <p>
                In the event of a personal data breach, we will:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Notify affected customers within 72 hours of becoming aware of the breach</li>
                <li>Provide details of the nature of the breach and data affected</li>
                <li>Describe the measures taken to address the breach</li>
                <li>Recommend steps you can take to mitigate potential adverse effects</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">9. Sub-Processors</h2>
              <p>
                We use a limited number of sub-processors to provide our Service. We maintain a list of our sub-processors and will notify customers of any changes. All sub-processors are bound by data processing agreements that ensure GDPR compliance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">10. Data Protection Officer</h2>
              <p>
                For any GDPR-related inquiries or to exercise your data protection rights, contact our Data Protection Officer:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> <a href="mailto:dpo@mailblew.com" className="text-electric-cobalt hover:underline">dpo@mailblew.com</a></li>
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
