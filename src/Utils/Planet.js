import {useState,useRef} from "react";
import { useFrame } from "@react-three/fiber";
import Eliptical from "./Eliptical";
import { Html,PointMaterial,useCursor } from "@react-three/drei";



export default function Planet({ planet: { color, xRadius, zRadius, size, speed, offset,Name = ""}, redirect, ...props}) {
  const planetRef = useRef();
  const [animate,setanimate] = useState(true);
  const [hovered, set] = useState()
  useCursor(hovered, /*'pointer', 'auto'*/)



    function test(){
      redirect(Name,planetRef);
      setanimate(false);
    }
    
  
    useFrame(({ clock }) => {
      if(animate){
      const t = clock.getElapsedTime() * speed + offset;
      const x = xRadius * Math.sin(t);
      const z = zRadius * Math.cos(t);
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
    }
    });
  
    return (
      <>
        
        <mesh ref={planetRef} onClick={test} onPointerOver={() => set(true)} onPointerOut={() => set(false)}>
          <sphereGeometry args={[size, 100, 100]} />
          <meshToonMaterial roughness={0}   color={color} />
          {Name != "" && <Html prepend>
            <div className="annotation">{Name}</div>
          </Html> }    
        </mesh>
        <Eliptical xRadius={xRadius} zRadius={zRadius} />
      </>
    );
  }
  
  