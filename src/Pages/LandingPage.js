import { Canvas,useThree,useFrame} from "@react-three/fiber";
import {useState,useRef, useEffect } from "react";
import * as THREE from 'three'
import planetData from "../Utils/planetData";
import "../styles.css";
import Sun from "../Utils/Sun";
import Lights from "../Utils/Lights";
import Planet from "../Utils/Planet";
import {useNavigate } from 'react-router-dom';
import {Center,Stars,Html} from '@react-three/drei';



function CameraOpening(){
  return (useFrame( (state) => {
    // console.log(state.camera.position)
    if(state.camera.position.y < 50){
      state.camera.position.y += 0.3;
      state.camera.updateProjectionMatrix();  
    }
    
  
  })
  )

}

function ClickedAnimation({planetRef,...props}){

  console.log("Hello from Clicked",planetRef);

  let comp = planetRef.pos.clone()
  comp.round();


  useFrame((state,delta) => {

    let vec = state.camera.position.clone()
    vec.round()
  
    state.camera.position.lerp(planetRef.pos,0.05);

    if(vec.x == comp.x && vec.z == comp.z){
      console.log("Reached");
      return props.SuccessRedirect(`${planetRef.pathname}`)
    }
      
    state.camera.updateProjectionMatrix();


  })
  


    
}



export default function LandingPage() {
  const [clicked,setClicked] = useState(false)
  const [LocationPlanet,setLocationPlanet] = useState();
  const navigate = useNavigate();
  const [view,setview] = useState();




  let vec = new THREE.Vector3();

  function redirection(pathname,planetRef){
        console.log(`/${pathname}`,planetRef.current.position);
        console.log("clicked:",!clicked)
        const pos = planetRef.current.position
        setLocationPlanet({pos,pathname})
        setClicked(true);
        // navigate(`/${pathname}`);       
    }

  function SuccessRedirect(Name){
    console.log("SuccessRedirect")
    navigate(`/${Name}`);
  }

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight
   setview(width/height)



   console.log("hello",height/width)
  },[])


    
    
    return(
      <Canvas dpr={[1, 2]} camera={{ position: [0, 5, 0], fov: 45,far:2000,near:1}}>   
      <mesh scale={1}>
        <Sun />
        <Stars radius={1} depth={100} count={1500} factor={4} saturation={0} fade speed={1} />
        <directionalLight intensity={1} color='#f1faa2' />
        {planetData.map((planet) => (
          <Planet planet={planet} key={planet.id} redirect={redirection}/>
        ))}
        {clicked && <ClickedAnimation planetRef={LocationPlanet} SuccessRedirect={SuccessRedirect}/> }        
        <CameraOpening ></CameraOpening>
        </mesh>
      </Canvas>
    
    )

}