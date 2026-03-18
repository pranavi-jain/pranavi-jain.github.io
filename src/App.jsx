import StarField from './components/StarField'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Research from './components/Research'
import Projects from './components/Projects'
import ConstellationMap from './components/ConstellationMap'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <StarField />
      <Navbar />
      <div className="content-layer">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Research />
        <Projects />
        <ConstellationMap />
        <Contact />
      </div>
    </>
  )
}
