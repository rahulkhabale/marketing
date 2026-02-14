'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Server, Eye, Bell, FileCheck, Key, Globe } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const securityFeatures = [
  {
    icon: Lock,
    title: 'Encryption',
    description: 'All data is encrypted in transit using TLS 1.2+ and at rest using AES-256 encryption. API keys and credentials are stored using industry-standard hashing.',
  },
  {
    icon: Server,
    title: 'Infrastructure Security',
    description: 'Our infrastructure is hosted in secure, SOC 2 compliant data centers with redundant systems, automated backups, and multi-region availability.',
  },
  {
    icon: Key,
    title: 'Access Controls',
    description: 'Strict role-based access controls, multi-factor authentication, and API key management ensure only authorized access to your data.',
  },
  {
    icon: Eye,
    title: 'Monitoring',
    description: '24/7 infrastructure monitoring, automated threat detection, and real-time alerting systems protect against unauthorized access and anomalies.',
  },
  {
    icon: Bell,
    title: 'Incident Response',
    description: 'Documented incident response procedures with defined escalation paths. Affected customers are notified within 72 hours of a confirmed breach.',
  },
  {
    icon: FileCheck,
    title: 'Regular Audits',
    description: 'Regular security assessments, vulnerability scanning, and penetration testing to identify and address potential security issues.',
  },
  {
    icon: Shield,
    title: 'DDoS Protection',
    description: 'Multi-layered DDoS protection with automated mitigation to ensure platform availability and protection against volumetric attacks.',
  },
  {
    icon: Globe,
    title: 'Network Security',
    description: 'Firewalls, intrusion detection systems, and network segmentation protect our infrastructure from unauthorized access and threats.',
  },
]

export default function SecurityPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              Security at Mailblew
            </h1>
            <p className="text-lg text-slate-text max-w-2xl mx-auto">
              Protecting your data is our top priority. We implement industry-leading security practices to keep your emails and information safe.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-electric-cobalt/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-electric-cobalt/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-electric-cobalt" />
                </div>
                <h3 className="text-lg font-semibold text-deep-navy mb-2">{feature.title}</h3>
                <p className="text-slate-text text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none text-slate-text space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Email Authentication</h2>
              <p>We support and implement industry-standard email authentication protocols:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>SPF (Sender Policy Framework):</strong> Validates that emails are sent from authorized servers</li>
                <li><strong>DKIM (DomainKeys Identified Mail):</strong> Cryptographically signs emails to verify sender identity and message integrity</li>
                <li><strong>DMARC (Domain-based Message Authentication):</strong> Provides instructions to receiving servers on how to handle authentication failures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Data Protection</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email content is processed for delivery and not stored longer than necessary</li>
                <li>Customer data is logically separated and isolated</li>
                <li>Automated backups with encryption ensure data durability</li>
                <li>Secure deletion procedures when data is no longer needed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Compliance</h2>
              <p>Mailblew is committed to maintaining compliance with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>GDPR:</strong> Full compliance with EU data protection regulations. See our <a href="/gdpr" className="text-electric-cobalt hover:underline">GDPR Compliance</a> page</li>
                <li><strong>CAN-SPAM:</strong> Compliance with US email regulations</li>
                <li><strong>IT Act, 2000:</strong> Compliance with Indian information technology regulations</li>
                <li><strong>ISO 27001:</strong> Information security management practices aligned with ISO 27001</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Responsible Disclosure</h2>
              <p>
                We value the security research community. If you discover a security vulnerability in our platform, please report it responsibly:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> <a href="mailto:security@mailblew.com" className="text-electric-cobalt hover:underline">security@mailblew.com</a></li>
              </ul>
              <p className="mt-4">
                We will acknowledge your report within 48 hours and work with you to understand and address the issue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Contact</h2>
              <p>For security-related inquiries:</p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> <a href="mailto:security@mailblew.com" className="text-electric-cobalt hover:underline">security@mailblew.com</a></li>
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
