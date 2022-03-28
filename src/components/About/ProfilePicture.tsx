import { useRef } from 'react';
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { useScroll, useTexture } from '@react-three/drei';
import img from '../../assets/myPicture.jpeg';
import '../Shaders/ProjectsShaders/CustomMaterial';
import Plane from '../Shapes/Plane';
import useResponsive from '../../utils/useResponsive';

const ProfilePicture = () => {
  const { height, width } = useThree((s) => s.viewport);
  const { size } = useThree();
  const ref = useRef<any>(null!);
  const scroll = useScroll();
  const texture = useTexture(img);
  const position = useResponsive(
    [0, -height, 0.5],
    [0.25, -height, 0.5],
    [0.5, -height, 0.5]
  );
  const scale = useResponsive(
    [
      width * 0.35 < 1.18 ? width * 0.35 : 1.18,
      width * 0.35 < 1.18 ? width * 0.35 : 1.18,
      1
    ],
    [
      width * 0.25 < 1.6 ? width * 0.25 : 1.6,
      width * 0.25 < 1.6 ? width * 0.25 : 1.6,
      1
    ],
    [1.75, 1.75, 1]
  );
  useFrame((_, delta) => {
    const visible = scroll.visible(1 / 12, 1);
    if (size.width < 768) {
      ref.current.position.y = THREE.MathUtils.damp(
        ref.current.position.y,
        visible
          ? size.height < 720
            ? -height * 0.4
            : -height * 0.65
          : -height,
        2.5,
        delta
      );
    } else if (size.width >= 768 && size.width < 1280) {
      ref.current.position.y = THREE.MathUtils.damp(
        ref.current.position.y,
        visible ? -height * 0.55 : -height,
        2.5,
        delta
      );
    } else {
      ref.current.position.y = THREE.MathUtils.damp(
        ref.current.position.y,
        visible ? -height * 0.65 : -height,
        2.5,
        delta
      );
    }
  });
  return (
    <Plane
      ref={ref}
      position={position}
      scale={scale}
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
