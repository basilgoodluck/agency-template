import React, { JSX } from 'react';

import NextjsIcon from '@/app/assets/svgs/nextjs.svg';
import ReactIcon from '@/app/assets/svgs/react.svg';
import NodejsIcon from '@/app/assets/svgs/nodejs.svg';
import ExpressIcon from '@/app/assets/svgs/express.svg';
import TypescriptIcon from '@/app/assets/svgs/typescript.svg';
import MongodbIcon from '@/app/assets/svgs/mongodb.svg';
import TailwindIcon from '@/app/assets/svgs/tailwindcss.svg';
import DockerIcon from '@/app/assets/svgs/docker.svg';
import GitIcon from '@/app/assets/svgs/git.svg';
import VsCodeIcon from '@/app/assets/svgs/vscode.svg';

const techData = [
  { name: 'Next.js', Icon: NextjsIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'Node.js', Icon: NodejsIcon },
  { name: 'Express', Icon: ExpressIcon },
  { name: 'TypeScript', Icon: TypescriptIcon },
  { name: 'MongoDB', Icon: MongodbIcon },
  { name: 'Tailwind CSS', Icon: TailwindIcon },
  { name: 'Docker', Icon: DockerIcon },
  { name: 'Git', Icon: GitIcon },
  { name: 'VS Code', Icon: VsCodeIcon },
];

export default function TechnologiesTimeline(): JSX.Element {
  return (
    <section className="py-10 px-4 bg-white dark:bg-neutral-900">
      <h2 className="text-2xl font-bold text-center mb-6">My Tech Stack Timeline</h2>
      <div className="relative container mx-auto p-8">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>
        {techData.map((tech, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={tech.name} className="mb-8 flex justify-between items-center w-full">
              <div className="w-5/12 text-right">
                {isLeft && (
                  <div className="flex flex-col items-end">
                    <div className="w-12 h-12">
                      <tech.Icon className="w-full h-full" />
                    </div>
                    <span className="text-gray-600">{tech.name}</span>
                  </div>
                )}
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white z-10"></div>
              <div className="w-5/12 text-left">
                {!isLeft && (
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12">
                      <tech.Icon className="w-full h-full" />
                    </div>
                    <span className="text-gray-600">{tech.name}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
