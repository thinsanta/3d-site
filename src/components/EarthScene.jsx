import React, { useRef } from 'react'
import earthFragmentShader from '../shaders/earthFragmentShader.glsl'
import earthVertexShader from '../shaders/earthVertexShader.glsl'
import * as THREE from "three";
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const EarthScene = () => {

    const earth = useRef()

    // Loaders
    const textureLoader = new THREE.TextureLoader()

    // Textures
    const earthDayTexture = textureLoader.load('./assets/earth/day.jpg')
    const earthNightTexture = textureLoader.load('./assets/earth/night.jpg')
    const earthSpecularCloudsTexture = textureLoader.load('./assets/earth/specularClouds.jpg')

    earthDayTexture.anisotropy = 8
    earthNightTexture.anisotropy = 8

    earthDayTexture.colorSpace = THREE.SRGBColorSpace
    earthNightTexture.colorSpace = THREE.SRGBColorSpace

    const earthParameters = {}
    earthParameters.atmosphereDayColor = '#00aaff'
    earthParameters.atmosphereTwilightColor = '#ff6600'


    const uniforms = useRef({
        uDayTexture: new THREE.Uniform(earthDayTexture),
        uNightTexture: new THREE.Uniform(earthNightTexture),
        uSpecularCloudsTexture: new THREE.Uniform(earthSpecularCloudsTexture),
        uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(earthParameters.atmosphereDayColor)),
        uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(earthParameters.atmosphereTwilightColor))
    })


    useFrame((state, delta) => {

        // cubeRef.current.rotation.y += delta
        earth.current.rotation.y += delta / 5
       
    })

    return (
        <>
            <OrbitControls />
            <mesh ref={earth}>
                <sphereGeometry  args={[2, 64, 64]}/>
                <shaderMaterial
                    fragmentShader={earthFragmentShader}
                    vertexShader={earthVertexShader}
                    uniforms={uniforms.current}
                />
            </mesh>
        </>
    )
}

export default EarthScene