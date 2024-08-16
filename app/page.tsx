'use client';

import ExpCard from '@/components/ExpCard';
import LinkCard from '@/components/LinkCard';
import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';
import Link from 'next/link';
import { FaMediumM } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { IoMdDocument } from 'react-icons/io';
import { Typewriter } from 'react-simple-typewriter';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-screen max-w-screen-lg px-6">
      <div className="flex flex-col text-center justify-center m-auto text-4xl font-medium my-52">
        <h1>
          <a className="waving-hand">👋</a>{' '}
          <a className="font-thin">I&apos;m</a>{' '}
          <a className="whitespace-nowrap">Arun Deegutla</a>
        </h1>
        <div className="flex text-2xl font-light mt-2 m-auto">
          <Typewriter
            words={[
              'Software Engineer',
              'Web Developer',
              'Tech Enthusiast',
              'Student',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </div>
        <div className="flex flex-row space-x-2 text-center min-h-[100px] p-2 w-fit m-auto">
          <Link
            href={'https://www.linkedin.com/in/arundeegutla/'}
            target="_blank"
            className="m-auto h-fit rounded-full bg-slate-200 border-2 hover:bg-gray-700 hover:text-white text-2xl p-2 hover:p-3 transition-all ease-in-out duration-300 hover:cursor-pointer">
            <FaLinkedinIn />
          </Link>
          <Link
            href={'https://github.com/arundeegutla/'}
            target="_blank"
            className="m-auto h-fit rounded-full bg-slate-200 border-2 hover:bg-gray-700 hover:text-white text-2xl p-2 hover:p-3 transition-all ease-in-out duration-300 hover:cursor-pointer">
            <FaGithub />
          </Link>
          <Link
            href={'https://medium.com/@arundeegutla'}
            target="_blank"
            className="m-auto h-fit rounded-full bg-slate-200 border-2 hover:bg-gray-700 hover:text-white text-2xl p-2 hover:p-3 transition-all ease-in-out duration-300 hover:cursor-pointer">
            <FaMediumM />
          </Link>
          {/* <Link
            href={''}
            target="_blank"
            className="m-auto h-fit rounded-full bg-slate-200 border-2 hover:bg-gray-700 hover:text-white text-2xl p-2 hover:p-3 transition-all ease-in-out duration-300 hover:cursor-pointer">
            <IoMdDocument />
          </Link> */}
        </div>
      </div>

      <div className="flex flex-col w-full h-fit my-10">
        <div className="p-3 bg-gray-200 px-4 w-fit rounded-md text-xl">
          About me
        </div>
        {/* <hr className="w-full  bg-gray-600"></hr> */}
        <p className="p-5">
          I&apos;m Arun, a software engineer pursuing a Bachelor’s in Computer
          Science with a Minor in Mathematics at the{' '}
          <strong>University of Central Florida</strong> graduating in 2025.
          With a strong foundation in full-stack development, DevOps, and AI,
          I&apos;ve interned at AMD and Kore AI, where I contributed to
          impactful projects that enhanced system reliability and user
          experience. I&apos;m driven by a love for problem-solving, my
          commitment to innovation and collaboration. Let&apos;s build something
          amazing together!
        </p>
      </div>

      <div className="flex flex-col w-full h-fit my-10">
        <div className="lg:m-auto p-3 bg-gray-200 px-4 w-fit rounded-md text-xl">
          Experience
        </div>
        {/* <hr className="w-full bg-gray-600"></hr> */}
        <VerticalTimeline animate={false} lineColor="rgba(75, 85, 99, 0.5)">
          <ExpCard
            title="Software Engineer Intern"
            dates="May 2024 - Aug 2024"
            location="AMD - San Jose, CA"
            desc="DevOps for Ryzen AI software development"
            image={
              <Image
                src={'/images/amd_logo.png'}
                alt="amd logo"
                width={0}
                height={0}
                className="w-14 h-auto"
                unoptimized
              />
            }
          />
          <ExpCard
            title="Undergraduate Teaching Assistant"
            dates="Jan 2024 - May 2024"
            location="UCF - Orlando, FL"
            desc="Teaching Assistant for Problem Solving and Team Dynamics course"
            image={
              <Image
                src={'/images/ucf_logo.png'}
                alt="amd logo"
                width={0}
                height={0}
                className="w-14 h-auto"
                unoptimized
              />
            }
          />
          <ExpCard
            title="Software Engineer Intern / Co-op"
            dates="Jun 2023 - May 2024"
            location="Kore AI - Orlando, FL"
            desc="Engineered personalized chatbot solutions, enhancing performance with GPT-4"
            image={
              <Image
                src={'/images/kore_logo.png'}
                alt="amd logo"
                width={0}
                height={0}
                className="w-14 h-auto"
                unoptimized
              />
            }
          />

          <ExpCard
            title="ICPC Competitive Programmer"
            dates="Sep 2022 - May 2023"
            location="UCF - Orlando, FL"
            desc="Solved 1500+ coding problems, focusing on C++ and Java implementations of advanced data structures and algorithms"
            image={
              <Image
                src={'/images/ucf_logo.png'}
                alt="amd logo"
                width={0}
                height={0}
                className="w-14 h-auto"
                unoptimized
              />
            }
          />
        </VerticalTimeline>
      </div>

      {/* <div className="flex flex-col w-full h-fit my-10">
        <div className="lg:m-auto p-3 bg-gray-200 px-4 w-fit rounded-md text-xl">
          Eduation
        </div>
        <VerticalTimeline animate={false} lineColor="rgba(75, 85, 99, 0.5)">
          <ExpCard
            title="University of Central Florida"
            dates="2021 - 2025"
            location="Orlando, FL"
            desc="Bachelor's in Computer Science"
            image={
              <Image
                src={'/images/ucf_logo.png'}
                alt="amd logo"
                width={0}
                height={0}
                className="w-14 h-auto"
                unoptimized
              />
            }
          />
        </VerticalTimeline>
      </div> */}

      <div className="flex flex-col w-full h-fit my-10">
        <div className="p-3 bg-gray-200 px-4 w-fit rounded-md text-xl">
          Projects
        </div>
        <div className="flex flex-row flex-wrap lg:justify-center">
          <ProjectCard
            title="DevLink"
            desc="Led frontend development in a 7-person team, creating a skill-matching platform that connected 50+ developers with software projects, enhancing collaboration and project alignment"
            image=""
            github="https://github.com/arundeegutla/DevLink.git"
            // link="https://www.linkedin.com/in/arundeegutla/"
            tech={[
              'Next',
              'Expo',
              'Tailwind UI',
              'Firebase',
              'Express',
              'TypeScript',
            ]}
          />
          <ProjectCard
            title="Alg0Run"
            desc="Won Best First-Time Hacker award among 700+ projects at KnightHacks by developing AlgoRun, a platform combining algorithmic challenges with typing speed tests in Python, C++, and Java"
            image=""
            github="https://github.com/arundeegutla/Alg0Run.git"
            // link="https://www.linkedin.com/in/arundeegutla/"
            tech={['React', 'Tailwind UI', 'Firebase', 'TypeScript']}
          />
          <ProjectCard
            title="RubiXolver"
            desc="Developed an application that detects and solves a Rubik's cube using OpenCV, NumPy, and Kociemba's two-phase algorithm."
            image=""
            github="https://github.com/arundeegutla/Rubixolver.git"
            tech={['Python', 'OpenCV', 'NumPy']}
          />
          <ProjectCard
            title="RateMyUCFProfessor"
            desc="Chrome extension that displays ratings of UCF professors from RateMyProfessor.com. Utilized JavaScript, HTML, and CSS to create user-friendly interface."
            image=""
            github="https://github.com/arundeegutla/RateMyUCFProfessor.git"
            link="https://chromewebstore.google.com/detail/imlmfakdnakcelcmhkdmehdeljilhnok?utm_source=chrome-ntp-icon"
            tech={['HTML', 'CSS', 'JavaScript']}
          />
        </div>
      </div>

      {/* <button>Click me!</button> */}
    </main>
  );
}
