import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

export default function Footer() {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: 'spring', stiffness: 100 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <footer
      ref={ref}
      className="w-full bg-gray-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <motion.div
          className="flex flex-wrap gap-4 items-center justify-center mb-6"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.a
            href="https://github.com/basilgoodluck"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 border-2 border-neutral-800 dark:border-neutral-100 hover:bg-primary-500 dark:hover:bg-primary-400 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaGithub className="text-2xl text-neutral-800 dark:text-neutral-100 hover:text-white dark:hover:text-white" />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 border-2 border-neutral-800 dark:border-neutral-100 hover:bg-primary-500 dark:hover:bg-primary-400 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <BsTwitterX className="text-2xl text-neutral-800 dark:text-neutral-100 hover:text-white dark:hover:text-white" />
          </motion.a>
          <motion.a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 border-2 border-neutral-800 dark:border-neutral-100 hover:bg-primary-500 dark:hover:bg-primary-400 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaTelegramPlane className="text-2xl text-neutral-800 dark:text-neutral-100 hover:text-white dark:hover:text-white" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 border-2 border-neutral-800 dark:border-neutral-100 hover:bg-primary-500 dark:hover:bg-primary-400 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaLinkedinIn className="text-2xl text-neutral-800 dark:text-neutral-100 hover:text-white dark:hover:text-white" />
          </motion.a>
        </motion.div>

        <motion.p
          className="text-sm text-neutral-600 dark:text-neutral-400"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={textVariants}
        >
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}