'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import Button from './ui/Button'

export default function CTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 bg-electric-cobalt/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-electric-cobalt" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-navy mb-6">
            Ready to boost your email deliverability?
          </h2>

          <p className="text-lg text-slate-text mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust Mailblew for their transactional
            and marketing emails. Start sending for free today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/coming-soon" size="lg">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Talk to Sales
            </Button>
          </div>

          <p className="text-sm text-slate-text mt-6">
            No credit card required &bull; Free 1,000 emails/month &bull; Setup in minutes
          </p>
        </motion.div>
      </div>
    </section>
  )
}
