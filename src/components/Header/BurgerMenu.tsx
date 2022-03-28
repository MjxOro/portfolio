import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Burger = ({ state, onClick }: any) => {
  const [animate, setAnimate] = useState({ top: {}, bottom: {} });

  const handleMouseEnter = () => {
    if (!state) setAnimate({ top: { y: -4 }, bottom: { y: 4 } });
  };
  const handleMouseLeave = () => {
    if (!state) setAnimate({ top: { y: 0 }, bottom: { y: 0 } });
  };
  const handleClick = () => {
    // Click State for Menu here
    onClick();
  };
  useEffect(() => {
    if (state) {
      setAnimate({
        top: { rotate: 405, y: 5 },
        bottom: { rotate: -405, y: -5 }
      });
    } else {
      setAnimate({
        top: { rotate: 0, y: 0 },
        bottom: { rotate: 0, y: 0 }
      });
    }
  }, [state]);
  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="header__menu-icon-wrapper"
    >
      <motion.span
        animate={animate.top}
        className="header__menu-icon"
      ></motion.span>
      <motion.span
        animate={animate.bottom}
        className="header__menu-icon"
      ></motion.span>
    </div>
  );
};
export default Burger;
