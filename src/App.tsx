import './App.scss';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import CustomScrollBar from './components/CustomScrollBar/CustomScrollBar';
import Intro from './components/Intro/Intro';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Canvas className="webgl">
        <Header />
        <ScrollControls pages={3}>
          <CustomScrollBar />
          <Intro />
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default App;
