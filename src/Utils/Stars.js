// import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

export default function Stars({animate=false,...props}) {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(2500), { radius: 1.5 }))
    useFrame(({clock}, delta) => {
      if(animate){
      const t = clock.getElapsedTime();
      // console.log("ref",ref.current)
      if(t % 4<= 2){
        // console.log("from 1:", t%2)
        ref.current.material.opacity = 0.6;
      }
      else{
        // console.log("from 2:", t%2)
        ref.current.material.opacity = 0.8;
      }
    }
    else{
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
    }
    })
    return (
      <group position={[0,50,0]} rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial transparent color="white" size={0.011} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>
    )
  }
  