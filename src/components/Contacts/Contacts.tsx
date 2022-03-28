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
        <h2 className={'contacts__title'}>Contacts</h2>

        <div>
          <div
            className={'contacts__socials-wrapper'}
            onClick={() =>
              window.open('https://www.linkedin.com/in/matthew-oro')
            }
          >
            <h4 className={'contacts__socials'}>LINKEDIN</h4>
            <motion.div className={'contacts__icon'}>
              <AiOutlineArrowRight />
            </motion.div>
          </div>
          <div
            className={'contacts__socials-wrapper'}
            onClick={() => window.open('https://github.com/MjxOro')}
          >
            <h4 className={'contacts__socials'}>GITHUB</h4>
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
            <h4 className={'contacts__socials'}>EMAIL</h4>
            <motion.div className={'contacts__icon'}>
              <AiOutlineArrowRight />
            </motion.div>
          </div>
        </div>
        <div>
          <motion.div variants={variants} className={'contacts__marquee'}>
            <motion.h4
              className={'contacts__marquee-text'}
              variants={variants}
              animate="animate"
            >
              KEEP IN TOUCH • KEEP IN TOUCH • KEEP IN TOUCH • KEEP IN TOUCH •
              KEEP IN TOUCH • KEEP IN TOUCH •&nbsp;
            </motion.h4>
            <motion.h4
              className={'contacts__marquee-text'}
              variants={variants}
              animate="animate"
            >
              KEEP IN TOUCH • KEEP IN TOUCH • KEEP IN TOUCH • KEEP IN TOUCH •
              KEEP IN TOUCH • KEEP IN TOUCH •&nbsp;
            </motion.h4>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Contacts;
