import useStore from '../../utils/store';
import { MouseEvent } from 'react';
import { Html, MeshWobbleMaterial, useScroll } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { a, useSpring, easings } from '@react-spring/three';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Sidebar = ({ left }: { left?: boolean; top?: boolean }) => {
  const { showSidebar: state } = useStore();
  const { width, height } = useThree((s) => s.viewport);
  const { size } = useThree();
  const startLeft =
    size.width < 768
      ? [
          //{ position: state ? [-width * 0.55, 0, 4] : null },
          { position: state ? [0, 0, 4] : null },
          { position: !state ? [0, height, 4] : null }
        ]
      : [
          //{ position: state ? [-width * 0.55, 0, 4] : null },
          { position: state ? [0, 0, 4] : null },
          { position: !state ? [-width, 0, 4] : null }
        ];
  const startRight = [
    { position: state ? [width * 0.55, 0, 4] : null },
    { position: state ? [0, 0, 4] : null },
    { position: !state ? [width, 0, 4] : null }
  ];
  const springs: any = useSpring({
    from: { position: left ? [-width, 0, 4] : [width, 0, 4] },
    to: left ? startLeft : startRight,
    config: {
      duration: 800,
      easing: easings.easeInOutExpo
    }
  });
  const scroll = useScroll();
  const handleClick = (e: MouseEvent<HTMLParagraphElement>) => {
    const target = e.target as HTMLElement;
    if (target.innerText.toLowerCase() === 'about') {
      scroll.el.scrollTo(0, window.innerWidth);
      useStore.setState({ showSidebar: false });
    } else if (target.innerText.toLowerCase() === 'projects') {
      scroll.el.scrollTo(0, window.innerWidth * 3);
      useStore.setState({ showSidebar: false });
    } else if (target.innerText.toLowerCase() === 'contacts') {
      scroll.el.scrollTo(0, scroll.el.scrollHeight);
      useStore.setState({ showSidebar: false });
    }
  };
  return (
    <a.mesh scale={[width / 2, height / 2, 1]} {...springs}>
      <planeBufferGeometry args={[1, 1, 120, 120]} />
      <MeshWobbleMaterial factor={0.1} speed={1} color={'#232b2b'} />
      <Html zIndexRange={[1, 5]} center position={[0, 0, 0]}>
        <div className={'header__options-wrapper'}>
          <h2 onClick={handleClick} className="header__options">
            About
          </h2>
          <h2 onClick={handleClick} className="header__options">
            Projects
          </h2>
          <h2 onClick={handleClick} className="header__options">
            Contacts
          </h2>
          {size.width < 768 && (
            <nav className={'header__icon-wrapper'}>
              <div
                className={'header__icon'}
                onClick={() => window.open('https://github.com/MjxOro')}
              >
                <FaGithubSquare />
              </div>
              <div
                className={'header__icon'}
                onClick={() =>
                  window.open('https://linkedin.com/in/matthew-oro')
                }
              >
                <FaLinkedin />
              </div>
              <div
                className={'header__icon'}
                onClick={() => window.open('https://twitter.com/OroMatthew')}
              >
                <FaTwitterSquare />
              </div>
            </nav>
          )}
        </div>
      </Html>
    </a.mesh>
  );
};
export default Sidebar;
