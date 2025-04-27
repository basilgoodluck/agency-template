"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Hero = () => {
  const headlineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1, ease: 'easeOut' } },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, delay: 0.2, type: 'spring', stiffness: 100 } },
  };

  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center min-h-screen bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 p-6 overflow-hidden pt-20 pb-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-200 to-primary-300 dark:from-neutral-800 dark:to-neutral-900">
        <Image 
          src="/images/heroBg.png" 
          alt="Your image" 
          width={200}
          height={200}
          className="relative z-10 w-full h-full object-cover opacity-50" 
        />
      </div>
      
      <motion.div
        className="absolute top-8 left-8 flex items-center space-x-2 z-50"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={iconVariants}
      >
        <Link href="/projects" >
          <motion.div
            className="w-12 h-12 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.2, rotate: 15, transition: { type: 'spring', stiffness: 200 } }}
          >
            <span className="text-neutral-800 dark:text-neutral-100 text-2xl">💻</span>
          </motion.div>
        </Link>
        <motion.span
          className="text-primary-500 dark:text-primary-400 text-2xl"
          whileHover={{ x: 10, transition: { type: 'spring', stiffness: 200 } }}
        >
          →
        </motion.span>
      </motion.div>

      <div className="relative z-10 text-center">
        <motion.h1
          className="text-6xl md:text-6xl font-bold leading-tight"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headlineVariants}
        >
          BUILDING <span className="text-primary-500 dark:text-primary-400">SCALABLE</span>
          <br />
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-neutral-100 dark:bg-neutral-700 opacity-70 -skew-y-6"></span>
            <span className="relative">SOLUTIONS</span>
          </span>{' '}
          WITH
          <br />
          CODE & <span className="text-primary-500 dark:text-primary-400">PRECISION</span>
        </motion.h1>

        <motion.div
          className="relative mt-6 max-w-2xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
        >
          <div className="relative inline-block">
            <span className="absolute inset-0 bg-transparent opacity-70 -ske-y-6 shadow-2xl rounded-2xl shadow-gray-400 dark:shadow-neutral-500"></span>
            <p className="relative text-neutral-900 dark:text-white text-sm md:text-base px-4 py-2">
              Passionate about crafting clean, efficient code to solve real-world problems. Specializing in web development, scripting, and automation, we bring ideas to life with scalable, user-friendly solutions. Let’s build something extraordinary together!
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 right-8 text-4xl text-primary-500 dark:text-primary-400"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={iconVariants}
      >
        {"</>"}
      </motion.div>
    </section>
  );
};

export default Hero;