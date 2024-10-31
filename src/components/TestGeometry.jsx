import React from 'react'

const TestGeometry = () => {
    return (<>
        <mesh position={[0, 0, 0]} scale={1}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial color={"purple"}/>
        </mesh>
        <mesh position-x={-2} scale={1.5}>
            <boxGeometry />
            <meshBasicMaterial color={"darkblue"} />
        </mesh>
        <mesh position-y={-1} rotation-x={ - Math.PI / 2} scale={10}>
            <planeGeometry />
            <meshBasicMaterial color={"green"}/>
        </mesh>
        </>
    )
}

export default TestGeometry