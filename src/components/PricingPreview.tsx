'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Infinity, Mail, Megaphone } from 'lucide-react'
import Button from './ui/Button'

const transactionalFeatures = [
  'Send & receive emails',
  'Email API & SMTP relay',
  'Real-time analytics',
  'Webhooks & integrations',
  'Essential support included',
]

const marketingFeatures = [
  'Contact management',
  'Email campaigns',
  'Automation workflows',
  'A/B testing',
  'Advanced segmentation',
]

export default function PricingPreview() {
  const [activeTab, setActiveTab] = useState<'transactional' | 'marketing'>('transactional')

  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-electric-cobalt to-blue-700 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, straightforward pricing
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Choose transactional for API-driven emails or marketing for campaigns. Both use the same simple credit system.
              </p>
            </motion.div>

            {/* Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur rounded-xl p-1.5">
                <button
                  onClick={() => setActiveTab('transactional')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === 'transactional'
                      ? 'bg-white text-electric-cobalt shadow-md'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  Transactional
                </button>
                <button
                  onClick={() => setActiveTab('marketing')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === 'marketing'
                      ? 'bg-white text-electric-cobalt shadow-md'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Megaphone className="w-4 h-4" />
                  Marketing
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-center mb-5">
                  <span className="text-sm font-medium text-electric-cobalt">
                    {activeTab === 'transactional' ? 'Email Credits' : 'Marketing Suite'}
                  </span>
                  <div className="flex items-baseline justify-center gap-1 mt-2">
                    {activeTab === 'transactional' ? (
                      <>
                        <span className="text-4xl font-bold text-deep-navy">$2.50</span>
                        <span className="text-slate-text text-sm">/10,000 emails</span>
                      </>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-deep-navy">Free</span>
                        <span className="text-slate-text text-sm">to start</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-slate-text mt-1">
                    {activeTab === 'transactional' ? 'sent or received' : '250 contacts included'}
                  </p>
                </div>

                {activeTab === 'transactional' && (
                  <div className="flex items-center justify-center gap-2 mb-5 py-2.5 bg-green-50 rounded-lg">
                    <Infinity className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium text-sm">Credits never expire</span>
                  </div>
                )}

                {activeTab === 'marketing' && (
                  <div className="flex items-center justify-center gap-2 mb-5 py-2.5 bg-blue-50 rounded-lg">
                    <span className="text-electric-cobalt font-medium text-sm">Plans from $5/month</span>
                  </div>
                )}

                <div className="space-y-2.5 mb-6">
                  {(activeTab === 'transactional' ? transactionalFeatures : marketingFeatures).map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-green-600" />
                      </div>
                      <span className="text-slate-text text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button href={activeTab === 'marketing' ? '/pricing?tab=marketing' : '/pricing'} className="w-full">
                  View Pricing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>

              {/* Highlights Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 flex flex-col justify-center"
              >
                <h3 className="text-xl font-bold text-white mb-6">Why Mailblew?</h3>
                <div className="space-y-4">
                  {[
                    { title: 'No expiration', desc: 'Credits never expire, use them anytime' },
                    { title: 'Simple pricing', desc: 'Same rate for sending or receiving' },
                    { title: 'Free to start', desc: '1,000 free credits + 250 marketing contacts' },
                    { title: 'Scale as you grow', desc: 'Upgrade plans anytime, no commitments' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{item.title}</p>
                        <p className="text-blue-200 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  href="/coming-soon"
                  variant="secondary"
                  className="mt-6 !bg-white !text-electric-cobalt hover:!bg-gray-100"
                >
                  Get Started Free
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
