import './component/style.scss'
import Image from "next/image"

export default function Hero() {
    return (
      <section className="max-w-4xl mx-auto bg-neutral-50 dark:bg-neutral-900 py-4 px-4">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center">
            <Image 
              src="/images/hello.png" 
              alt="hello image" 
              width={200} 
              height={200} 
              className="w-54"
            />
          </div>
          
          <div className="space-y-4 text-center ">
            
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
            I&apos;m Basil Goodluck, a full-stack web developer passionate about
        building modern, secure, and scalable web applications. With experience
        in both frontend and backend development, I specialize in crafting
        seamless user experiences and writing clean, maintainable code.
        I take pride in delivering high-quality work while ensuring performance,
        scalability, and security. Whether you need a pixel-perfect UI from Figma
        or a secure backend architecture, I&apos;m here to help.
            </p>
            <div className="flex items-center gap-2 justify-center">
              <a
                href="#projects"
                className="inline-block bg-transparent dark:text-neutral-100 text-neutral-900 px-6 py-3 rounded border-2 border-gray-900 dark:border-neutral-50 transition"
              >
                Resume
              </a>
              <a
                href="#projects"
                className="inline-block bg-transparent dark:text-neutral-100 text-neutral-900 px-6 py-3 rounded border-2 border-gray-900 dark:border-neutral-50 transition"
              >
                See My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}