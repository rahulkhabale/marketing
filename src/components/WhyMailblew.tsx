'use client'

import { motion } from 'framer-motion'
import { Shield, Globe, Server, Headphones } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: '99.9% Deliverability',
    description: 'Industry-leading deliverability rates ensure your emails reach the inbox, not spam.',
    stat: '99.9%',
    statLabel: 'Deliverability',
  },
  {
    icon: Globe,
    title: 'GDPR Compliant',
    description: 'Fully compliant with GDPR, CCPA, and other privacy regulations out of the box.',
    stat: '100%',
    statLabel: 'Compliant',
  },
  {
    icon: Server,
    title: 'Dedicated IPs',
    description: 'Get dedicated IP addresses to build and maintain your sender reputation.',
    stat: '50+',
    statLabel: 'Global IPs',
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    description: 'Our email experts are available around the clock to help you succeed.',
    stat: '24/7',
    statLabel: 'Support',
  },
]

export default function WhyMailblew() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-electric-cobalt/10 text-electric-cobalt rounded-full text-sm font-medium mb-4">
              Why Mailblew
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Built for developers who care about deliverability
            </h2>
            <p className="text-lg text-slate-text mb-8">
              We obsess over deliverability so you don&apos;t have to. Our infrastructure
              is designed to ensure your emails reach the inbox every single time.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-electric-cobalt mb-1">
                    {benefit.stat}
                  </p>
                  <p className="text-sm text-slate-text">{benefit.statLabel}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-electric-cobalt/20 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-electric-cobalt/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-electric-cobalt" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-deep-navy mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-text text-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
