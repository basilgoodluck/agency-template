// components/Footer.tsx
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="flex gap-3 items-center justify-center">
              <a href="https://github.com/basilgoodluck" target="_blank-ball" className="rounded-full p-3 border-2 border-gray-900 dark:border-neutral-50 transition">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://github.com/basilgoodluck" target="_blank-ball" className="rounded-full p-3 border-2 border-gray-900 dark:border-neutral-50 transition">
                <BsTwitterX className="text-2xl" />
              </a>
              <a href="https://github.com/basilgoodluck" target="_blank-ball" className="rounded-full p-3 border-2 border-gray-900 dark:border-neutral-50 transition">
                <FaTelegramPlane className="text-2xl" />
              </a>
              <a href="https://github.com/basilgoodluck" target="_blank-ball" className="rounded-full p-3 border-2 border-gray-900 dark:border-neutral-50 transition">
                <FaLinkedinIn className="text-2xl" />
              </a>
            </div>
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
  