"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedProjectsSection = () => {
  const headlineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const sliderVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5, ease: 'easeOut' } },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, delay: 0.2, type: 'spring', stiffness: 100 } },
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A high-performance, SEO-optimized e-commerce site with seamless UX and fast load times.",
      image: "/project1.png", 
      link: "/projects/ecommerce",
    },
    {
      id: 2,
      title: "Automation Dashboard",
      description: "A custom dashboard for automating data workflows with real-time analytics.",
      image: "/project2.png",
      link: "/projects/automation",
    },
    {
      id: 3,
      title: "Discord Community Bot",
      description: "An AI-powered bot enhancing community engagement on Discord with automated features.",
      image: "/project3.png", 
      link: "/projects/discord-bot",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 py-12 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-white dark:bg-neutral-800 opacity-90"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
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
              <span className="text-neutral-800 dark:text-neutral-100 text-xl">🏆</span>
            </motion.div>
            <motion.span
              className="text-primary-500 dark:text-primary-400 text-2xl"
              whileHover={{ x: 10, transition: { type: 'spring', stiffness: 200 } }}
            >
              →
            </motion.span>
          </motion.div>
        </div>

        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-center mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headlineVariants}
        >
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-neutral-100 dark:bg-neutral-700 opacity-70 -skew-y-6"></span>
            <span className="relative">FEATURED</span>
          </span>{' '}
          <span className="text-primary-500 dark:text-primary-400">PROJECTS</span>
        </motion.h2>

        <motion.div
          className="relative"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sliderVariants}
        >
          <Slider {...sliderSettings}>
            {projects.map((project) => (
              <div key={project.id} className="px-4">
                <div className="relative bg-neutral-100 dark:bg-neutral-700 rounded-lg shadow-lg overflow-hidden">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={600}
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                        {project.description}
                      </p>
                      <motion.button
                        className="px-4 py-2 bg-primary-500 dark:bg-primary-400 text-white dark:text-neutral-800 font-semibold rounded-lg"
                        whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 200 } }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                      </motion.button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

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

export default FeaturedProjectsSection;