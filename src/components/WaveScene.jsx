import { useFrame } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import waterFragmentShader from '../shaders/fragmentShader.glsl'
import waterVertexShader from '../shaders/vertexShader.glsl'
import * as THREE from "three";
import { useGLTF } from '@react-three/drei';

/* 
Boat by Poly by Google [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/84-DYhLzxNq)
*/

const WaveScene = () => {

    const cubeRef = useRef()
    const planeRef = useRef()
    const ship = useGLTF('./assets/Boat.glb')

    console.log(ship)
    const uniforms = useRef({
        uBigWavesElevation: { value: 0.10 },
        uBigWavesFrequency: { value: new THREE.Vector2(5, 1.5) },
        uTime: { value: 0 },
        uDepthColor: { value: new THREE.Color("#007ce3") },
        uSurfaceColor: { value: new THREE.Color("#9bd8f") }
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

            <directionalLight position={[0, 10, 3]} intensity={4} />
            <ambientLight intensity={2} />

            {/* The ship model */}
            <primitive object={ship.scene} scale={0.15} position={[1.5, 0.8, 2]} rotation={[Math.PI / 4, 0, 0]} />

            {/* The wave */}
            <mesh ref={planeRef} position={[1.5, 1, 2]} rotation={[-Math.PI / 4, 0, 0]} scale={0.6} >
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

export default WaveScene