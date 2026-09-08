import { useScrollTheme, type ThemeStop } from './hooks/useScrollTheme'
import CustomCursor from './components/CustomCursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const DARK = '#1e1e1e'
const PAPER = '#ffffff'
const CRIMSON = '#bc0c00'

const STOPS: ThemeStop[] = [
  { bg: DARK, fg: PAPER, accent: CRIMSON }, // hero
  { bg: PAPER, fg: CRIMSON, accent: DARK }, // services
  { bg: CRIMSON, fg: PAPER, accent: DARK }, // work
  { bg: DARK, fg: PAPER, accent: CRIMSON }, // about
  { bg: PAPER, fg: CRIMSON, accent: DARK }, // contact
  { bg: DARK, fg: PAPER, accent: CRIMSON }, // footer
]

function App() {
  const { bg, fg, registerSection } = useScrollTheme(STOPS)

  return (
    <div className="font-body">
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: bg, transition: 'background-color 80ms linear' }}
      />

      <CustomCursor color={fg} />

      <Nav fg={fg} />

      <main>
        <Hero sectionRef={registerSection(0)} />
        <Services sectionRef={registerSection(1)} />
        <Portfolio sectionRef={registerSection(2)} />
        <About sectionRef={registerSection(3)} />
        <Contact sectionRef={registerSection(4)} />
      </main>

      <Footer sectionRef={registerSection(5)} />
    </div>
  )
}

export default App
