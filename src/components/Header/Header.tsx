import './Header.scss';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import BurgerMenu from './BurgerMenu';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import useStore from '../../utils/store';

const Header = () => {
  const { height, width } = useThree((s) => s.viewport);
  const { size } = useThree();
  const { showSidebar } = useStore();
  const onClick = () => {
    useStore.setState({ showSidebar: !showSidebar });
  };
  //inline style webgl elements for accurate css styling
  return (
    <group>
      {size.width < 768 ? (
        <Html
          style={{ width: '100vw' }}
          position={[-width * 0.5, height * 0.5, 0]}
        >
          <nav className={`header ${showSidebar && 'header--show-sidebar'}`}>
            <BurgerMenu state={showSidebar} onClick={onClick} />
          </nav>
        </Html>
      ) : (
        <Html
          style={{ height: `100vh` }}
          position={[-width * 0.5, height * 0.5, 0]}
        >
          <nav className={`header ${showSidebar && 'header--show-sidebar'}`}>
            <BurgerMenu state={showSidebar} onClick={onClick} />
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
          </nav>
        </Html>
      )}
    </group>
  );
};
export default Header;
