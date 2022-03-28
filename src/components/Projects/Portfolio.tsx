import { motion } from 'framer-motion';
import { FaGithubSquare } from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';

const Portfolio = ({ variants, inview, animate }: any) => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <section className={'projects'}>
        <h1></h1>
        <motion.div
          variants={variants}
          animate={animate.portfolio ? 'show' : 'hidden'}
        >
          <div className={'projects__filler'}></div>
          <motion.div className={'projects__icon-wrapper'}>
            <FaGithubSquare
              className={'projects__icon'}
              onClick={() => window.open('https://github.com/MjxOro/portfolio')}
            />
            <RiExternalLinkLine
              className={'projects__icon'}
              onClick={() => window.open('https://mattheworo.site')}
            />
          </motion.div>
          <motion.h3 className={'projects__sub-title'} variants={inview}>
            PORTFOLIO WEBSITE
          </motion.h3>
          <motion.p variants={inview} className={'projects__text'}>
            Website About My Recent Work
          </motion.p>
          <motion.p variants={inview} className={'projects__text'}>
            Front-End, React, Typescript, Webgl, Design
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};
export default Portfolio;
