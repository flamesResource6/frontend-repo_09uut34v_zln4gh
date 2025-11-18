import { motion } from 'framer-motion'
import { Cpu, Cloud, Database, Boxes, Rocket, Code2, Server, Layers } from 'lucide-react'

const skills = [
  { icon: Cpu, label: 'Next.js' },
  { icon: Server, label: 'NestJS' },
  { icon: Code2, label: 'TypeScript' },
  { icon: Boxes, label: 'Node.js' },
  { icon: Database, label: 'PostgreSQL' },
  { icon: Database, label: 'MongoDB' },
  { icon: Cloud, label: 'Cloud' },
  { icon: Layers, label: 'Microservices' },
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_80%_20%,rgba(56,189,248,0.12),transparent_50%)]" />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-semibold text-white sm:text-4xl"
      >
        Crafting scalable, elegant systems
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mt-4 max-w-2xl text-center text-white/70"
      >
        I blend product thinking, clean code, and cloud-native architectures to deliver resilient, high-performance platforms.
      </motion.p>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
          >
            <div className="absolute inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
              background:
                'radial-gradient(60%_60%_at_30%_0%, rgba(56,189,248,0.2), transparent 60%)',
            }} />
            <Icon className="h-6 w-6 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            <div className="mt-3 text-sm text-white">{label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
