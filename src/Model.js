import { Canvas } from "@react-three/fiber";
import { useLoader,useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
const random = (a, b) => a + Math.random() * b;


const Model = () => {

  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={1.12} />
    </>
  );
};

export default function Scene(props) {
    const ref = useRef();
    useFrame(() => {
        ref.current.rotation.y += 0.007;
        ref.current.position.y += 0.001;


    });
  
  return (
    <mesh ref={ref} position={[props.locx,props.locy, props.locz]}>
      <Model />
      <OrbitControls />
    </mesh>
  );
}
