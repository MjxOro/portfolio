import Plane from '../Shapes/Plane';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture, useScroll } from '@react-three/drei';
import { useState } from 'react';
import rerunImg from '../../assets/rerunPicture.png';
import sendImg from '../../assets/sendPicture.png';
import mePic from '../../assets/myPicture.jpeg';
import '../Shaders/ProjectsShaders/CustomMaterial';
import './Projects.scss';
import Rerun from './Rerun';
import Send from './Send';
import Portfolio from './Portfolio';
interface IAnimateState {
  rerun: boolean;
  send: boolean;
  portfolio: boolean;
}

const Projects = () => {
  const [animate, setAnimate] = useState<IAnimateState>({
    rerun: false,
    send: false,
    portfolio: false
  });
  const scroll = useScroll();
  useFrame(() => {
    const scrollRef = scroll.visible(2.25 / 6, 2 / 6);
    const scrollRef2 = scroll.visible(3.5 / 6, 2 / 6);
    const scrollRef3 = scroll.visible(4.75 / 6, 2 / 6);
    if (scrollRef !== animate.rerun)
      setAnimate({ ...animate, rerun: scrollRef });
    if (scrollRef2 !== animate.send)
      setAnimate({ ...animate, send: scrollRef2 });
    if (scrollRef3 !== animate.portfolio)
      setAnimate({ ...animate, portfolio: scrollRef3 });
  });
  const inview = {
    show: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 }
  };
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <>
      <Rerun variants={variants} inview={inview} animate={animate} />
      <Send variants={variants} inview={inview} animate={animate} />
      <Portfolio variants={variants} inview={inview} animate={animate} />
    </>
  );
};

export const Banner = () => {
  const { width, height } = useThree((s) => s.viewport);
  const [rerun, send, portfolio] = useTexture([rerunImg, sendImg, mePic]);
  return (
    <group position={[0, -height * 2, 0]}>
      <group>
        <Plane
          map={rerun}
          args={[width * 0.925, 2, 32, 32]}
          shift={70}
          size={1}
          aspect={1.5}
          scale={[1, 1, 1]}
          frustumCulled={false}
        />
      </group>
      <group position={[0, -height, 0]}>
        <Plane
          map={send}
          args={[width * 0.925, 2, 32, 32]}
          shift={70}
          size={1}
          aspect={1.5}
          scale={[1, 1, 1]}
          frustumCulled={false}
        />
      </group>
      <group position={[0, -height * 2.0, 0]}>
        <Plane
          map={send}
          args={[width * 0.925, 2, 32, 32]}
          shift={70}
          size={1}
          aspect={1.5}
          scale={[1, 1, 1]}
          frustumCulled={false}
        />
      </group>
    </group>
  );
};
export default Projects;
