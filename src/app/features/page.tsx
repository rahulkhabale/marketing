'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  BarChart3,
  Zap,
  Layout,
  Webhook,
  Code2,
  Shield,
  Globe,
  Server,
  Clock,
  Users,
  MousePointer,
  Bell,
  Database,
  Lock,
  Target,
  ArrowRight,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/ui/Button'

const featureCategories = [
  {
    title: 'Email Delivery',
    description: 'Reliable, fast email delivery at scale',
    features: [
      {
        icon: Code2,
        title: 'Email API',
        description: 'RESTful API with comprehensive documentation. Send emails programmatically with just a few lines of code in any language.',
      },
      {
        icon: Mail,
        title: 'SMTP Relay',
        description: 'Standard SMTP integration for seamless migration from existing email providers. No code changes required.',
      },
      {
        icon: Zap,
        title: 'Transactional Emails',
        description: 'Instant delivery for time-sensitive emails like password resets, order confirmations, and verification emails.',
      },
      {
        icon: Clock,
        title: 'Scheduled Sending',
        description: 'Schedule emails to be sent at optimal times based on recipient timezone and engagement patterns.',
      },
    ],
  },
  {
    title: 'Marketing & Campaigns',
    description: 'Engage your audience with powerful marketing tools',
    features: [
      {
        icon: Users,
        title: 'Email Segmentation',
        description: 'Create dynamic segments based on user behavior, demographics, and custom attributes for targeted campaigns.',
      },
      {
        icon: Layout,
        title: 'Template Editor',
        description: 'Drag-and-drop email builder with responsive templates. Create beautiful emails without any coding.',
      },
      {
        icon: Target,
        title: 'A/B Testing',
        description: 'Test different subject lines, content, and send times to optimize your email performance.',
      },
      {
        icon: Bell,
        title: 'Automation',
        description: 'Set up automated email sequences triggered by user actions or time-based rules.',
      },
    ],
  },
  {
    title: 'Analytics & Tracking',
    description: 'Data-driven insights for better email performance',
    features: [
      {
        icon: BarChart3,
        title: 'Real-time Analytics',
        description: 'Monitor opens, clicks, bounces, and delivery rates in real-time with our comprehensive dashboard.',
      },
      {
        icon: MousePointer,
        title: 'Click Tracking',
        description: 'Track every link click with detailed heatmaps showing which content resonates with your audience.',
      },
      {
        icon: Webhook,
        title: 'Webhooks',
        description: 'Receive real-time notifications for email events. Integrate with your systems for automated workflows.',
      },
      {
        icon: Database,
        title: 'Custom Reports',
        description: 'Build custom reports and export data for analysis. Access all metrics via API for integration.',
      },
    ],
  },
  {
    title: 'Security & Compliance',
    description: 'Enterprise-grade security and compliance features',
    features: [
      {
        icon: Shield,
        title: 'DKIM & SPF',
        description: 'Automatic email authentication setup to improve deliverability and protect your sender reputation.',
      },
      {
        icon: Lock,
        title: 'GDPR Compliance',
        description: 'Built-in tools for data management, consent tracking, and compliance with privacy regulations.',
      },
      {
        icon: Server,
        title: 'Dedicated IPs',
        description: 'Get dedicated IP addresses to build and maintain your own sender reputation independently.',
      },
      {
        icon: Globe,
        title: 'Global Infrastructure',
        description: 'Distributed infrastructure across multiple regions for low latency and high availability.',
      },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-electric-cobalt/10 text-electric-cobalt rounded-full text-sm font-medium mb-4">
              Features
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
              Everything you need to send better emails
            </h1>
            <p className="text-lg md:text-xl text-slate-text mb-8">
              From transactional emails to marketing campaigns, Mailblew provides
              all the tools you need in one powerful, developer-friendly platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/coming-soon" size="lg">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className={`py-16 lg:py-24 ${categoryIndex % 2 === 1 ? 'bg-gray-50' : ''}`}
        >
          <div className="container-custom">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-slate-text">
                {category.description}
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {category.features.map((feature, featureIndex) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: featureIndex * 0.1 }}
                  className="bg-white rounded-xl p-8 border border-gray-100 hover:border-electric-cobalt/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-electric-cobalt/10 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-electric-cobalt" />
                  </div>
                  <h3 className="text-xl font-semibold text-deep-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-text leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-deep-navy">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Start sending emails for free. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/coming-soon"
                size="lg"
                className="!bg-white !text-electric-cobalt hover:!bg-gray-100"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
