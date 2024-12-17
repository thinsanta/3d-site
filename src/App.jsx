import './App.css'
import About from './pages/About'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { Canvas } from '@react-three/fiber'
import Testimonials from './pages/Testimonials'

function App() {

  return (
    <div className='bg-[#222121] min-h-screen text-white'>
      <Navbar />
      <Home />
      <div id='projects' className='h-[240vh]'>
        <div className='text-4xl mx-auto w-fit'>
          Some of my work
        </div>
        <div className='h-full'>
          <Canvas className='canvas' camera={{ fov: 35 }}>
            <Projects />
          </Canvas>
        </div>
      </div>
      <About />
      <Testimonials />
    </div>
  )
}

export default App
