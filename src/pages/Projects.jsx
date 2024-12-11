import { Clone, ContactShadows, Environment, Float, Html, PresentationControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import GithubLogo from '../assets/github-mark-white.svg'
import Site from '../assets/site.svg'

const Projects = () => {

    const macbook = useGLTF('./assets/macbook.gltf')

    return (
        <div id='projects' className='mt-[120vh] mb-48 h-[200vh]' >
            <div className='text-4xl mx-auto w-fit mb-44' >
                Projects
            </div>

            <Canvas camera={{ fov: 35 }} className=''>
                <Suspense>
                    <Environment preset='city' />
                    <Float rotationIntensity={0.4}>
                        <primitive object={macbook.scene} scale={0.4} position-x={-0.7} position-y={0.2} rotation={[0.25, 0.45, -0.1]}>
                            <Html transform wrapperClass='htmlScreen' distanceFactor={1.17} position={[0, 1.80, -1.4]} rotation-x={-0.256} >
                                <iframe src='https://vuejs-projects-2ad81.web.app/' />
                            </Html>
                        </primitive>
                        <Html position-y={1}>
                            <div className='w-[550px] text-2xl text-gray-400'>
                             This was my first hobby project that I worked on after finishing school. It's a live chat where you can signup and chat with
                             other users! I used Vuejs in the front and is connected to a firebase in the back that works as a database and websocket for 
                             updating the live chat and has a CI/CD pipeline.

                             <div className='flex flex-wrap items-center mt-5 justify-start gap-2 text-white'>
                                <div className=' text-base bg-emerald-500 px-3 py-1 items-center rounded-md'>
                                    Vuejs
                                </div>
                                <div className=' text-base bg-red-500 px-3 py-1 items-center rounded-md'>
                                    Firebase
                                </div>
                                <div className=' text-base bg-orange-500 px-3 py-1 items-center rounded-md'>
                                    Websocket
                                </div>
                                <div className=' text-base bg-blue-500 px-3 py-1 items-center rounded-md'>
                                    Cloud(CI/CD)
                                </div>
                             </div>
                             <a className='visitButton flex gap-3 mt-6 px-5 py-2 rounded-lg w-fit text-white items-center'>
                                <div>
                                    <img src={Site} height={"50px"} width={"50px"} />
                                </div>
                                <div className='text-base'>
                                    Visit live
                                </div>
                             </a>
                            </div>
                        </Html>
                    </Float>
                    <Float rotationIntensity={0.4}>
                        <Clone object={macbook.scene} position-x={0.5} position-y={-1.3} scale={0.4} rotation-y={-0.3} rotation-z={0.05}>
                            <Html transform wrapperClass='htmlScreen' distanceFactor={1.17} position={[0, 1.80, -1.4]} rotation-x={-0.256} >
                                <iframe src='https://kantur.se/' />
                            </Html>
                        </Clone>
                    </Float>


                </Suspense>
            </Canvas>




            {/* <div className='flex flex-wrap justify-evenly gap-10 '>
                <div className='container w-[600px] h-fit rounded-lg'>  
                    <a className='w-full' href='https://kantur.se/' target='_blank'>
                        <img src={'./assets/kantur-home-min.png'} className='w-full' />
                    </a>
                    <div className='role text-4xl mx-auto w-fit'>
                        Lead Web Developer
                    </div>
                    <div className='roleDesc hidden p-3 '>
                    Took a lead developing job to create a job-portal for customers to be
                    able to apply for roles.    
                    </div>             
                </div>
                <div className=' container w-[600px] h-fit rounded-lg'>  
                    <a className='w-full' href='https://vuejs-projects-2ad81.web.app/' target='_blank'>
                        <img src={'./assets/vue-live-chat-min.png'} className='w-full' />
                    </a>   
                    <div className='role text-4xl mx-auto w-fit'>
                        Live Chat - Hobby Project
                    </div>
                    <div className='roleDesc hidden mb-6 mx-6'>
                    Took a lead developing job to create a job-portal for customers to be
                    able to apply for roles.    
                    </div>             
                </div>
            </div> */}
        </div>
    )
}

export default Projects