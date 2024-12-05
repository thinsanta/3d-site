import { Canvas } from "@react-three/fiber"
import WaveScene from "../components/WaveScene"
import EarthScene from "../components/EarthScene"


const Home = () => {


    return (
        <div className="min-h-screen">
            <div>
                <div className="w-[300px] h-[300px] overflow-hidden rounded-full mx-auto mt-32">

                    <img src={'./assets/self_portrait.jpg'} className='w-[400px]'>
                    </img>
                </div>

                <div className="w-[900px] mx-auto mt-8 text-center">
                    <div className="text-8xl inline">I'm <div className='fatlum inline'> Fatlum Haliti</div>, web develeper based in Malmö</div>
                </div>
            </div>
            <div className="h-screen mt-[-15vh]">
                <Canvas camera={{ fov:15, position:[20, 0, 5]}} >
                    {/* <WaveScene /> */}
                    <EarthScene />
                </Canvas>
            </div>
        </div>
    )
}

export default Home