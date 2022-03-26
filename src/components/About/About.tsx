import './About.scss';
import { useScroll } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

const About = () => {
  const scroll = useScroll();
  const animateRange = useRef(false);
  const [animate, set] = useState(true);
  useFrame(() => {
    animateRange.current = scroll.visible(1 / 12, 1);
    animateRange.current !== animate && set(animateRange.current);
  });
  const wrapper = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    hidden: { opacity: 0 }
  };
  const inview = {
    show: { opacity: 1, y: 0, transition: { ease: 'easeIn', duration: 0.3 } },
    hidden: { opacity: 0, y: 100 }
  };
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <motion.section
        variants={wrapper}
        animate={animate ? 'show' : 'hidden'}
        className={'about'}
      >
        <motion.h1 variants={inview}>ABOUT</motion.h1>
        <motion.p className={'about__description'} variants={inview}>
          Hello! My name is Matthew and I am a web-developer. I studied
          mechanical engineering for 3 years until I decided to switch into
          becoming a developer. With this background, I apply engineering
          practices and 3D modelling skills into web development. I enjoy
          expressing my skills in problem solving and creativity as I build
          applications.
        </motion.p>
        <motion.h3 variants={inview}>CURRENT TECH-STACK</motion.h3>
        <motion.div variants={inview} className={'about__skills-wrapper'}>
          <p>HTML</p>
        </motion.div>
        <motion.div variants={inview} className={'about__skills-wrapper'}>
          <p>CSS / SASS / TAILWINDCSS</p>
        </motion.div>
        <motion.div variants={inview} className={'about__skills-wrapper'}>
          <p>JAVASCRIPT / TYPESCRIPT</p>
        </motion.div>
        <motion.div variants={inview} className={'about__skills-wrapper'}>
          <p>REACT / NEXT</p>
        </motion.div>
        <motion.div
          variants={inview}
          className={'about__skills-wrapper about__skills-wrapper--last'}
        >
          <p>MONGODB</p>
        </motion.div>
      </motion.section>
    </div>
  );
};
export default About;
