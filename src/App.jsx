import './App.css'
import About from './pages/About'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { Canvas } from '@react-three/fiber'

function App() {

  return (
    <div className='bg-[#222121] min-h-screen text-white'>
          <Navbar />
          <Home />
          <div className='h-[200vh]'>

          <Canvas camera={{ fov: 35 }}>
            
            <Projects />
          </Canvas>
          </div>
          <About />
          
    </div>
  )
}

export default App
