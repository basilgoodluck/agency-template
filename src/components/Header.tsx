"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

type HeaderProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export default function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <div className="fixed top-4 left-0 right-0 z-20 flex justify-center">
      <header className="bg-primary-100 dark:bg-neutral-800 shadow-lg rounded-b-lg mx-4 mt-0">
        <div className="px-6 py-4 flex items-center justify-between space-x-8 shadow-md dark:shadow-neutral-600 shadow-gray-400 rounded-lg">
          {/* Logo/Icon Button */}
          <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
            <Link href="/">
              <span className="text-2xl text-primary-500 dark:text-primary-400">
                {"</>"}
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-neutral-800 dark:text-neutral-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-neutral-800 dark:text-neutral-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/quick-order"
                  className="text-neutral-800 dark:text-neutral-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Quick Order
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-800 dark:text-neutral-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
            ) : (
              <Moon className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
            )}
          </button>
        </div>
      </header>
    </div>
  );
}