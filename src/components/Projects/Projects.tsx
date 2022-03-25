import Plane from '../Shapes/Plane';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { useTexture, Text } from '@react-three/drei';
import rerunImg from '../../assets/rerunPicture.png';
import sendImg from '../../assets/sendPicture.png';
import mePic from '../../assets/myPicture.jpeg';
import '../Shaders/ProjectsShaders/CustomMaterial';
import './Projects.scss';

const Projects = () => {
  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
        <section className={'projects'}>
          <h1>PROJECTS</h1>
          <div>
            <div className={'projects__filler'}></div>
            <h2>RE-RUN</h2>
            <p className={'projects__text'}>A peer-to-peer marketplace app.</p>
            <p className={'projects__text'}>
              Full-Stack, React, Sass, Node/Express, Jwt Tokens, MongoDB
            </p>
          </div>
        </section>
      </div>
      <div style={{ width: '100vw', height: '100vh' }}>
        <section className={'projects'}>
          <h1></h1>
          <div>
            <div className={'projects__filler'}></div>
            <h2>SEND</h2>
            <p className={'projects__text'}>Messnger app.</p>
            <p className={'projects__text'}>
              Full-Stack, React, Typescript, Node/Express, OAuth, MongoDB, Web
              Sockets, Google Api
            </p>
          </div>
        </section>
      </div>
      <div style={{ width: '100vw', height: '100vh' }}>
        <section className={'projects'}>
          <h1></h1>
          <div>
            <div className={'projects__filler'}></div>
            <h2>PORTFOLIO WEBSITE</h2>
            <p className={'projects__text'}>
              Front-End, React, Typescript, Webgl, Design
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export const Banner = () => {
  const { width, height } = useThree((s) => s.viewport);
  const [rerun, send, me] = useTexture([rerunImg, sendImg, mePic]);
  return (
    <group position={[0, -height * 2, 0]}>
      <Plane
        map={rerun}
        args={[width * 0.925, 2, 32, 32]}
        shift={75}
        size={1}
        aspect={1.5}
        scale={[1, 1, 1]}
        frustumCulled={false}
      />
    </group>
  );
};
export default Projects;
