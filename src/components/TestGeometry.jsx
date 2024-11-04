import { OrbitControls, TransformControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const TestGeometry = () => {

    const cubeRef = useRef()

    useFrame((state, delta) => {

        cubeRef.current.rotation.y += delta

    })

    return (
        <>

        <OrbitControls makeDefault />

           <directionalLight position={[0, 10,3]} intensity={4} />
           <ambientLight intensity={2} />

                <mesh position={[2, 0, 0]} scale={1}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color={"purple"} />
                </mesh>

                <mesh ref={cubeRef} position-x={-2} scale={1.5}>
                    <boxGeometry />
                    <meshStandardMaterial color={"darkblue"} />
                </mesh>
                <TransformControls object={cubeRef} />

            <mesh position-y={-1} rotation-x={- Math.PI / 2} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color={"green"} />
            </mesh>
        </>
    )
}

export default TestGeometry