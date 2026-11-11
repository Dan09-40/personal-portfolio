import { Mail, Phone, MapPin, Send, GitBranch, CheckCircle2, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'danielsebe1992@gmail.com',
    href: 'mailto:danielsebe1992@gmail.com',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '0990 531 448',
    href: 'tel:+2510990531448',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'Dan09-40',
    href: 'https://github.com/Dan09-40',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Addis Ababa, Ethiopia',
    href: '#',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  // Direct 100% guaranteed delivery via Gmail web composer
  const handleSendViaGmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    const subject = encodeURIComponent(`Portfolio Message from ${form.name}`)
    const body = encodeURIComponent(
      `Hello Daniel,\n\n${form.message}\n\n---\nFrom: ${form.name}\nReply-To: ${form.email}`
    )

    // Opens Gmail web composer in a new tab with everything filled in!
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=danielsebe1992@gmail.com&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')

    setSent(true)
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  // Fallback for native mail client (Outlook / Apple Mail)
  const handleSendViaMailApp = () => {
    const subject = encodeURIComponent(`Portfolio Message from ${form.name || 'Visitor'}`)
    const body = encodeURIComponent(
      `Hello Daniel,\n\n${form.message || '(Write your message here)'}\n\n---\nFrom: ${
        form.name || 'Visitor'
      }\nReply-To: ${form.email || 'Email'}`
    )
    window.location.href = `mailto:danielsebe1992@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#0d1527]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-3 block">
            Let's Talk
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to discuss new opportunities? Reach out directly — I'd love
            to hear from you.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="flex flex-wrap justify-center gap-4 mt-14 mb-16">
          {contactCards.map(card => {
            const Icon = card.icon
            return (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className={`flex flex-col items-center gap-3 bg-[#111827] border ${card.border} rounded-2xl p-6 w-44 card-hover text-center group`}
              >
                <div
                  className={`w-14 h-14 ${card.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon size={24} className={card.color} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{card.label}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-tight break-all">{card.value}</p>
                </div>
              </a>
            )
          })}
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-bold text-xl">Send a Message</h3>
              <span className="text-xs text-blue-400 bg-blue-400/10 px-2.5 py-1 rounded-full border border-blue-400/20">
                To: danielsebe1992@gmail.com
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Fill out your details below and click send — it will open Gmail with your message ready to
              deliver immediately.
            </p>

            {/* Success notification */}
            {sent && (
              <div className="mb-6 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-4 py-3.5 text-sm flex items-start gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5 text-green-400" />
                <div>
                  <p className="font-semibold text-white">Gmail composer opened!</p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Your message is prepared and ready to send directly to danielsebe1992@gmail.com.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSendViaGmail} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full bg-[#0a0f1e] border border-[#1f2937] text-white rounded-xl px-4 py-3 text-sm placeholder-gray-700 focus:outline-none focus:border-blue-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1.5 block">Your Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                    placeholder="e.g. john@example.com"
                    className="w-full bg-[#0a0f1e] border border-[#1f2937] text-white rounded-xl px-4 py-3 text-sm placeholder-gray-700 focus:outline-none focus:border-blue-500/60 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-1.5 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                  rows={5}
                  placeholder="Describe your project, timeline, or inquiry..."
                  className="w-full bg-[#0a0f1e] border border-[#1f2937] text-white rounded-xl px-4 py-3 text-sm placeholder-gray-700 focus:outline-none focus:border-blue-500/60 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-600/30"
                >
                  <Send size={16} /> Send via Gmail
                </button>

                <button
                  type="button"
                  onClick={handleSendViaMailApp}
                  title="Open in Outlook / Apple Mail / default app"
                  className="flex items-center justify-center gap-2 border border-[#2d3748] hover:border-blue-500/50 text-gray-400 hover:text-white px-5 py-3.5 rounded-full transition-all duration-200 text-sm hover:bg-blue-500/5"
                >
                  <ExternalLink size={15} /> Other Mail Client
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-[#1f2937]">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()}{' '}
            <span className="gradient-text font-semibold">Daniel Asebe</span>. Built with React & Tailwind CSS.
          </p>
          <p className="text-gray-700 text-xs mt-2">
            <a href="mailto:danielsebe1992@gmail.com" className="hover:text-gray-500 transition-colors">
              danielsebe1992@gmail.com
            </a>
            {' · '}
            <a
              href="https://github.com/Dan09-40"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              github.com/Dan09-40
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
