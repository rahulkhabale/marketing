'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'TechCorp', width: 'w-24' },
  { name: 'StartupXYZ', width: 'w-28' },
  { name: 'DigitalCo', width: 'w-24' },
  { name: 'CloudBase', width: 'w-26' },
  { name: 'DataFlow', width: 'w-24' },
  { name: 'AppWorks', width: 'w-28' },
]

export default function SocialProof() {
  return (
    <section className="py-12 lg:py-16 border-y border-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-slate-text mb-8">
            Trusted by developers at companies worldwide
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${logo.width} h-8 bg-gray-200 rounded flex items-center justify-center`}
              >
                <span className="text-gray-500 text-xs font-medium">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
