import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const MyMesh = ({ position }) => {
  const ref = useRef();
  useFrame((s, d) => {
    ref.current.rotation.x += d / 2;
    ref.current.rotation.y += d / 3;
    ref.current.rotation.z += d / 2;
    
  });
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export default MyMesh;
