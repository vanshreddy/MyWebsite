import {ambientLight,pointLight} from "@react-three/fiber";

export default function Lights() {
    return (
      <>
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
      </>
    );
  }