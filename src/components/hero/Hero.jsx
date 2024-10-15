import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.15,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const nameVariants = {
  initial: {
    scale: 0.5,
    opacity: 0,
  },
  animate: {
    scale: [1, 1.2, 1], // bounce effect
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {/* Name with increased size and bounce effect */}
          <motion.h2 variants={nameVariants} className="name">
            Rakesh Gupta
          </motion.h2>
          
          {/* Title */}
          <motion.h1 variants={textVariants} className="title">
            Full Stack Web Developer
          </motion.h1>
          
          {/* Call to Action buttons with hover animation */}
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1, backgroundColor: "#ff6464" }}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1, backgroundColor: "#6495ED" }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          
          {/* Scroll down indicator */}
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll down"
            className="scrollIcon"
          />
        </motion.div>
      </div>
      
      {/* Sliding text with improved animation */}
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer | Content Creator | Influencer
      </motion.div>
      
      {/* Hero image */}
      <div className="imageContainer">
        <img src="/hero.png" alt="Hero" className="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
