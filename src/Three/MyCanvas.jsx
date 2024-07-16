import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import MyMesh from "./MyMesh";
import MySphere from "./MySphere";
import MyTorus from "./MyTorus";
import { OrbitControls, useHelper } from "@react-three/drei";
import { DirectionalLightHelper, PlaneGeometry, PlaneHelper } from "three";

const Scene = () => {
  const lightRef = useRef();
  useHelper(lightRef, DirectionalLightHelper, 0.5, "black");
  return (
    <>
      <OrbitControls />
      <directionalLight position={[5, 5, 10]} ref={lightRef} />
      <ambientLight intensity={0.3} />

      <MyMesh position={[-2, 0, 0]} />
      <MySphere position={[0, 0, 0]} />
      <MyTorus position={[0, 0, 0]} />
    </>
  );
};

const MyCanvas = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default MyCanvas;
