'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, Mail, BarChart3, Zap } from 'lucide-react'
import Button from './ui/Button'

export default function Hero() {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-electric-cobalt rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-electric-cobalt">
                Built for Developers
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-navy leading-tight mb-6">
              Deliver Emails That{' '}
              <span className="text-electric-cobalt">Actually Arrive</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-text mb-8 max-w-xl">
              Transactional and marketing emails with 99.9% deliverability.
              Powerful APIs, real-time analytics, and expert support.
            </p>

            {/* Feature List */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Email API & SMTP', 'Real-time Analytics', 'GDPR Compliant'].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-slate-text">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/coming-soon" size="lg">
                Start Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View Pricing
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">No credit card required</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-text font-medium">
                    Join our growing community
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-deep-navy p-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-white/60 text-sm ml-4">Mailblew Dashboard</span>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <Mail className="w-6 h-6 text-electric-cobalt mb-2" />
                    <p className="text-2xl font-bold text-deep-navy">1.2M</p>
                    <p className="text-xs text-slate-text">Emails Sent</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <BarChart3 className="w-6 h-6 text-green-500 mb-2" />
                    <p className="text-2xl font-bold text-deep-navy">99.9%</p>
                    <p className="text-xs text-slate-text">Delivered</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <Zap className="w-6 h-6 text-purple-500 mb-2" />
                    <p className="text-2xl font-bold text-deep-navy">42%</p>
                    <p className="text-xs text-slate-text">Open Rate</p>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-gray-50 rounded-lg p-4 h-32 flex items-end gap-2">
                  {[40, 65, 45, 80, 55, 90, 75, 95, 60, 85, 70, 88].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-electric-cobalt/80 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Card - Email Delivered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="absolute -left-4 bottom-24 bg-white rounded-lg shadow-lg border border-gray-100 p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-deep-navy">Email Delivered</p>
                <p className="text-xs text-slate-text">to john@example.com</p>
              </div>
            </motion.div>

            {/* Floating Card - Analytics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="absolute -right-4 top-32 bg-white rounded-lg shadow-lg border border-gray-100 p-4"
            >
              <p className="text-xs text-slate-text mb-1">Today&apos;s Opens</p>
              <p className="text-2xl font-bold text-deep-navy">12,847</p>
              <span className="text-xs text-green-500 font-medium">+23% from yesterday</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
