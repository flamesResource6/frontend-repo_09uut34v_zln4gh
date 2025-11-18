import { motion, useMotionValue, useTransform } from 'framer-motion'

const projects = [
  {
    title: 'Realtime Analytics Platform',
    description: 'Event-driven ingestion with Kafka, OLAP queries, dashboard UI.',
    tag: 'Next.js • NestJS • Kafka • ClickHouse',
  },
  {
    title: 'Headless Commerce',
    description: 'Modular services, payments, search, CMS connectors.',
    tag: 'Next.js • NestJS • PostgreSQL',
  },
  {
    title: 'Collaboration Suite',
    description: 'Docs, tasks, and chat with CRDT syncing and presence.',
    tag: 'Tiptap • WebRTC • Redis',
  },
]

function TiltCard({ children }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [0, 1], [8, -8])
  const rotateY = useTransform(x, [0, 1], [-8, 8])

  return (
    <motion.div
      className="group relative h-64 w-[85vw] max-w-md cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:w-96"
      style={{ perspective: 1000 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width
        const py = (e.clientY - rect.top) / rect.height
        x.set(px)
        y.set(py)
      }}
      onMouseLeave={() => {
        x.set(0.5)
        y.set(0.5)
      }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div style={{ rotateX, rotateY }} className="h-full w-full">
        {children}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
        background:
          'radial-gradient(60%_60%_at_30%_10%, rgba(99,102,241,0.25), transparent 60%)',
      }} />
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-semibold text-white sm:text-4xl"
      >
        Featured Projects
      </motion.h2>

      <div className="mt-10 flex w-full snap-x items-stretch gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {projects.map((p, i) => (
          <TiltCard key={i}>
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="text-lg font-medium text-white">{p.title}</div>
                <div className="mt-2 text-sm text-white/70">{p.description}</div>
              </div>
              <div className="mt-4 text-xs text-cyan-300">{p.tag}</div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
