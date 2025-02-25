import Image from "next/image";

const Overview = () => {
  return (
    <div className="max-w-4xl mx-auto text-center flex flex-col gap-5">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
        About Me
      </h2>
      <div className="relative h-64 w-64 mx-auto rounded-full border-2 border-gray-900 dark:border-neutral-500 overflow-hidden">
        <Image
          src="/images/noble.jpg"
          fill
          className="object-cover"
          alt="Basil Goodluck"
        />
      </div>
      <p className="text-lg text-neutral-700 dark:text-neutral-300">
        I&apos;m Basil Goodluck, a full-stack web developer passionate about
        building modern, secure, and scalable web applications. With experience
        in both frontend and backend development, I specialize in crafting
        seamless user experiences and writing clean, maintainable code.
        I take pride in delivering high-quality work while ensuring performance,
        scalability, and security. Whether you need a pixel-perfect UI from Figma
        or a secure backend architecture, I&apos;m here to help.
      </p>
    </div>
  );
};

export default Overview;
