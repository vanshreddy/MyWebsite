import React from "react";
import { Html } from "@react-three/drei";
import { SocialIcon } from 'react-social-icons';


export default function SocialBar() {
  return (
    <group position={[37,10,0]}>
    <Html>
    <div className="test2" >
      <SocialIcon url="https://linkedin.com/in/vanshreddy" bgColor="#2867b2" style={{ height: 40, width: 40, marginBottom: 10 }} />
      <SocialIcon url="https://github.com/vanshreddy" bgColor="#C7CDD5" style= { {height: 40, width: 40, marginBottom: 10}}/>
      <SocialIcon url="vanshreddy@gmail.com"  style= { {height: 40, width: 40, marginBottom: 10}}/>

      </div> 

    </Html>
    </group>
  );
}
