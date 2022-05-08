import { Canvas, useFrame } from "@react-three/fiber";
import {Html } from '@react-three/drei'
import {useState} from 'react';  





export default function Sun({animate=false}) {
    return (
      <>

      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshPhongMaterial color="#F4FF00" />
      </mesh>
      </>
    );
  }

