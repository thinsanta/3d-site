import { Canvas } from "@react-three/fiber"
import WaveScene from "../components/WaveScene"
import EarthScene from "../components/EarthScene"
import { Suspense } from "react"
import { Html } from "@react-three/drei"


const Home = () => {


    return (
        <div className="h-screen ">

            <div className="h-[200vh] mt-[-55vh]">
                <Canvas  camera={{ fov: 15, position: [20, 0, 5] }}>
                    {/* <WaveScene /> */}
                    <Suspense>
                        <Html prepend center className="z-0">
                            <div className="">
                                <div className="w-[300px] h-[300px] overflow-hidden rounded-full">

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
        </div>
    )
}

export default Home