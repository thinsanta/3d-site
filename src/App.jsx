import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <div className='bg-[#222121] min-h-screen text-white'>
          <Navbar />
          <Home />
          <About />
    </div>
  )
}

export default App
