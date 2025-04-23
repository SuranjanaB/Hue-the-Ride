import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'


const Backdrop = () => {
  const shadows=useRef();
  return (
    <AccumulativeShadows
    ref={shadows}
    temporal
    frames={60}
    alphaTest={0.85}
    scale={9}
    rotation={[0,1.04,2]}
      position={[0,0, -0.14]}
    >
      <RandomizedLight
        amount={2}  
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[20,20,-10]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop
