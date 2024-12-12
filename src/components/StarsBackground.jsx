import { Stars } from '@react-three/drei'
import React from 'react'

const StarsBackground = () => {
  return (
    <>
     <Stars radius={0} depth={70} count={8000} factor={4} saturation={0} fade speed={1} />

    </>
  )
}

export default StarsBackground