import React, { useState } from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import Login from "../components/login";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h3 className={styles.sectionHeadText}>Rajamahendri Institute of Engineering and Technology (RIET)</h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-9xl leading-[30px]'
      >
        RIET College, a beacon of knowledge, is a premier institution sponsored by the esteemed **Swarnandhra Educational Society** of Narsapur.
        Established in 2008 by a group of technocrats, academicians, and philanthropists, RIET College has been committed to providing excellence in 
        technical education, catering to the evolving needs of the corporate sector.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-9xl leading-[30px]'
      >
        Our college is equipped with state-of-the-art facilities, including a comprehensive CCTV surveillance system, ensuring a safe and secure learning 
        environment for our students. We host a variety of games events, fostering a spirit of healthy competition and teamwork among our students. Our curriculum
        is designed to equip students with the necessary skills and knowledge to excel in their chosen fields.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-9xl leading-[30px]'
      >
        At RIET College, we believe in nurturing the potential of each student, providing them with the opportunity to explore, learn, and grow. Our partnership 
        with the Swarnandhra Educational Society enables us to offer a robust educational experience that prepares our students for the challenges of the future. 
        We invite you to join us on this journey of learning and discovery.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-9xl leading-[30px]'
      >
        At RIET College, we understand the importance of staying abreast with the latest trends in technology. Our Computer Science and Engineering (CSE) 
        department offers specialized branches in Artificial Intelligence (AI) and Machine Learning (ML). 
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-9xl leading-[30px]'
      >
        These disciplines are at the forefront of modern technology and have a wide range of applications, from predictive analytics to autonomous systems.
        Our curriculum is designed to provide students with a deep understanding of these subjects, equipping them with the skills needed to excel in these 
        rapidly evolving fields.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-9xl leading-[30px]'
      >
        We believe that the integration of AI and ML into our CSE program will empower our students to contribute significantly to the technological advancements 
        of the future. At RIET College, we are committed to providing our students with a comprehensive education that is in tune with the demands of the industry.
      </motion.p>

      {/*<div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>*/}
    </>
  );
};

export default SectionWrapper(About, "about");
