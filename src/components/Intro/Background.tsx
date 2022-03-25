import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { Matrix4, Vector3 } from 'three';

const Background = () => {
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const count = 3000;
  const particleObj = useMemo(() => new THREE.Object3D(), []);
  const tempMatrix = useMemo(() => new Matrix4(), []);
  const tempVec3 = useMemo(() => new Vector3(), []);
  const [populate, setPopulate] = useState<boolean>(false); //Change to state manager
  const { height } = useThree((s) => s.viewport);
  const scroll = useScroll();
  //Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useEffect(() => {
    //Delay particles
    setTimeout(() => setPopulate(true), 3500);
  }, []);

  useFrame((_, delta) => {
    const compressObjMobile = scroll.range(0, 1 / 7);
    //This means random movement of particles
    if (populate) {
      particles.forEach((particle, i) => {
        let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
        //Give particles random movement
        t = particle.t += speed / 2;
        const posX =
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10;
        const posY =
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10;
        const posZ =
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10;
        const s = Math.cos(t) * 0.5;
        // Update the  object
        particleObj.position.set(posX / 20, posY / 20, posZ / 20);
        mesh.current.getMatrixAt(i, tempMatrix);
        tempVec3.setFromMatrixPosition(tempMatrix);
        particleObj.position.x = THREE.MathUtils.lerp(tempVec3.x, posX, delta);
        particleObj.position.y = THREE.MathUtils.lerp(tempVec3.y, posY, delta);
        particleObj.position.z = THREE.MathUtils.lerp(tempVec3.z, posZ, delta);
        if (compressObjMobile >= 0.98) {
          //Mobile Only for now
          mesh.current.getMatrixAt(i, tempMatrix);
          tempVec3.setFromMatrixPosition(tempMatrix);
          particleObj.position.x = THREE.MathUtils.lerp(
            tempVec3.x,
            posX / 20,
            delta * 5
          );
          particleObj.position.y = THREE.MathUtils.lerp(
            tempVec3.y,
            posY / 20,
            delta * 5
          );
          particleObj.position.z = THREE.MathUtils.lerp(
            tempVec3.z,
            0,
            delta * 5
          );
          mesh.current.scale.lerp(new Vector3(0.4, 0.4, 0.4), delta);
          //mesh.current.position.lerp(new Vector3(0, -height * 0.2, 0), delta);
        } else if (compressObjMobile < 0.98) {
          //Mobile only for now
          mesh.current.getMatrixAt(i, tempMatrix);
          tempVec3.setFromMatrixPosition(tempMatrix);
          particleObj.position.x = THREE.MathUtils.lerp(
            tempVec3.x,
            posX,
            delta
          );
          particleObj.position.y = THREE.MathUtils.lerp(
            tempVec3.y,
            posY,
            delta
          );
          particleObj.position.z = THREE.MathUtils.lerp(
            tempVec3.z,
            posZ,
            delta
          );
        }
        particleObj.scale.set(s, s, s);
        particleObj.rotation.set(s * 5, s * 5, s * 5);
        particleObj.updateMatrix();
        // And apply the matrix to the instanced item
        mesh.current.setMatrixAt(i, particleObj.matrix);
        mesh.current.instanceMatrix.needsUpdate = true;
      });
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh
        ref={mesh}
        position={[0, -height * 0.6, -0.0001]}
        args={[undefined, undefined, count]}
      >
        <dodecahedronBufferGeometry attach="geometry" args={[0.2, 0]} />
        <meshToonMaterial attach="material" color="black" />
      </instancedMesh>
    </>
  );
};
export default Background;
