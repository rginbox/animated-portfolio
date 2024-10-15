import { useRef, useState } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [service, setService] = useState("");

  const handleSelect = (serviceName) => {
    setService(serviceName);
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          We help your brand <strong>grow</strong> and move <strong>forward</strong>.
          <br />
          <a href="#learnMore" style={{ color: "orange" }}>
            Learn More
          </a>
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="People" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business
          </h1>
          <button onClick={() => alert("Discover our services!")}>
            WHAT WE DO?
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {["Branding", "Marketing", "Development", "Design"].map((serviceName, index) => (
          <motion.div
            className="box"
            key={index}
            whileHover={{ background: "lightgray", color: "black" }}
            onClick={() => handleSelect(serviceName)}
          >
            <h2>{serviceName}</h2>
            <p>
              Looking for amazing {serviceName.toLowerCase()} services? Click here to
              know more about how we can help you with {serviceName.toLowerCase()}!
            </p>
            <button onClick={() => alert(`${serviceName} Services`)}>Explore</button>
          </motion.div>
        ))}
      </motion.div>
      {service && (
        <motion.div
          className="selectedService"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>You selected: {service}</h2>
          <p>
            Interested in {service}?{" "}
            <a href={`#${service.toLowerCase()}Details`} style={{ color: "orange" }}>
              Click here
            </a>{" "}
            to learn more or contact us for more details!
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Services;
