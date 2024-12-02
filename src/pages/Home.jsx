import { Canvas } from "@react-three/fiber"
import WaveScene from "../components/WaveScene"


const Home = () => {


    return (
        <div className="min-h-screen">
            <h1>HI There, I am Fatlum</h1>

            <Canvas>
                <WaveScene />
            </Canvas>
        </div>
    )
}

export default Home