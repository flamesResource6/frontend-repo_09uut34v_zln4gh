import { motion } from 'framer-motion'

function ParticleField() {
  // CSS-based animated particles for performance
  const particles = Array.from({ length: 60 })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => (
        <span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-cyan-300/70 blur-[0.5px]"
          style={{
            left: `${(i * 137.5) % 100}%`,
            top: `${(i * 97.3) % 100}%`,
            animation: `floatY ${6 + (i % 5)}s ease-in-out ${(i % 5) * 0.3}s infinite alternate`,
            boxShadow: '0 0 12px rgba(34,211,238,0.8)'
          }}
        />
      ))}
      <style>{`
        @keyframes floatY {
          from { transform: translateY(-12px); opacity: 0.7 }
          to { transform: translateY(12px); opacity: 1 }
        }
      `}</style>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_20%_80%,rgba(99,102,241,0.15),transparent_55%)]" />
      <ParticleField />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-semibold text-white sm:text-4xl"
      >
        Let’s Build Something Exceptional
      </motion.h2>

      <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
        <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur-md focus:border-cyan-300/40" placeholder="Your name" />
        <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur-md focus:border-cyan-300/40" placeholder="Email" />
        <input className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur-md focus:border-cyan-300/40" placeholder="Subject" />
        <textarea rows={5} className="sm:col-span-2 resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur-md focus:border-cyan-300/40" placeholder="Tell me about your project..." />
        <button className="sm:col-span-2 inline-flex items-center justify-center rounded-xl border border-white/10 bg-gradient-to-r from-indigo-600/60 to-cyan-500/60 px-6 py-3 text-sm text-white backdrop-blur-md transition hover:from-indigo-500/70 hover:to-cyan-400/70">
          Send Message
        </button>
      </div>

      <div className="mt-6 text-center text-sm text-white/60">
        Or email me at <a href="mailto:hello@manas.dev" className="text-cyan-300 hover:underline">hello@manas.dev</a>
      </div>
    </section>
  )
}
