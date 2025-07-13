// ChakraShape3D.tsx
import React from "react";
import { useFrame } from "@react-three/fiber";

const ChakraShape3D = ({ index, color }: { index: number; color: string }) => {
  const shapeIndex = index % 3; // 0: Sphere, 1: Torus, 2: Icosahedron

  let geometry: JSX.Element;
  switch (shapeIndex) {
    case 0:
      geometry = <sphereGeometry args={[1, 32, 32]} />;
      break;
    case 1:
      geometry = <torusGeometry args={[1, 0.4, 16, 100]} />;
      break;
    case 2:
      geometry = <icosahedronGeometry args={[1, 0]} />;
      break;
    default:
      geometry = <sphereGeometry args={[1, 32, 32]} />;
  }

  return (
    <mesh rotation={[0, 0, 0]}>
      {geometry}
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.5} />
    </mesh>
  );
};

export default ChakraShape3D;
