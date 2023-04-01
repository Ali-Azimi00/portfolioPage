import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from './utils/motion';

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[240px] w-full"
    >
      <motion.div
        className="min-w-[270px] mt-1 green-pink-gradient p-[1px] 
      rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px]
        py-5 px-12 min-h-[280px] flex justify-evenly
        items-center flex-col"
        >
          <img src={icon} alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="bg-tertiary rounded-[20px]
          py-5 px-12 flex justify-evenly
          items-center flex-col"
          //min-h-[280px]
          >{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", .1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a driven full stack software engineer who
        enjoys making dynamic and interactive front end
        designs. I'm always on the lookout for new systems and technologies to integrate into my work. Along with extensive experience in React,
        I have professional experience using .NET/C# and SQL
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard
            key={services.title}
            index={index}
            {...services} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")