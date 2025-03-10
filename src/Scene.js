import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Grid from "./Grid";
import Cube from "./Cube";

export default function Scene({ controls }) {
  return (
    <Canvas camera={{ position: [0, 2, 10] }}>
      <OrbitControls />
      <directionalLight intensity={0.5} position={[6, 2, 1]} />
      <Grid size={10} />
      <Cube {...controls} />
    </Canvas>
  );
}