import { motion } from 'framer-motion';
import { FaGithubSquare } from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';

const Send = ({ variants, inview, animate }: any) => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <section className={'projects'}>
        <h1></h1>
        <motion.div
          variants={variants}
          animate={animate.send ? 'show' : 'hidden'}
        >
          <div className={'projects__filler'}></div>
          <motion.div className={'projects__icon-wrapper'}>
            <FaGithubSquare
              className={'projects__icon'}
              onClick={() => window.open('https://github.com/MjxOro/Send')}
            />
            <RiExternalLinkLine
              className={'projects__icon'}
              onClick={() =>
                window.open('https://send-messaging-app.herokuapp.com/')
              }
            />
          </motion.div>
          <h2>SEND</h2>
          <motion.p variants={inview} className={'projects__text'}>
            Messenger app
          </motion.p>
          <motion.p variants={inview} className={'projects__text'}>
            Full-Stack, React, Typescript, Node / Express, OAuth, MongoDB, Web
            Sockets, Google Api
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};
export default Send;
