'use client'

import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Users,
  Code2,
  Globe,
  FileText,
  Layout,
  Webhook,
  MousePointer,
  Server,
  BarChart3,
  Clock,
  Shield,
  Sparkles,
  Mail,
  Send,
  Bell,
  Database,
  Lock,
  Cpu,
  RefreshCw,
  Target,
  Filter,
  Tags,
  Calendar,
  Inbox,
} from 'lucide-react'

const allFeatures = [
  { icon: LayoutDashboard, name: 'Extensive Dashboard', description: 'Comprehensive overview of all your email metrics' },
  { icon: Users, name: 'Email Segmentation', description: 'Target specific audiences with smart segments' },
  { icon: Code2, name: 'Email API', description: 'RESTful API for programmatic email sending' },
  { icon: Send, name: 'SMTP Relay', description: 'Standard SMTP integration for any platform' },
  { icon: Globe, name: 'Domain Management', description: 'Easy domain verification and authentication' },
  { icon: FileText, name: 'Detailed Logs', description: 'Complete audit trail of all email activity' },
  { icon: Layout, name: 'Template Editor', description: 'Drag-and-drop email template builder' },
  { icon: Webhook, name: 'Webhooks', description: 'Real-time event notifications via webhooks' },
  { icon: MousePointer, name: 'Open & Click Tracking', description: 'Track email opens and link clicks' },
  { icon: Server, name: 'Dedicated IP', description: 'Private IPs for sender reputation control' },
  { icon: BarChart3, name: 'Custom Reports', description: 'Build custom reports and dashboards' },
  { icon: Clock, name: 'Scheduled Sending', description: 'Schedule emails for optimal delivery times' },
  { icon: Shield, name: 'DKIM & SPF', description: 'Automatic email authentication setup' },
  { icon: Sparkles, name: 'Dynamic Content', description: 'Personalize emails with dynamic variables' },
  { icon: Mail, name: 'Bulk Sending', description: 'Send to millions of recipients efficiently' },
  { icon: Bell, name: 'Alert Notifications', description: 'Get notified of important email events' },
  { icon: Database, name: 'Contact Management', description: 'Store and manage your contact lists' },
  { icon: Lock, name: 'GDPR Tools', description: 'Built-in compliance and data management' },
  { icon: Cpu, name: 'API Rate Limiting', description: 'Fair usage with configurable limits' },
  { icon: RefreshCw, name: 'Auto Retry', description: 'Automatic retry for failed deliveries' },
  { icon: Target, name: 'A/B Testing', description: 'Test different email variations' },
  { icon: Filter, name: 'Bounce Handling', description: 'Automatic bounce processing' },
  { icon: Tags, name: 'Email Tags', description: 'Organize emails with custom tags' },
  { icon: Calendar, name: 'Event Tracking', description: 'Track custom email events' },
  { icon: Inbox, name: 'Inbox Preview', description: 'Preview how emails appear in different clients' },
]

export default function FullFeatures() {
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
            Full Feature Set
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-deep-navy mb-4"
          >
            25+ powerful features included
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-text"
          >
            Everything you need to send, track, and optimize your email communications.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {allFeatures.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              className="bg-white rounded-lg p-4 border border-gray-100 hover:border-electric-cobalt/20 hover:shadow-md transition-all duration-300 group"
            >
              <feature.icon className="w-6 h-6 text-electric-cobalt mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-semibold text-deep-navy mb-1">
                {feature.name}
              </h3>
              <p className="text-xs text-slate-text">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
