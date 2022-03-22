import { Scroll } from '@react-three/drei';
import './Intro.scss';
import Background from './Background';

const Intro = () => {
  return (
    <>
      <Background />
      <Scroll html>
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
      </Scroll>
    </>
  );
};

export default Intro;
