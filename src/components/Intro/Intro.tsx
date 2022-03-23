import './Intro.scss';
import { useFrame } from '@react-three/fiber';

const Intro = () => {
  useFrame(() => {});
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <section className={'hero'}>
        <div className={'hero__text-wrapper hero__text-wrapper--first'}>
          <h1 className={'hero__title hero__title--first'}>MATTHEW ORO</h1>
        </div>
        <div className={'hero__text-wrapper hero__text-wrapper--second'}>
          <h1 className={'hero__title hero__title--second'}>FULL STACK</h1>
        </div>
        <div className={'hero__text-wrapper hero__text-wrapper--third'}>
          <h1 className={'hero__title hero__title--third'}>DEVELOPER</h1>
        </div>
      </section>
    </div>
  );
};

export default Intro;
