import React, { JSX } from 'react';

export default function ContactForm(): JSX.Element {
  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-neutral-900 dark:text-neutral-100 mb-8">
          Get in Touch
        </h2>
        <form className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 hover:bg-primary-600 transition text-white px-6 py-3 rounded-md font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
