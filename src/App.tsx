import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import Service from './components/Service'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-paper px-4 pb-4 pt-4">
      <Navbar />
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
