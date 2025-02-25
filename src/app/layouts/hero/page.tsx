import './component/style.scss'
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function Hero() {
    return (
      <section className="max-w-4xl mx-auto bg-neutral-50 dark:bg-neutral-900 py-20 px-4 space-y-8 text-center">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 uppercase ">
          Halo <span className="bounce">👋</span>
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
        I&apos;m a full-stack developer crafting captivating digital experiences and dynamic Discord bots—my T-shaped skills turn creative ideas into reality.
        </p>
        <div className='flex items-center gap-2 justify-center'>
          <a
            href="#projects"
            className="inline-block bg-transparent  dark:text-neutral-100 text-neutral-900 px-6 py-3 rounded border-2 border-gray-900 dark:border-neutral-50 transition"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="inline-block bg-transparent  dark:text-neutral-100 text-neutral-900 px-6 py-3 rounded border-2 border-gray-900 dark:border-neutral-50 transition"
          >
            See My Work
          </a>
        </div>
        <div className='flex gap-3 items-center justify-center'>
          <a href='https://github.com/basilgoodluck' target='_blank' className='rounded-full p-3 border-2 border-gray-900 dark:border-neutral-50 transition'>
          <FaGithub className='text-2xl' />
          </a>
          <a href='https://github.com/basilgoodluck' target='_blank' className='rounded-full p-3 border-2 border-gray-900 dark:border-neutral-50 transition'>
          <BsTwitterX className='text-2xl' />
          </a>
          <a href='https://github.com/basilgoodluck' target='_blank' className='rounded-full p-3 border-2 border-gray-900 dark:border-neutral-50 transition'>
          <FaTelegramPlane className='text-2xl' />
          </a>
          <a href='https://github.com/basilgoodluck' target='_blank' className='rounded-full p-3 border-2 border-gray-900 dark:border-neutral-50 transition'>
          <FaLinkedinIn className='text-2xl' />
          </a>
        </div>
      </section>
    )
  }
  