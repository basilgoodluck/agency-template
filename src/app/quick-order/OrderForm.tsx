"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  budget: string;
  details: string;
}

interface OrderFormProps {
  selectedService: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isSubmitted: boolean;
}

const OrderForm: React.FC<OrderFormProps> = ({ selectedService, onSubmit, formData, onInputChange, isSubmitted }) => {
  const formVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.5 } },
  };

  const successVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-white dark:bg-neutral-800">
      <motion.div
        className="bg-neutral-100 dark:bg-neutral-700 rounded-lg p-6 max-w-2xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-100">
          Order: <span className="text-primary-500 dark:text-primary-400">{selectedService}</span>
        </h2>

        {isSubmitted ? (
          <motion.div
            className="text-center text-primary-500 dark:text-primary-400"
            initial="hidden"
            animate="visible"
            variants={successVariants}
          >
            <p className="text-lg">Thank you! Your order has been submitted. We’ll get back to you soon!</p>
          </motion.div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-neutral-800 dark:text-neutral-100">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={onInputChange}
                className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-600"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-neutral-800 dark:text-neutral-100">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={onInputChange}
                className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-600"
                required
              />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-1 text-neutral-800 dark:text-neutral-100">
                Budget (USD)
              </label>
              <input
                type="number"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={onInputChange}
                className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-600"
                required
                min="0"
              />
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-medium mb-1 text-neutral-800 dark:text-neutral-100">
                Project Details
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={onInputChange}
                className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-600"
                rows={4}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-primary-500 dark:bg-primary-400 text-white font-bold py-3 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Order
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default OrderForm;