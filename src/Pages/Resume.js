import {Center,Stars,Html} from '@react-three/drei';
import { Canvas,useThree,useFrame} from "@react-three/fiber";
import {useState,useRef} from "react";
import resumeimage from "../Utils/VanshReddy_MainResume.jpg";
import * as THREE from 'three'

import Layout from "../Utils/Layout";


export default function Resume(){

    
   return(
       <Layout color='#e85ffa'>
         
       <mesh position={[-3,4,0]}>
       <Html>
             <img style={{maxWidth:'100vw',maxHeight:'100vh',display:'block',alignItems:'center',justifyContent:'center',
  top: '50%', left: '50%'}} src={resumeimage}></img>
         </Html>
         
         </mesh>
       </Layout>


   )
}