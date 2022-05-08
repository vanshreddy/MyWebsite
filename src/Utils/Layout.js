import {Center,Stars,Html} from '@react-three/drei';
import { Canvas,useThree,useFrame} from "@react-three/fiber";
import {useState,useRef} from "react";
import BackButton from "./Back";
import {useNavigate} from 'react-router-dom'

function RotatingStars() {
    const eref = useRef()
    

    useFrame((state,delta)=> {
        eref.current.rotation.x -= delta / 10
        eref.current.rotation.y -= delta / 15
    })

    return(
    <Stars ref={eref} radius={50} depth={0} count={1000} factor={4} saturation={0} fade speed={1} />
    )

}



export default function Layout({children,camera=null, ...props}){
    const navigate = useNavigate();

    function HandleClick(){
        console.log("Clicked")
        navigate('/');

    }


    return(
           
    <Canvas camera={camera}>
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />

    <Html position={[7.35,3.75,0]}>
        <BackButton redirect={HandleClick}></BackButton>
    </Html>

    <Center>
    <mesh>
    <mesh position={[0,-13,0]}>
    <sphereGeometry args={[10.5, 100, 100]} />
    <meshToonMaterial roughness={0} color={props.color} />
    </mesh>
    <RotatingStars></RotatingStars>
    {children}     
    </mesh>
    </Center>
  </Canvas>




    )

}