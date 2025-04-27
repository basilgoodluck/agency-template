"use client"

import React, { JSX, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 bg-gray-100 dark:bg-neutral-900 overflow-x-hidden"
    >
      <div className="max-w-full sm:max-w-2xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-8"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          Get in <span className="text-primary-500 dark:text-primary-400">Touch</span>
        </motion.h2>

        <motion.div
          className="bg-neutral-100 dark:bg-neutral-700 rounded-lg p-6 sm:p-8 shadow-sm"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fieldVariants}
        >
          {isSubmitted ? (
            <motion.div
              className="text-center text-primary-500 dark:text-primary-400"
              initial="hidden"
              animate="visible"
              variants={successVariants}
            >
              <p className="text-lg">Thank you! Your message has been sent. We’ll get back to you soon!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <motion.div variants={fieldVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm sm:text-base"
                />
              </motion.div>
              <motion.div variants={fieldVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm sm:text-base"
                />
              </motion.div>
              <motion.div variants={fieldVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm sm:text-base resize-none"
                  style={{ resize: 'none' }}
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-primary-500 dark:bg-primary-400 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 dark:hover:bg-primary-300 transition-colors"
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}