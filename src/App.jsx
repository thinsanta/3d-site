import './App.css'
import About from './pages/About'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {

  return (
    <div className='bg-[#222121] min-h-screen text-white'>
          <Navbar />
          <Home />
          <Projects />
          <About />
          
    </div>
  )
}

export default App
