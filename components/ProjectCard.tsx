import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';
import { GoArrowUpRight } from 'react-icons/go';
import { PiLinkSimpleBold } from 'react-icons/pi';
import Link from 'next/link';

export default function ProjectCard({
  title,
  github,
  link,
  desc,
  image,
  tech,
}: {
  title: string;
  github?: string;
  link?: string;
  desc: string;
  image: React.ReactNode;
  tech: string[];
}) {
  return (
    <div className="bg-gray-100 p-4 rounded-md m-3 max-lg:w-full lg:w-96">
      <h3 className="text-2xl font-normal">{title}</h3>
      <h4 className="flex flex-row min-h-[50px] mt-1 text-center">
        {github ? (
          <Link
            href={github}
            target="_blank"
            className="h-fit mr-1 rounded-full bg-slate-200 border-2 hover:bg-gray-700 hover:text-white text-xl p-2 hover:p-3 transition-all ease-in-out duration-300 hover:cursor-pointer">
            <FaGithub />
          </Link>
        ) : (
          ''
        )}
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="h-fit mr-1 rounded-full bg-slate-200 border-2 hover:bg-gray-700 hover:text-white text-xl p-2 hover:p-3 transition-all ease-in-out duration-300 hover:cursor-pointer">
            <PiLinkSimpleBold />
          </Link>
        ) : (
          ''
        )}
      </h4>
      <h3 className="mt-2 font-light">{desc}</h3>

      <div className="flex flex-row flex-wrap mt-3 gap-1">
        {tech.map((technology) => {
          return (
            <div
              key={technology}
              className="p-2 border-2 border-gray-400 rounded-md font-light text-sm">
              {technology}
            </div>
          );
        })}
      </div>
    </div>
  );
}
