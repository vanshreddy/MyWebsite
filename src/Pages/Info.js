import { Canvas} from "@react-three/fiber";
import {Stars} from "@react-three/drei";
import { Html } from "@react-three/drei";
import Model from "../Model";
import { Suspense } from "react";
import {useNavigate } from 'react-router-dom';
import BackButton from "../Utils/Back";
import Layout from "../Utils/Layout";






export default function Info() {
    
    return (
        <>
        <div className='test5'>
            <BackButton></BackButton>
        </div>
        <Layout color='#e36e4b'>
        <Html center>
        
             <div className="test4">
                 <p> I'm Vansh Reddy Cheguri, a Junior studying Computer Engineering at RPI. 
                     I enjoy learning new technologies and using them to work on some cool projects.Honestly I am a huge fan of the 
                     adrenaline rush when you find a solution to a problem which bugs you for sleepless weeks. On a serious note,
                     I really enjoy collaborating with other people and I am always open to discussing new ideas and projects.
                
                  </p>
                
             </div> 
        
        </Html>             
           
        </Layout>
        
        </>
        
        
        
        
        // <Canvas camera={{ position: [0, 40, 23], fov: 50}}>
        //     <BackButton redirect={redirection}/>
        //     <Html position={[-30,0,0]}>
        //     <div className="test4" style={{ fontWeight:"bold", fontSize:"1.5rem"}} >
        //         <p> I'm Vansh Reddy Cheguri, a Junior studying Computer Engineering at RPI. 
        //             I enjoy learning new technologies and using them to work on some cool projects.Honestly I am a huge fan of the 
        //             adrenaline rush when you find a solution to a problem which bugs you for sleepless weeks. On a serious note,
        //             I really enjoy collaborating with other people and I am always open to discussing new ideas and projects.FYI thats a Millennium Falcon(if you know you know).
                
        //          </p>
                
        //     </div> 
        //         </Html>
        // <Stars />
        // <Suspense fallback={null}>
        //   <Model locx={10} locy={15} locz={2}/>
        // </Suspense>
        // </Canvas>
    );
}
