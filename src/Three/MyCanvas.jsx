import { Canvas } from "@react-three/fiber";
import React from "react";
import MyMesh from "./MyMesh";

const MyCanvas = () => {
  return (
    <Canvas>
      <directionalLight position={[5, 5, 10]} />
      <ambientLight intensity={0.3} />
      <MyMesh position={[-2, 0, 0]} />
    </Canvas>
  );
};

export default MyCanvas;
