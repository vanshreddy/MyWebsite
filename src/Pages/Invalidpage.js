import { Canvas} from "@react-three/fiber";
import {Stars} from "@react-three/drei";
import { Html } from "@react-three/drei";
import Model from "../Model";
import { Suspense } from "react";
import {useNavigate } from 'react-router-dom';
import BackButton from "../Utils/Back";
import { useThree } from '@react-three/fiber'




export default function Invalidpage() {
    const navigate = useNavigate();


    function redirection(){
        navigate(`/`);
    }

    return (
        <Canvas camera={{ position: [0, 40, 23], fov: 50}}>
            <Html position={[-6,0,0]}>
            <div className="test3" style={{fontWeight: "bold", fontSize:"1.5rem"}} >
                <p> This page has not yet been developed. Please check back later.</p>
            </div> 
                </Html>
        <Stars />
        </Canvas>
    );
}


