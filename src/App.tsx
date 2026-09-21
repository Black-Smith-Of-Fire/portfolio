// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SelectedWork from './components/MyProjects'
import Service from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import TemporyNav from './components/TemporyNav'
// import './app.css'

export default function App() {
  return (
    <div className="min-h-screen bg-paper px-4 pb-4 pt-4 ">
      {/* <Navbar /> */}
      <TemporyNav/>
      <main>
        <Hero />
        <SelectedWork />
        <Service />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
