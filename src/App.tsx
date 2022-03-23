import './App.scss';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import CustomScrollBar from './components/CustomScrollBar/CustomScrollBar';
import Background from './components/Intro/Background';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import ProfilePicture from './components/About/ProfilePicture';
import About from './components/About/About';
import { Suspense, useState, useEffect } from 'react';

const App = () => {
  const [width, set] = useState(window.innerWidth);
  const updateWidth = () => {
    set(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });
  return (
    <>
      <Canvas className="webgl">
        <color attach="background" args={['#f0f0f0']} />
        <ambientLight />
        <Header />
        <ScrollControls
          distance={1.5}
          damping={width >= 768 ? 5 : 35}
          pages={3}
        >
          {width >= 768 && <CustomScrollBar />}
          <Scroll>
            <Suspense fallback={null}>
              <Background />
              <ProfilePicture />
            </Suspense>
          </Scroll>
          <Scroll html>
            <Intro />
            <About />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default App;
