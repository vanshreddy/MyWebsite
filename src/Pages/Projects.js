import React from 'react';
import { Canvas} from "@react-three/fiber";
import { Html, OrbitControls,Stars} from "@react-three/drei";
import SocialBar from '../Components/SocialBar/SocialBar';
import ProjectCard from "../Utils/Projects/Card";
import { Route,useNavigate } from 'react-router-dom';
import Layout from "../Utils/Layout";





export default function Projects() {
   
    return(

        // <Canvas camera={{ position: [0, 40, 23], fov: 50}}>
        //     <SocialBar />
        //     <ProjectCard />
        //     <Stars />
        // </Canvas>

        <Layout color={"#50fa56"}>
                <ProjectCard />
        </Layout>



        );

}