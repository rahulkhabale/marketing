'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Check, HelpCircle, ArrowRight, Mail, Infinity, Clock, Megaphone } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/ui/Button'

const supportTiers = [
  {
    name: 'Essential',
    description: 'Basic support for getting started',
    price: 'Free',
    period: '',
    sla: '48 hours',
    popular: false,
    features: [
      'Email support 24/7',
      'Live chat support',
      'Community forums',
      'Documentation access',
      '48-hour response SLA',
    ],
  },
  {
    name: 'Priority',
    description: 'Faster support with more channels',
    price: '$10',
    period: '/month',
    sla: '12 hours',
    popular: true,
    features: [
      'Everything in Essential',
      'Phone support',
      '12-hour response SLA',
    ],
  },
  {
    name: 'Dedicated',
    description: 'Personal support for your team',
    price: '$40',
    period: '/month',
    sla: '4 hours',
    popular: false,
    features: [
      'Everything in Priority',
      'Dedicated Account Manager',
      'Priority queue',
      '4-hour response SLA',
    ],
  },
  {
    name: 'Enterprise',
    description: 'White-glove support for critical needs',
    price: '$100',
    period: '/month',
    sla: '1 hour',
    popular: false,
    features: [
      'Everything in Dedicated',
      '24/7 Priority Support',
      'Dedicated Engineer',
      'Custom SLA + Onboarding',
      '1-hour response SLA',
    ],
  },
]

// Check if plan limit is exceeded
const isPlanExceeded = (planId: string, contacts: number): boolean => {
  if (planId === 'starter') return contacts > 250
  if (planId === 'growth') return contacts > 50000
  if (planId === 'scale') return contacts > 200000
  return false // Enterprise is never exceeded
}

// Calculate marketing price based on contact count
const getMarketingPriceForContacts = (planId: string, contacts: number): number => {
  // Starter: only 250 contacts, free (show $0 even when exceeded)
  if (planId === 'starter') {
    return 0
  }

  // Growth: up to 50,000
  if (planId === 'growth') {
    // If exceeded, show max price
    if (contacts > 50000) return 149
    if (contacts <= 500) return 5
    if (contacts <= 1000) return 9
    if (contacts <= 1500) return 12
    if (contacts <= 2000) return 15
    if (contacts <= 3000) return 19
    if (contacts <= 5000) return 29
    if (contacts <= 7500) return 39
    if (contacts <= 10000) return 49
    if (contacts <= 15000) return 69
    if (contacts <= 20000) return 89
    if (contacts <= 25000) return 99
    return 149
  }

  // Scale: up to 200,000
  if (planId === 'scale') {
    // If exceeded, show max price
    if (contacts > 200000) return 899
    if (contacts <= 500) return 12
    if (contacts <= 1000) return 19
    if (contacts <= 1500) return 25
    if (contacts <= 2000) return 29
    if (contacts <= 3000) return 39
    if (contacts <= 5000) return 59
    if (contacts <= 7500) return 79
    if (contacts <= 10000) return 99
    if (contacts <= 15000) return 139
    if (contacts <= 20000) return 169
    if (contacts <= 25000) return 199
    if (contacts <= 50000) return 299
    if (contacts <= 75000) return 399
    if (contacts <= 100000) return 499
    if (contacts <= 150000) return 699
    return 899
  }

  // Enterprise: unlimited
  if (planId === 'enterprise') {
    if (contacts <= 5000) return 149
    if (contacts <= 7500) return 179
    if (contacts <= 10000) return 199
    if (contacts <= 15000) return 279
    if (contacts <= 20000) return 349
    if (contacts <= 25000) return 399
    if (contacts <= 50000) return 599
    if (contacts <= 75000) return 799
    if (contacts <= 100000) return 999
    if (contacts <= 150000) return 1299
    if (contacts <= 200000) return 1599
    return -1 // -1 means "Contact Sales"
  }

  return 0
}

const marketingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Get started with email marketing',
    popular: false,
    features: [
      '250 contacts',
      '5 templates',
      'Basic segmentation',
      'API access',
      'Custom branding',
      'Webhooks',
      '1 team seat',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'Scale your marketing efforts',
    popular: true,
    features: [
      'Up to 50,000 contacts',
      '50 templates',
      'Basic automation',
      'Subject line A/B testing',
      'Standard segmentation',
      'Standard analytics',
      '3 team seats',
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'Advanced features for growing teams',
    popular: false,
    features: [
      'Up to 200,000 contacts',
      'Unlimited templates',
      'Advanced automation',
      'Full A/B testing',
      'Advanced segmentation',
      'Advanced analytics',
      '10 team seats',
      'Dedicated IP (add-on)',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large-scale operations',
    popular: false,
    features: [
      'Unlimited contacts',
      'Unlimited templates',
      'Advanced automation',
      'Full A/B testing',
      'Advanced segmentation',
      'Custom reports',
      'Unlimited team seats',
      'Dedicated IP included',
    ],
  },
]

// All marketing features available across all plans
const allMarketingFeatures = [
  'Unlimited emails*',
  'API access',
  'Custom branding',
  'Webhooks',
]

const includedFeatures = [
  'Email API & SMTP relay',
  'Send & receive emails',
  'Real-time analytics',
  'Email templates',
  'Webhooks',
  'DKIM & SPF authentication',
  'Detailed delivery logs',
  'Up to 5 sending domains',
  'Essential support (free)',
  '99.9% deliverability SLA',
]

const faqs = [
  {
    question: 'Do email credits expire?',
    answer: 'No, your email credits never expire. Buy once, use whenever you need them. There is no validity limit on purchased credits.',
  },
  {
    question: 'What counts as an email credit?',
    answer: 'Each email sent or received uses one credit. For sending, each recipient counts as one credit. For example, sending to 10 recipients uses 10 credits. Receiving an inbound email also uses 1 credit.',
  },
  {
    question: 'Can I buy more credits anytime?',
    answer: 'Yes, you can purchase additional credits at any time. Credits are added to your account instantly and stack with existing credits.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and can arrange invoicing for large volume purchases.',
  },
  {
    question: 'Are add-ons required?',
    answer: 'No, add-ons are completely optional. The base email credits include all essential features for sending transactional emails plus free Essential support.',
  },
  {
    question: 'Can I upgrade or downgrade support anytime?',
    answer: 'Yes, support subscriptions are month-to-month with no long-term commitment. You can upgrade, downgrade, or cancel anytime.',
  },
  {
    question: 'Can I use credits for inbound emails?',
    answer: 'Yes! Credits work for both sending and receiving. Inbound emails use the same credits at the same rate - $2.50 per 10,000 emails.',
  },
]

export default function PricingPage() {
  const searchParams = useSearchParams()
  const [emailCount, setEmailCount] = useState(100000)
  const [selectedContacts, setSelectedContacts] = useState(250)
  const [isAnnual, setIsAnnual] = useState(false)
  const [pricingType, setPricingType] = useState<'transactional' | 'marketing'>('transactional')

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab === 'marketing') {
      setPricingType('marketing')
    }
  }, [searchParams])

  const calculatePrice = (count: number) => {
    return ((count / 10000) * 2.5).toFixed(2)
  }

  const getMarketingPrice = (planId: string, contacts: number) => {
    const price = getMarketingPriceForContacts(planId, contacts)
    if (price === -1) return 'custom' // Contact Sales
    if (isAnnual && price > 0) {
      return Math.round(price * 0.75).toString() // 25% off
    }
    return price.toString()
  }

  const checkPlanExceeded = (planId: string) => {
    return isPlanExceeded(planId, selectedContacts)
  }

  const formatContactCount = (count: number) => {
    return count.toLocaleString()
  }

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-electric-cobalt/10 text-electric-cobalt rounded-full text-sm font-medium mb-4">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-navy mb-6">
              Simple, straightforward pricing
            </h1>
            <p className="text-lg md:text-xl text-slate-text mb-8">
              {pricingType === 'transactional'
                ? 'Buy email credits once, use them forever. No monthly fees, no expiration.'
                : 'Powerful marketing tools to grow your audience. Choose a plan based on your contacts.'}
            </p>

            {/* Transactional | Marketing Toggle */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <button
                onClick={() => setPricingType('transactional')}
                className={`flex items-start gap-4 p-5 rounded-xl text-left transition-all border-2 ${
                  pricingType === 'transactional'
                    ? 'bg-white border-electric-cobalt shadow-lg'
                    : 'bg-gray-50 border-transparent hover:border-gray-200'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  pricingType === 'transactional' ? 'bg-electric-cobalt' : 'bg-gray-200'
                }`}>
                  <Mail className={`w-5 h-5 ${pricingType === 'transactional' ? 'text-white' : 'text-slate-text'}`} />
                </div>
                <div>
                  <h3 className={`font-semibold ${pricingType === 'transactional' ? 'text-deep-navy' : 'text-slate-text'}`}>
                    Transactional
                  </h3>
                  <p className="text-sm text-slate-text mt-0.5">
                    API & SMTP for notifications, receipts, and alerts.
                  </p>
                </div>
              </button>
              <button
                onClick={() => setPricingType('marketing')}
                className={`flex items-start gap-4 p-5 rounded-xl text-left transition-all border-2 ${
                  pricingType === 'marketing'
                    ? 'bg-white border-electric-cobalt shadow-lg'
                    : 'bg-gray-50 border-transparent hover:border-gray-200'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  pricingType === 'marketing' ? 'bg-electric-cobalt' : 'bg-gray-200'
                }`}>
                  <Megaphone className={`w-5 h-5 ${pricingType === 'marketing' ? 'text-white' : 'text-slate-text'}`} />
                </div>
                <div>
                  <h3 className={`font-semibold ${pricingType === 'marketing' ? 'text-deep-navy' : 'text-slate-text'}`}>
                    Marketing
                  </h3>
                  <p className="text-sm text-slate-text mt-0.5">
                    Campaigns, automation, and audience growth.
                  </p>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Card - Transactional */}
      {pricingType === 'transactional' && (
      <section className="pb-16 lg:pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-electric-cobalt p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Mail className="w-8 h-8 text-white" />
                  <h2 className="text-2xl font-bold text-white">Email Credits</h2>
                </div>
                <p className="text-blue-100">
                  Credits never expire. Use for sending or receiving.
                </p>
              </div>

              {/* Calculator */}
              <div className="p-8">
                <h3 className="text-lg font-semibold text-deep-navy mb-6 text-center">
                  Calculate your cost
                </h3>

                {/* Slider */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-slate-text">Number of emails (sent or received)</span>
                    <span className="text-2xl font-bold text-deep-navy">
                      {emailCount.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={emailCount}
                    onChange={(e) => setEmailCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-electric-cobalt"
                  />
                  <div className="flex justify-between text-xs text-slate-text mt-2">
                    <span>10K</span>
                    <span>100K</span>
                    <span>200K</span>
                    <span>300K</span>
                    <span>400K</span>
                    <span>500K</span>
                    <span>600K</span>
                    <span>700K</span>
                    <span>800K</span>
                    <span>900K</span>
                    <span>1M</span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <p className="text-sm text-slate-text">Total cost</p>
                      <p className="text-4xl font-bold text-deep-navy">
                        ${calculatePrice(emailCount)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Infinity className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600 font-medium">Credits never expire</span>
                      </div>
                    </div>
                    <Button href="/coming-soon" size="lg">
                      Buy Credits
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Simple Pricing Box */}
                <div className="bg-electric-cobalt/5 border border-electric-cobalt/20 rounded-xl p-6 mb-8 text-center">
                  <p className="text-lg text-deep-navy mb-2">
                    <span className="font-bold text-3xl text-electric-cobalt">$2.50</span>
                    <span className="text-slate-text"> per 10,000 emails</span>
                  </p>
                  <p className="text-sm text-slate-text">
                    Same price for sending or receiving. No complicated tiers.
                  </p>
                </div>

                {/* Included Features */}
                <div>
                  <h3 className="text-lg font-semibold text-deep-navy mb-4">
                    Included with every purchase
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {includedFeatures.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      )}

      {/* Marketing Suite Section */}
      {pricingType === 'marketing' && (
      <section className="pb-16 lg:pb-24">
        <div className="container-custom">
          {/* Contact Slider */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-deep-navy">Select your contacts</h3>
                  <p className="text-sm text-slate-text">Slide to see pricing for different contact levels</p>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      !isAnnual ? 'bg-white shadow text-deep-navy' : 'text-slate-text'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      isAnnual ? 'bg-white shadow text-deep-navy' : 'text-slate-text'
                    }`}
                  >
                    Annual
                    <span className="ml-1 text-xs text-green-600 font-semibold">-25%</span>
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-text">Number of contacts</span>
                  <span className="text-2xl font-bold text-electric-cobalt">
                    {formatContactCount(selectedContacts)}
                  </span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="250000"
                  step="250"
                  value={selectedContacts}
                  onChange={(e) => setSelectedContacts(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-electric-cobalt"
                />
                <div className="relative w-full h-6 mt-2">
                  <span className="absolute text-xs text-slate-text" style={{ left: '0%' }}>250</span>
                  <span className="absolute text-xs text-slate-text" style={{ left: '20%', transform: 'translateX(-50%)' }}>50,000</span>
                  <span className="absolute text-xs text-slate-text" style={{ left: '40%', transform: 'translateX(-50%)' }}>100,000</span>
                  <span className="absolute text-xs text-slate-text" style={{ left: '60%', transform: 'translateX(-50%)' }}>150,000</span>
                  <span className="absolute text-xs text-slate-text" style={{ left: '80%', transform: 'translateX(-50%)' }}>200,000</span>
                  <span className="absolute text-xs text-slate-text" style={{ right: '0%' }}>250,000+</span>
                </div>
              </div>

              {/* All plans include */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                {allMarketingFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-slate-text">{feature}</span>
                  </div>
                ))}
                <span className="text-xs text-slate-text">*Uses email credits</span>
              </div>
            </div>
          </div>

          {/* Marketing Plans Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
            {marketingPlans.map((plan, index) => {
              const price = getMarketingPrice(plan.id, selectedContacts)
              const isExceeded = checkPlanExceeded(plan.id)

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl p-6 border-2 transition-all flex flex-col h-full ${
                    isExceeded
                      ? 'border-gray-100 opacity-50 grayscale'
                      : plan.popular
                      ? 'border-electric-cobalt shadow-lg'
                      : 'border-gray-200 hover:border-electric-cobalt/30'
                  }`}
                >
                  {plan.popular && !isExceeded && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 bg-electric-cobalt text-white text-xs font-semibold rounded-full">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-4">
                    <h3 className={`text-xl font-semibold mb-1 ${isExceeded ? 'text-gray-400' : 'text-deep-navy'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${isExceeded ? 'text-gray-400' : 'text-slate-text'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center mb-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-3xl font-bold ${isExceeded ? 'text-gray-400' : 'text-deep-navy'}`}>
                        {price === '0' ? 'Free' : price === 'custom' ? 'Custom' : `$${price}`}
                      </span>
                      {price !== '0' && price !== 'custom' && (
                        <span className={isExceeded ? 'text-gray-400' : 'text-slate-text'}>/{isAnnual ? 'mo' : 'month'}</span>
                      )}
                    </div>
                    {isAnnual && price !== '0' && price !== 'custom' && !isExceeded && (
                      <p className="text-xs text-green-600 mt-1">
                        Billed annually (25% off)
                      </p>
                    )}
                    {isExceeded && (
                      <p className="text-xs text-gray-400 mt-1">
                        Limit exceeded
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isExceeded ? 'text-gray-300' : 'text-green-500'}`} />
                        <span className={`text-sm ${isExceeded ? 'text-gray-400' : 'text-slate-text'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={price === 'custom' ? '/contact' : '/coming-soon'}
                    variant={plan.popular && !isExceeded ? 'primary' : 'outline'}
                    className={`w-full mt-6 ${isExceeded ? 'opacity-50 pointer-events-none' : ''}`}
                  >
                    {price === '0' ? 'Start Free' : price === 'custom' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      )}

      {/* Support Tiers Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-electric-cobalt/10 text-electric-cobalt rounded-full text-sm font-medium mb-4">
              Support Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Choose your support level
            </h2>
            <p className="text-lg text-slate-text max-w-2xl mx-auto">
              Every account includes Essential support for free. Upgrade for faster response times and dedicated help.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
            {supportTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-6 border-2 transition-all flex flex-col h-full ${
                  tier.popular
                    ? 'border-electric-cobalt shadow-lg'
                    : 'border-gray-200 hover:border-electric-cobalt/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-electric-cobalt text-white text-xs font-semibold rounded-full">
                      Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-deep-navy mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-slate-text">
                    {tier.description}
                  </p>
                </div>

                <div className="text-center mb-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-deep-navy">{tier.price}</span>
                    <span className="text-slate-text">{tier.period}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mb-4 py-2 bg-blue-50 rounded-lg">
                  <Clock className="w-4 h-4 text-electric-cobalt" />
                  <span className="text-sm text-electric-cobalt font-medium">{tier.sla} response</span>
                </div>

                <ul className="space-y-3 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/coming-soon"
                  variant={tier.popular ? 'primary' : 'outline'}
                  className="w-full mt-6"
                >
                  {tier.price === 'Free' ? 'Included' : 'Upgrade'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-slate-text">
              Have questions? We have answers.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-electric-cobalt flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-deep-navy mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-slate-text">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to start sending?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Get started with 1,000 free credits. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/coming-soon"
                size="lg"
                className="!bg-white !text-electric-cobalt hover:!bg-gray-100"
              >
                Start Free
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
