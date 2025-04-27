"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const BotDevelopmentSection = () => {
  // Animation variants for the headline
  const headlineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  // Animation variants for the description and CTAs
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5, ease: 'easeOut' } },
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.7, ease: 'easeOut' } },
  };

  // Animation variants for the icon and decorative elements
  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, delay: 0.2, type: 'spring', stiffness: 100 } },
  };

  // Use Intersection Observer to detect when section is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow multiple triggers
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center min-h-screen bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 p-6 overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-white dark:bg-neutral-800 opacity-90"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left Side: Content and CTAs */}
        <div className="md:w-1/2 space-y-8">
          {/* Decorative Icon (Top Left) */}
          <motion.div
            className="flex items-center space-x-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={iconVariants}
          >
            <motion.div
              className="w-10 h-10 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2, rotate: 15, transition: { type: 'spring', stiffness: 200 } }}
            >
              <span className="text-neutral-800 dark:text-neutral-100 text-xl">🤖</span>
            </motion.div>
            <motion.span
              className="text-primary-500 dark:text-primary-400 text-2xl"
              whileHover={{ x: 10, transition: { type: 'spring', stiffness: 200 } }}
            >
              →
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={headlineVariants}
          >
            ENGAGE WITH
            <br />
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-neutral-100 dark:bg-neutral-700 opacity-70 -skew-y-6"></span>
              <span className="relative">SMART</span>
            </span>{' '}
            <span className="text-primary-500 dark:text-primary-400">BOTS</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-sm md:text-base max-w-lg text-neutral-800 dark:text-neutral-100"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            Transform user engagement with intelligent bots for Discord, Telegram, and custom chatbot solutions. Our bots leverage robust APIs and AI to automate tasks, manage communities, and enhance customer support. Build seamless, interactive experiences that keep your audience connected and engaged.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex space-x-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <Link href="/contact">
              <motion.button
                className="px-6 py-3 bg-primary-500 dark:bg-primary-400 text-white dark:text-neutral-800 font-semibold rounded-lg"
                whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 200 } }}
                whileTap={{ scale: 0.95 }}
              >
                Build a Bot
              </motion.button>
            </Link>
            <Link href="/portfolio">
              <motion.button
                className="px-6 py-3 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 font-semibold rounded-lg"
                whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 200 } }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Bots
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <div className="relative w-full max-w-md">
            <span className="absolute inset-0 bg-neutral-100 dark:bg-neutral-700 opacity-70 -skew-y-6"></span>
            <Image
              src="/images/bot.jpg" // Replace with actual image path
              alt="Bot Development Illustration"
              width={500}
              height={500}
              className="relative z-10 rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Slash (Bottom Right) */}
      <motion.div
        className="absolute bottom-8 right-8 text-6xl text-primary-500 dark:text-primary-400"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={iconVariants}
      >
        /
      </motion.div>
    </section>
  );
};

export default BotDevelopmentSection;