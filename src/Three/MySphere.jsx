import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

const MySphere = ({ position }) => {
  const ref = useRef();
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);

  useFrame((s, d) => {
    const speed = isHovered ? 1 : 0.3;
    ref.current.rotation.x += d * speed;
    ref.current.rotation.y += d * speed;
  });
  return (
    <>
      <mesh
        position={position}
        ref={ref}
        onPointerEnter={(e) => {
          setHovered(true);
        }}
        scale={isClicked ? 1.5 : 1}
        onClick={() => setClicked(!isClicked)}
        onPointerLeave={(e) => setHovered(false)}
      >
        <sphereGeometry />
        <meshStandardMaterial wireframe color={isHovered ? "red" : "blue"} />
      </mesh>
    </>
  );
};
export default MySphere;
