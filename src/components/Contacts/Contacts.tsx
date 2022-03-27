import { motion } from 'framer-motion';
import './Contacts.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Contacts = () => {
  const variants = {
    animate: {
      x: '-50%',
      transition: {
        repeat: Infinity,
        reapeatType: 'running',
        duration: 10,
        ease: 'linear'
      }
    }
  };
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <section className={'contacts'}>
        <h1 className={'contacts__title'}>Contacts</h1>

        <div>
          <div
            className={'contacts__socials-wrapper'}
            onClick={() =>
              window.open('https://www.linkedin.com/in/matthew-oro')
            }
          >
            <h2>LINKEDIN</h2>
            <motion.div className={'contacts__icon'}>
              <AiOutlineArrowRight />
            </motion.div>
          </div>
          <div
            className={'contacts__socials-wrapper'}
            onClick={() => window.open('https://github.com/MjxOro')}
          >
            <h2>GITHUB</h2>
            <motion.div className={'contacts__icon'}>
              <AiOutlineArrowRight />
            </motion.div>
          </div>
          <div
            className={
              'contacts__socials-wrapper contacts__socials-wrapper--last'
            }
            onClick={() =>
              (window.location.href = 'mailto:mattheweoro@gmail.com')
            }
          >
            <h2>EMAIL</h2>
            <motion.div className={'contacts__icon'}>
              <AiOutlineArrowRight />
            </motion.div>
          </div>
        </div>
        <div>
          <motion.div variants={variants} className={'contacts__marquee'}>
            <motion.h2 variants={variants} animate="animate">
              KEEP IN TOUCH • KEEP IN TOUCH • KEEP IN TOUCH • KEEP IN TOUCH •
              KEEP IN TOUCH • KEEP IN TOUCH •&nbsp;
            </motion.h2>
            <motion.h2 variants={variants} animate="animate">
              KEEP IN TOUCH • KEEP IN TOUCH • KEEP IN TOUCH • KEEP IN TOUCH •
              KEEP IN TOUCH • KEEP IN TOUCH •&nbsp;
            </motion.h2>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Contacts;
