import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const MySphere = ({ position }) => {
  const ref = useRef();
  useFrame((s, d) => {
    ref.current.rotation.x += d;
    ref.current.rotation.y += d;
  });
  return (
    <mesh  position={position}  ref={ref}>
      <sphereGeometry   />
      <meshStandardMaterial  color={"blue"} />
    </mesh>
  );
};
export default MySphere;
