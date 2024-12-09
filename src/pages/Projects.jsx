import { Environment, Float, PresentationControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const Projects = () => {

    const macbook = useGLTF('./assets/macbook.gltf')

    return (
        <div id='projects' className='mt-[120vh] mb-48 h-screen' >
            <div className='text-4xl mx-auto w-fit mb-44' >
                Projects
            </div>

            <Canvas className=''>
                <Suspense>
                    <Environment preset='studio' />

                    <PresentationControls>
                        <Float rotationIntensity={0.4}>
                            <primitive object={macbook.scene} scale={1.2} position={[1.5, -1.0, 0.0]} rotation={[0.25, 0, 0]} />
                        </Float>
                    </PresentationControls>


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