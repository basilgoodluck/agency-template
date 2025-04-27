"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import ServiceSelection from './ServiceSelection';
import OrderForm from './OrderForm';

// Interface for form data
interface FormData {
  name: string;
  email: string;
  budget: string;
  details: string;
}

// Interface for service (inferred from handleServiceSelect)
interface Service {
  title: string;
}

// Props for ServiceSelection (inferred from usage)
interface ServiceSelectionProps {
  onSelect: (service: Service) => void;
  selectedService: string | null;
}

// Props for OrderForm (inferred from usage)
interface OrderFormProps {
  selectedService: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isSubmitted: boolean;
}

const QuickOrder: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    budget: '',
    details: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service.title);
    setIsSubmitted(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', budget: '', details: '' });
  };

  // Animation variants
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
    <div className="min-h-screen text-neutral-800 dark:text-neutral-100">
      {/* Full-screen Quick Order Section */}
      <section
        ref={ref}
        className="relative flex items-center justify-center min-h-screen bg-white dark:bg-neutral-800 p-6 pt-20 pb-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-200 to-primary-300 dark:from-neutral-800 dark:to-neutral-900">
          <img
            src="/images/heroBg.png"
            alt="Background"
            className="relative z-10 w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Decorative Icon (Top Left) */}
        <motion.div
          className="absolute top-8 left-8 flex items-center space-x-2 z-50"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={iconVariants}
        >
          <Link href="/services">
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

        {/* Main Content */}
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-6xl md:text-6xl font-bold leading-tight text-neutral-900 dark:text-neutral-100"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={headlineVariants}
          >
            QUICK <span className="text-primary-500 dark:text-primary-400">ORDER</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-neutral-900 dark:text-neutral-300"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            Select a service and place your order in minutes. From e-commerce platforms to custom web apps, we bring your vision to life with precision and speed.
          </motion.p>
        </div>

        {/* Decorative Slash (Bottom Right) */}
        <motion.div
          className="absolute bottom-8 right-8 text-4xl text-primary-500 dark:text-primary-400"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={iconVariants}
        >
          {"</>"}
        </motion.div>
      </section>

      {/* Service Selection and Form */}
      <ServiceSelection onSelect={handleServiceSelect} selectedService={selectedService} />
      {selectedService && (
        <OrderForm
          selectedService={selectedService}
          onSubmit={handleSubmit}
          formData={formData}
          onInputChange={handleInputChange}
          isSubmitted={isSubmitted}
        />
      )}
    </div>
  );
};

export default QuickOrder;