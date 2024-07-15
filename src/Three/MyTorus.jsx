import React from "react";

const MyTorus = ({ position }) => {
  return (
    <mesh position={position}>
      <torusGeometry args={[2, 0.9, 11, 100]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export default MyTorus;
