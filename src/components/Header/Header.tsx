import './Header.scss';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import BurgerMenu from './BurgerMenu';
import { useState } from 'react';

const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  const { height, width } = useThree((s) => s.viewport);
  const { size } = useThree();
  const onClick = () => {
    setShow(!show);
  };
  //inline style webgl elements for accurate css styling
  return (
    <group>
      {size.width < 768 ? (
        <Html
          style={{ width: '100vw' }}
          position={[-width * 0.5, height * 0.5, 0]}
        >
          <nav className="header">
            <BurgerMenu state={show} onClick={onClick} />
            <div>Socials</div>
          </nav>
        </Html>
      ) : (
        <Html
          style={{ height: '100vh' }}
          position={[-width * 0.5, height * 0.5, 0]}
        >
          <nav className="header">
            <BurgerMenu state={show} onClick={onClick} />
            <div>Socials</div>
          </nav>
        </Html>
      )}
    </group>
  );
};
export default Header;
