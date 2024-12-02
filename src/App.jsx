import './App.css'
import { Canvas } from '@react-three/fiber'
import TestGeometry from './components/TestGeometry'
import Home from './pages/Home'
import { Suspense } from 'react'

function App() {

  return (
    <div className='bg-[#070707] min-h-screen text-white'>
          <Home />
    </div>
  )
}

export default App
