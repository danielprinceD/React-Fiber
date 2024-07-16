import { Canvas } from "@react-three/fiber";
import React from "react";
import MyMesh from "./MyMesh";
import MySphere from "./MySphere";
import MyTorus from "./MyTorus";
import { OrbitControls } from "@react-three/drei";

const MyCanvas = () => {
  return (
    <Canvas>
      <OrbitControls />
      <directionalLight position={[5, 5, 10]} />
      <ambientLight intensity={0.3} />
      <MyMesh position={[-2, 0, 0]} />
      <MySphere position={[0, 0, 0]} />
      <MyTorus position={[0, 0, 0]} />
    </Canvas>
  );
};

export default MyCanvas;
