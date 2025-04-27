"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFingerprint, FaGlobe, FaMobileAlt, FaPaintBrush, FaIcons, FaCode } from 'react-icons/fa';

const services = [
    {
      title: "Brand Identity",
      description: "We create unique and powerful brand identities that help companies achieve their goals and stand out amongst the competition.",
      icon: <FaFingerprint className="text-4xl text-primary-500 dark:text-primary-400" />,
    },
    {
      title: "Web Design",
      description: "We help companies craft captivating websites. Our designs tell stories and guide users, from vision to action.",
      icon: <FaGlobe className="text-4xl text-primary-500 dark:text-primary-400" />,
    },
    {
      title: "Mobile Design",
      description: "We design mobile and responsive web experiences, allowing users to interact with apps in a way that feels effortless.",
      icon: <FaMobileAlt className="text-4xl text-primary-500 dark:text-primary-400" />,
    },
    {
      title: "Illustration",
      description: "We create visual stories that help explain your mission and vision.",
      icon: <FaPaintBrush className="text-4xl text-primary-500 dark:text-primary-400" />,
    },
    {
      title: "Iconography",
      description: "Icons that support the brand and help simplify your message.",
      icon: <FaIcons className="text-4xl text-primary-500 dark:text-primary-400" />,
    },
    {
      title: "Development",
      description: "Solve any design challenge in Webflow. If you can dream it, we can build it.",
      icon: <FaCode className="text-4xl text-primary-500 dark:text-primary-400" />,
    },
  ];

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Container animation for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card animation for entrance and hover
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-16 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          Services We Provide
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-4"
              variants={cardVariants}
              whileHover="hover"
            >
              <div
                className="bg-white dark:bg-neutral-700 rounded-lg shadow-lg p-6 h-64 flex flex-col justify-center items-start"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/heroBg.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-neutral-100 dark:text-neutral-100 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-300 dark:text-neutral-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;