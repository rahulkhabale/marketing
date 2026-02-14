'use client'

import { motion } from 'framer-motion'
import { Construction, ArrowLeft, Mail } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/ui/Button'

export default function ComingSoonPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 min-h-[60vh] flex items-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-electric-cobalt/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Construction className="w-10 h-10 text-electric-cobalt" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
              Under Development
            </h1>

            <p className="text-lg text-slate-text mb-8">
              We&apos;re working hard to bring you this feature.
              Stay tuned for updates!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/" variant="outline" size="lg">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
              <Button href="/contact" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
