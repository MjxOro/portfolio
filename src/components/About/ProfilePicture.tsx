import { useRef } from 'react';
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { useScroll, Image } from '@react-three/drei';
import img from '../../assets/myPicture.jpeg';

const ProfilePicture = () => {
  const { height } = useThree((s) => s.viewport);
  const ref = useRef<any>(null!);
  const scroll = useScroll();
  useFrame((_, delta) => {
    const visible = scroll.visible(1 / 7, 1);
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible ? 0 : -height * 0.5,
      4,
      delta
    );
    ref.current.material.zoom = THREE.MathUtils.damp(
      ref.current.material.zoom,
      visible ? 1 : 0.75,
      0.5,
      delta
    );
  });
  return (
    <group scale={[1.5, 1.5, 0]} position={[0, -height * 0.66, 0.1]}>
      <Image ref={ref} url={img} />
    </group>
  );
};
export default ProfilePicture;
