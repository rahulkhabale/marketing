import Link from 'next/link'
import { Mail, Twitter, Github, Linkedin } from 'lucide-react'

const footerLinks = {
  Product: [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'API Documentation', href: '/coming-soon' },
    { name: 'SMTP Relay', href: '/coming-soon' },
    { name: 'Email Templates', href: '/coming-soon' },
  ],
  Company: [
    { name: 'About Us', href: '/coming-soon' },
    { name: 'Blog', href: '/coming-soon' },
    { name: 'Careers', href: '/coming-soon' },
    { name: 'Contact', href: '/contact' },
  ],
  Resources: [
    { name: 'Documentation', href: '/coming-soon' },
    { name: 'API Reference', href: '/coming-soon' },
    { name: 'SDKs & Libraries', href: '/coming-soon' },
    { name: 'Status Page', href: '/coming-soon' },
    { name: 'Support', href: '/coming-soon' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Acceptable Use', href: '/acceptable-use' },
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Security', href: '/security' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '/coming-soon' },
  { name: 'GitHub', icon: Github, href: '/coming-soon' },
  { name: 'LinkedIn', icon: Linkedin, href: '/coming-soon' },
]

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="container-custom py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-electric-cobalt rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Mailblew</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Transactional and marketing emails with 99.9% deliverability. Trusted by developers worldwide.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-electric-cobalt transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Mailblew. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              All Systems Operational
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium">
              GDPR Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
