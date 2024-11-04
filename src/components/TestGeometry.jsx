import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const TestGeometry = () => {

    const cubeRef = useRef()

    useFrame((state, delta) => {

        cubeRef.current.rotation.y += delta

    })

    return (
        <>

           <directionalLight args={[1, 2, 3]} intensity={5} />
           <ambientLight intensity={2.5} />

            <group>
                <mesh position={[2, 0, 0]} scale={1}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={"purple"} />
                </mesh>

                <mesh ref={cubeRef} position-x={-2} scale={1.5}>
                    <boxGeometry />
                    <meshStandardMaterial color={"darkblue"} />
                </mesh>
            </group>

            <mesh position-y={-1} rotation-x={- Math.PI / 2} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color={"green"} />
            </mesh>
        </>
    )
}

export default TestGeometry