import { forwardRef, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import '../Shaders/ProjectsShaders/CustomMaterial';

const Plane = forwardRef(
  (
    { color = 'white', shift = 1, opacity = 1, args, map, ...props }: any,
    ref
  ) => {
    const { size } = useThree();
    const material = useRef<any>();
    const scroll = useScroll();
    const pages = 6;
    let last: any = scroll.el.scrollTop;
    useMemo(() => (map.minFilter = THREE.LinearFilter), [map]);
    useFrame(() => {
      const offsetFactor = (scroll.offset + 1) / pages;
      /*
      material.current.scale = THREE.MathUtils.lerp(
        material.current.scale,
        offsetFactor - (scroll.el.scrollTop * 0.25) / (pages * size.height),
        0.1
      );
      */
      material.current.shift = THREE.MathUtils.lerp(
        material.current.shift,
        (scroll.el.scrollTop - last) / shift,
        0.1
      );
      last = scroll.el.scrollTop;
    });

    return (
      <mesh ref={ref} {...props}>
        <planeBufferGeometry attach="geometry" args={args} />
        <customMaterial
          attach="material"
          ref={material}
          color={color}
          uTexture={map}
          hasTexture
          opacity={opacity}
        />
      </mesh>
    );
  }
);

export default Plane;
