import { useRef } from 'react';
import { Line, useScroll } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { Line2 } from 'three-stdlib';
import { Vector3 } from 'three';

const ProgressBar = ({
  color1,
  color2
}: {
  color1?: string;
  color2?: string;
}) => {
  const { height, width } = useThree((s) => s.viewport);
  const { size } = useThree();
  const scroll = useScroll();
  const mesh = useRef<Line2>(null!);
  const mesh2 = useRef<Line2>(null!);
  useFrame(() => {
    mesh.current.scale.y = scroll.offset;
    mesh2.current.scale.y = 1 - scroll.offset;
  });
  const position =
    size.width >= 768
      ? new Vector3(width / 2.01, 0, 0)
      : new Vector3(width / 2.01, -height * 0.03, 0);
  return (
    <group position={position}>
      <Line
        position={[0, height / 2, 0.001]}
        color={color1 || '#010101'}
        ref={mesh}
        points={[
          [0, 0, 0],
          [0, -height, 0]
        ]}
        linewidth={3}
      />
      <Line
        position={[0, -height / 2, 0]}
        rotation={[Math.PI, 0, 0]}
        color={color2 || '#f0f0f0'}
        ref={mesh2}
        points={[
          [0, 0, 0],
          [0, -height, 0]
        ]}
        linewidth={3}
      />
    </group>
  );
};
export default ProgressBar;
