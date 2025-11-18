import { motion } from 'framer-motion'

export default function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#stack', label: 'Stack' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center">
      <nav className="pointer-events-auto mt-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-xl">
        {links.map((l, i) => (
          <motion.a
            key={l.href}
            href={l.href}
            whileHover={{ y: -1 }}
            className="rounded-xl px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            {l.label}
          </motion.a>
        ))}
      </nav>
    </div>
  )
}
