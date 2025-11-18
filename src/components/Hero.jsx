import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const MagneticButton = ({ children, href }) => {
  return (
    <a
      href={href}
      className="relative inline-flex items-center justify-center overflow-hidden rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-300 [box-shadow:0_0_0_1px_rgba(255,255,255,0.1)_inset]"
      style={{
        background:
          'radial-gradient(120% 120% at 50% 0%, rgba(99,102,241,0.3) 0%, rgba(56,189,248,0.25) 45%, rgba(2,6,23,0.6) 100%)',
      }}
      onMouseMove={(e) => {
        const target = e.currentTarget
        const rect = target.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        target.style.setProperty('--x', `${x}px`)
        target.style.setProperty('--y', `${y}px`)
      }}
    >
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 [background:radial-gradient(200px_200px_at_var(--x)_var(--y),rgba(255,255,255,0.15),transparent_40%)] group-hover:opacity-100"></span>
      <span className="relative z-10">{children}</span>
    </a>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Spline 3D cover - full bleed */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Cinematic gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/20 to-[#020617]" />
        <div className="absolute -inset-x-20 inset-y-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(99,102,241,0.25),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.8)]" />
          Available for new projects
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Manas Mehta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-4 text-base text-white/80 sm:text-lg"
        >
          Full-Stack Developer (Next.js + NestJS)
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mx-auto mt-4 max-w-2xl text-balance text-sm text-white/70 sm:text-base"
        >
          “I build scalable systems, modern apps & high-impact digital experiences.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#projects">View Projects</MagneticButton>
          <MagneticButton href="#contact">Let’s Work Together</MagneticButton>
        </motion.div>

        {/* Floating badges */}
        <div className="pointer-events-none relative mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {['Next.js', 'NestJS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Cloud'].map((tag, i) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-md"
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
