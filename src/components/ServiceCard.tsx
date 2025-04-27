"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  onSelect: () => void;
  isSelected: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, onSelect, isSelected }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className={`relative p-6 rounded-lg cursor-pointer transition-colors ${
        isSelected
          ? 'bg-primary-500 dark:bg-primary-400 text-white'
          : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-600'
      }`}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      onClick={onSelect}
    >
      <h3 className="text-xl font-bold">{title}</h3>
    </motion.div>
  );
};

export default ServiceCard;