import { useRef } from 'react';
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { useScroll, useTexture, Html } from '@react-three/drei';
import img from '../../assets/myPicture.jpeg';
import '../Shaders/ProjectsShaders/CustomMaterial';
import Plane from '../Shapes/Plane';

const ProfilePicture = () => {
  const { height, width } = useThree((s) => s.viewport);
  const { size } = useThree();
  const ref = useRef<any>(null!);
  const scroll = useScroll();
  const texture = useTexture(img);
  useFrame((_, delta) => {
    const visible = scroll.visible(1 / 12, 1);
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible ? (size.height < 700 ? -height * 0.55 : -height * 0.7) : -height,
      2.5,
      delta
    );
  });
  return (
    <Plane
      ref={ref}
      position={[0, -height, 0.5]}
      scale={[width * 0.4, width * 0.4, 1]}
      args={[1, 1, 32, 32]}
      shift={65}
      size={1}
      aspect={1}
      map={texture}
      frustumCulled={false}
    />
  );
};
export default ProfilePicture;
