import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Tools from './components/Tools'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#020617] font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Tools />
      <Contact />
      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Manas Mehta — Built with a sci‑fi neo‑glass aesthetic
      </footer>
    </div>
  )
}

export default App
