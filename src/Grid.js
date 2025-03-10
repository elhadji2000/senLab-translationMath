import { Line, Text } from "@react-three/drei";

export default function Grid({ size = 10 }) {
  return (
    <group>
      {/* Axe X */}
      <Line points={[[-size, 0, 0], [size, 0, 0]]} color="red" lineWidth={3} />
      <Text position={[size + 1.5, 0, 0]} scale={[2, 2, 2]} color="red">+X</Text>
      <Text position={[-(size + 1.5), 0, 0]} scale={[2, 2, 2]} color="red">-X</Text>

      {/* Axe Y */}
      <Line points={[[0, -size, 0], [0, size, 0]]} color="green" lineWidth={3} />
      <Text position={[0, size + 1, 0]} scale={[2, 2, 2]} color="green">+Y</Text>
      <Text position={[0, -(size + 1), 0]} scale={[2, 2, 2]} color="green">-Y</Text>

      {/* Axe Z */}
      <Line points={[[0, 0, -size], [0, 0, size]]} color="blue" lineWidth={3} />
      <Text position={[0, 0, size + 1]} scale={[2, 2, 2]} color="blue">+Z</Text>
      <Text position={[0, 0, -(size + 1)]} scale={[2, 2, 2]} color="blue">-Z</Text>

      {/* Quadrillage XY */}
      {Array.from({ length: size * 2 + 1 }, (_, i) => {
        const pos = i - size;
        return (
          <group key={i}>
            {/* Lignes parallèles à X sur le plan XY */}
            <Line points={[[-size, pos, 0], [size, pos, 0]]} color="gray" lineWidth={1} />
            {/* Lignes parallèles à Y sur le plan XY */}
            <Line points={[[pos, -size, 0], [pos, size, 0]]} color="gray" lineWidth={1} />
          </group>
        );
      })}

      {/* Quadrillage XZ */}
      {Array.from({ length: size * 2 + 1 }, (_, i) => {
        const pos = i - size;
        return (
          <group key={i}>
            {/* Lignes parallèles à X sur le plan XZ */}
            <Line points={[[-size, 0, pos], [size, 0, pos]]} color="gray" lineWidth={1} />
            {/* Lignes parallèles à Z sur le plan XZ */}
            <Line points={[[pos, 0, -size], [pos, 0, size]]} color="gray" lineWidth={1} />
          </group>
        );
      })}
    </group>
  );
}
