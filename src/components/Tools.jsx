import { motion } from 'framer-motion'
import { SiNextdotjs, SiNestjs, SiTypescript, SiPostgresql, SiMongodb, SiDocker, SiKubernetes, SiAwsamplify } from 'react-icons/si'

const tools = [
  { icon: SiNextdotjs, label: 'Next.js' },
  { icon: SiNestjs, label: 'NestJS' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiPostgresql, label: 'PostgreSQL' },
  { icon: SiMongodb, label: 'MongoDB' },
  { icon: SiDocker, label: 'Docker' },
  { icon: SiKubernetes, label: 'Kubernetes' },
  { icon: SiAwsamplify, label: 'AWS' },
]

export default function Tools() {
  return (
    <section id="stack" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-semibold text-white sm:text-4xl"
      >
        Tech Stack & Tools
      </motion.h2>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {tools.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative rounded-2xl border border-cyan-300/20 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            <Icon className="h-8 w-8 text-white" />
            <div className="mt-4 text-sm text-white/90">{label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
