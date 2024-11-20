import { OrbitControls, TransformControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import waterFragmentShader from '../shaders/fragmentShader.glsl'
import waterVertexShader from '../shaders/vertexShader.glsl'
import * as THREE from "three";

const TestGeometry = () => {

    
    const cubeRef = useRef()
    const planeRef = useRef()

    const uniforms = useRef({
        uBigWavesElevation : {value: 0.25},
        uBigWavesFrequency: {value: new THREE.Vector2(4, 1.5)},
        uTime: {value: 0},
        uDepthColor: {value: new THREE.Color("#0000ff")},
        uSurfaceColor: {value: new THREE.Color("#8888ff")}
    })

    useFrame((state, delta) => {

       // cubeRef.current.rotation.y += delta
       planeRef.current.material.uniforms.uBigWavesFrequency.value
       planeRef.current.material.uniforms.uBigWavesElevation.value
       planeRef.current.material.uniforms.uDepthColor.value
       planeRef.current.material.uniforms.uSurfaceColor.value
       planeRef.current.material.uniforms.uTime.value += delta * 0.5
    })

    return (
        <>

        <OrbitControls makeDefault />

           <directionalLight position={[0, 10,3]} intensity={4} />
           <ambientLight intensity={2} />

                {/* <mesh position={[2, 0, 0]} scale={1}>
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
            </mesh> */}

            <mesh ref={planeRef} rotation-x={-Math.PI / 2} >
                <planeGeometry args={[5, 5, 512, 512]} />
                <shaderMaterial
                    fragmentShader={waterFragmentShader}
                    vertexShader={waterVertexShader}
                    uniforms={uniforms.current}
                />
            </mesh>
        </>
    )
}

export default TestGeometry