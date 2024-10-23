import './App.css';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className="App">
      <Canvas gl={{antialias: false}} dpr={[1,1.5]}>
        <mesh>
          <boxGeometry/>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
