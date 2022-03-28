import { motion } from 'framer-motion';
import { FaGithubSquare } from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';

const Rerun = ({ variants, inview, animate }: any) => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <section className={'projects'}>
        <h2 className={'projects__title'}>PROJECTS</h2>
        <motion.div
          variants={variants}
          animate={animate.rerun ? 'show' : 'hidden'}
        >
          <div className={'projects__filler'}></div>
          <motion.div className={'projects__icon-wrapper'}>
            <FaGithubSquare
              className={'projects__icon'}
              onClick={() => window.open('https://github.com/MjxOro/Re-Run')}
            />
            <RiExternalLinkLine
              className={'projects__icon'}
              onClick={() =>
                window.open(' https://re-run-cuqwd.ondigitalocean.app/ ')
              }
            />
          </motion.div>
          <motion.h3 className="projects__sub-title" variants={inview}>
            RE-RUN
          </motion.h3>
          <motion.p variants={inview} className={'projects__text'}>
            A Peer-To-Peer Marketplace App
          </motion.p>
          <motion.p variants={inview} className={'projects__text'}>
            Full-Stack, React, Sass, Node / Express, Jwt Tokens, MongoDB
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};
export default Rerun;
