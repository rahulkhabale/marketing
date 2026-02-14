'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

const codeExamples = {
  curl: `curl -X POST https://api.mailblew.com/v1/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "hello@yourdomain.com",
    "to": "user@example.com",
    "subject": "Welcome to Mailblew!",
    "html": "<h1>Hello World</h1>"
  }'`,

  nodejs: `const mailblew = require('mailblew');

const client = new mailblew.Client('YOUR_API_KEY');

await client.send({
  from: 'hello@yourdomain.com',
  to: 'user@example.com',
  subject: 'Welcome to Mailblew!',
  html: '<h1>Hello World</h1>'
});`,

  python: `import mailblew

client = mailblew.Client('YOUR_API_KEY')

client.send(
    from_email='hello@yourdomain.com',
    to='user@example.com',
    subject='Welcome to Mailblew!',
    html='<h1>Hello World</h1>'
)`,

  php: `<?php
use Mailblew\\Client;

$client = new Client('YOUR_API_KEY');

$client->send([
    'from' => 'hello@yourdomain.com',
    'to' => 'user@example.com',
    'subject' => 'Welcome to Mailblew!',
    'html' => '<h1>Hello World</h1>'
]);`,
}

type Language = keyof typeof codeExamples

const languages: { key: Language; label: string }[] = [
  { key: 'curl', label: 'cURL' },
  { key: 'nodejs', label: 'Node.js' },
  { key: 'python', label: 'Python' },
  { key: 'php', label: 'PHP' },
]

export default function CodeExample() {
  const [activeTab, setActiveTab] = useState<Language>('nodejs')
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-16 lg:py-24 bg-deep-navy">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-electric-cobalt/20 text-electric-cobalt rounded-full text-sm font-medium mb-4">
              Developer Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Send your first email in minutes
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Our simple, intuitive API makes it easy to integrate email into
              your application. Choose your language and start sending.
            </p>

            <div className="space-y-4">
              {[
                'RESTful API with JSON responses',
                'SDKs for all major languages',
                'Comprehensive documentation',
                'Sandbox mode for testing',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-electric-cobalt rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
              {/* Tab Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
                <div className="flex items-center gap-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.key}
                      onClick={() => setActiveTab(lang.key)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === lang.key
                          ? 'bg-electric-cobalt text-white'
                          : 'text-gray-400 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
                <button
                  onClick={copyCode}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-700 transition-all"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Code Content */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                  <code>{codeExamples[activeTab]}</code>
                </pre>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-electric-cobalt/20 rounded-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
