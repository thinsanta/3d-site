import { Canvas } from "@react-three/fiber"
import WaveScene from "../components/WaveScene"
import self_portrait from '../assets/self_portrait.jpg'


const Home = () => {


    return (
        <div className="min-h-screen">
            <div>
                <div className="w-[300px] h-[300px] overflow-hidden rounded-full mx-auto mt-32">

                    <img src={self_portrait} className='w-[400px]'>
                    </img>
                </div>

                <div className="w-[900px] mx-auto mt-8 text-center">
                    <div className="text-8xl inline">I'm <div className='fatlum inline'> Fatlum Haliti</div>, web develeper based in Malmö</div>
                </div>
            </div>

            <Canvas>
                <WaveScene />
            </Canvas>
        </div>
    )
}

export default Home