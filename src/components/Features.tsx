'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  BarChart3,
  Zap,
  Layout,
  Webhook,
  Code2,
} from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Email API & SMTP',
    description: 'RESTful API and SMTP relay for seamless integration with any application or platform.',
    color: 'bg-blue-500',
  },
  {
    icon: Mail,
    title: 'Marketing Campaigns',
    description: 'Create and send beautiful marketing emails with advanced segmentation and personalization.',
    color: 'bg-purple-500',
  },
  {
    icon: Zap,
    title: 'Transactional Emails',
    description: 'Reliable delivery for password resets, order confirmations, and other critical emails.',
    color: 'bg-yellow-500',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track opens, clicks, bounces, and more with detailed real-time analytics and reports.',
    color: 'bg-green-500',
  },
  {
    icon: Layout,
    title: 'Template Editor',
    description: 'Drag-and-drop editor with responsive templates that look great on any device.',
    color: 'bg-pink-500',
  },
  {
    icon: Webhook,
    title: 'Webhooks & Integrations',
    description: 'Real-time webhooks and native integrations with your favorite tools and platforms.',
    color: 'bg-indigo-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Features() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-electric-cobalt/10 text-electric-cobalt rounded-full text-sm font-medium mb-4"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-deep-navy mb-4"
          >
            Everything you need to send better emails
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-text"
          >
            From transactional emails to marketing campaigns, Mailblew provides
            all the tools you need in one powerful platform.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-electric-cobalt/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-deep-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-text">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
