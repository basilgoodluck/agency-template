"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';

// Interface for service
interface Service {
  title: string;
}

// Props for ServiceSelection
interface ServiceSelectionProps {
  onSelect: (service: Service) => void;
  selectedService: string | null;
}

// Props for ServiceCard (inferred from usage)
interface ServiceCardProps {
  title: string;
  onSelect: () => void;
  isSelected: boolean;
}

// Predefined services
const services: Service[] = [
  { title: 'E-commerce Development' },
  { title: 'Landing Page' },
  { title: 'Custom Web App' },
  { title: 'Portfolio Website' },
];

const ServiceSelection: React.FC<ServiceSelectionProps> = ({ onSelect, selectedService }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-16 bg-white dark:bg-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Choose Your Service
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              onSelect={() => onSelect(service)}
              isSelected={selectedService === service.title}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSelection;