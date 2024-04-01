import React, { useState } from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";



import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>

          {/*<button onClick={() => window.open('/src/components/login.jsx', '_blank')}>
            Login
        </button>*/}
        </div>
      </motion.div>
    </Tilt>
  );
};

const Branches = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction Of Courses </p>
        <h3 className={styles.sectionHeadText}>Rajamahendri Institute of Engineering and Technology (RIET)</h3>
      </motion.div>

     {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[30px] max-w-3xl leading-[30px]'
      >
      
  </motion.p>*/}

      <div className='mt-20 flex flex-wrap gap-10 justify-center sm:justify-start'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Branches, "branches");

