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
import Projects, { Banner } from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';

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
      <Canvas
        className="webgl"
        linear
        dpr={(Math.min(window.devicePixelRatio), 2)}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#f0f0f0']} />
          <Header />
          <ScrollControls damping={width >= 768 ? 5 : 35} pages={6}>
            {width >= 768 && <CustomScrollBar />}
            <Scroll>
              <Background />
              <ProfilePicture />
              <Banner />
            </Scroll>
            <Scroll html>
              <Intro />
              <About />
              <Projects />
              <Contacts />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
