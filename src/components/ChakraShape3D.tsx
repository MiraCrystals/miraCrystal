// ChakraShape3D.tsx
import React from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Torus, Icosahedron } from "@react-three/drei";

const chakraShapes = [
  Sphere,        // Root Chakra
  Torus,         // Sacral
  Icosahedron,   // Solar Plexus
  Sphere,        // Heart
  Torus,         // Throat
  Icosahedron,   // Third Eye
  Sphere         // Crown
];

const ChakraShape3D = ({ index, color }: { index: number; color: string }) => {
  const Shape = chakraShapes[index % chakraShapes.length];

  return (
    <group rotation={[0, 0, 0]}>
      <Shape args={[1, 32, 32]}>
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.5} />
      </Shape>
    </group>
  );
};

export default ChakraShape3D;
