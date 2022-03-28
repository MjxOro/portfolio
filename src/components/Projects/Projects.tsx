import Plane from '../Shapes/Plane';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture, useScroll } from '@react-three/drei';
import { useState } from 'react';
import rerunImg from '../../assets/rerunPicture.png';
import sendImg from '../../assets/sendPicture.png';
import portfolioImg from '../../assets/portfolioPicture.png';
import '../Shaders/ProjectsShaders/CustomMaterial';
import './Projects.scss';
import Rerun from './Rerun';
import Send from './Send';
import Portfolio from './Portfolio';
import useResponsive from '../../utils/useResponsive';
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
  const [rerun, send, portfolio] = useTexture([
    rerunImg,
    sendImg,
    portfolioImg
  ]);
  const args = useResponsive(
    [
      width * 0.925 < 4.3 ? width * 0.925 : 4.3,
      width * 0.475 < 2.32 ? width * 0.475 : 2.32,
      32,
      32
    ],
    [
      width * 0.65 < 6.08 ? width * 0.65 : 6.08,
      width * 0.35 < 3.45 ? width * 0.35 : 3.25,
      32,
      32
    ],
    [6.08, 3.05, 32, 32]
  );
  const position = useResponsive(
    [0, -height * 1.95, 0],
    [0.4, -height * 1.95, 0],
    [0.4, -height * 1.95, 0]
  );
  return (
    <group position={position}>
      <group>
        <Plane
          map={rerun}
          args={args}
          shift={70}
          size={1}
          aspect={1.5}
          scale={[1, 1, 1]}
          frustumCulled={false}
        />
      </group>
      <group position={[0, -height * 0.95, 0]}>
        <Plane
          map={send}
          args={args}
          shift={70}
          size={1}
          aspect={1.5}
          scale={[1, 1, 1]}
          frustumCulled={false}
        />
      </group>
      <group position={[0, -height * 1.95, 0]}>
        <Plane
          map={portfolio}
          args={args}
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
