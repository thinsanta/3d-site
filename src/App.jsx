import './App.css'
import { Canvas } from '@react-three/fiber'
import TestGeometry from './components/TestGeometry'

function App() {

  return (
    <Canvas style={{background: "lightgrey"}}>  
      <TestGeometry />
    </Canvas>
  )
}

export default App
