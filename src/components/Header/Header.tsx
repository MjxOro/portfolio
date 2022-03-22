import './Header.scss';
import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import BurgerMenu from './BurgerMenu';
import { useState } from 'react';

const Header = () => {
  const [burger, setBurger] = useState<boolean>(false);
  const { height, width } = useThree((s) => s.viewport);
  //inline style webgl elements for accurate css styling
  return (
    <Html style={{ width: '100vw' }} position={[-width * 0.5, height * 0.5, 0]}>
      <nav className="header">
        <BurgerMenu state={burger} />
        <div>Socials</div>
      </nav>
    </Html>
  );
};
export default Header;
