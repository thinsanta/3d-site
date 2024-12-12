import { Canvas } from "@react-three/fiber"
import WaveScene from "../components/WaveScene"
import EarthScene from "../components/EarthScene"
import { Suspense } from "react"
import { Html } from "@react-three/drei"
import StarsBackground from "../components/StarsBackground"


const Home = () => {


    return (
        <div className="h-[1100px]">
        <Canvas className="" camera={{ fov: 35, position: [20, 0, 5] }}>
            {/* <WaveScene /> */}
            <Suspense>
                <StarsBackground />
                <Html prepend center className="z-0">
                    <div className="">
                        <div className="w-[300px] h-[300px] mt-[-250px] overflow-hidden rounded-full">

                            <img src={'./assets/self_portrait.jpg'} className='w-[400px]'>
                            </img>
                        </div>

                        <div className="w-[900px] mt-8">
                            <div className="text-8xl inline">I'm <div className='fatlum inline'> Fatlum Haliti</div>, web develeper based in Malmö</div>
                        </div>
                    </div>

                </Html>
                <EarthScene />
            </Suspense>
        </Canvas>
        </div>
    )
}

export default Home