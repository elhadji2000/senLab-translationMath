import { Box } from "@react-three/drei";

export default function Cube({ xPosition, yPosition, zPosition, xRotation, yRotation, zRotation, xScale, yScale, zScale }) {
  return (
    <group position={[xPosition, yPosition, zPosition]} rotation={[xRotation, yRotation, zRotation]} scale={[xScale, yScale, zScale]}>
      <Box args={[1, 1, 1]}>
        <meshStandardMaterial attach="material" color="white" />
      </Box>
    </group>
  );
}
