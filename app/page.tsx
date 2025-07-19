"use client"

import ExpCard from "@/components/ExpCard"
import ProjectCard from "@/components/ProjectCard"
import SkillsComp from "@/components/SkillsComp"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import { VerticalTimeline } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden w-full">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none" />

      {/* Floating glass orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-thin text-slate-900 mb-4">Skills</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
            <SkillsComp />
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-32 px-6 bg-gradient-to-b from-white/50 to-slate-50/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-thin text-slate-900 mb-4">Experience</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">My journey through technology and innovation</p>
            </div>

            <VerticalTimeline animate={true} lineColor="rgba(148, 163, 184, 0.3)">
              <ExpCard
                title="Undergraduate Teaching Assistant"
                dates="Sep 2024 - Dec 2024"
                location="UCF - Orlando, FL"
                desc="Teaching Assistant for Discrete Structures 2, helping students master complex mathematical concepts and problem-solving techniques."
                image={
                  <Image
                    src={"/placeholder.svg?height=56&width=56&text=UCF"}
                    alt="UCF logo"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-2xl"
                  />
                }
              />
              <ExpCard
                title="ICPC Competitive Programmer"
                dates="Sep 2022 - Present"
                location="UCF Programming Team - Orlando, FL"
                desc="Solved 1500+ coding problems, focusing on C++ and Java implementations of advanced data structures and algorithms. Competed in regional programming contests."
                image={
                  <Image
                    src={"/placeholder.svg?height=56&width=56&text=ICPC"}
                    alt="ICPC logo"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-2xl"
                  />
                }
              />
              <ExpCard
                title="Software Engineer Intern"
                dates="May 2024 - Aug 2024"
                location="AMD - San Jose, CA"
                desc="Worked on DevOps for Ryzen AI software development, implementing CI/CD pipelines and improving deployment processes for cutting-edge AI hardware."
                image={
                  <Image
                    src={"/placeholder.svg?height=56&width=56&text=AMD"}
                    alt="AMD logo"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-2xl"
                  />
                }
              />
              <ExpCard
                title="Undergraduate Teaching Assistant"
                dates="Jan 2024 - May 2024"
                location="UCF - Orlando, FL"
                desc="Teaching Assistant for Problem Solving and Team Dynamics course, mentoring students in collaborative software development practices."
                image={
                  <Image
                    src={"/placeholder.svg?height=56&width=56&text=UCF"}
                    alt="UCF logo"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-2xl"
                  />
                }
              />
              <ExpCard
                title="Software Engineer Intern / Co-op"
                dates="Jun 2023 - May 2024"
                location="Kore AI - Orlando, FL"
                desc="Engineered personalized chatbot solutions, enhancing performance with GPT-4 integration and improving user engagement by 40%."
                image={
                  <Image
                    src={"/placeholder.svg?height=56&width=56&text=Kore"}
                    alt="Kore AI logo"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-2xl"
                  />
                }
              />
            </VerticalTimeline>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-thin text-slate-900 mb-4">Projects</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">Building solutions that make a difference</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProjectCard
                title="DevLink"
                desc="Led frontend development in a 7-person team, creating a skill-matching platform that connected 50+ developers with software projects, enhancing collaboration and project alignment through intelligent matching algorithms."
                image=""
                github="https://github.com/arundeegutla/DevLink.git"
                tech={["Next.js", "Expo", "Tailwind UI", "Firebase", "Express", "TypeScript"]}
              />
              <ProjectCard
                title="Alg0Run"
                desc="🏆 Won Best First-Time Hacker award among 700+ projects at KnightHacks by developing AlgoRun, a platform combining algorithmic challenges with typing speed tests in Python, C++, and Java."
                image=""
                github="https://github.com/arundeegutla/Alg0Run.git"
                link="https://alg0run.netlify.app/"
                tech={["React", "Tailwind UI", "Firebase", "TypeScript"]}
              />
              <ProjectCard
                title="RubiXolver"
                desc="Developed an intelligent application that detects and solves a Rubik's cube using computer vision with OpenCV, NumPy, and Kociemba's two-phase algorithm for optimal solving."
                image=""
                github="https://github.com/arundeegutla/Rubixolver.git"
                tech={["Python", "OpenCV", "NumPy", "Computer Vision"]}
              />
              <ProjectCard
                title="RateMyUCFProfessor"
                desc="Chrome extension that seamlessly displays ratings of UCF professors from RateMyProfessor.com, helping thousands of students make informed course decisions."
                image=""
                github="https://github.com/arundeegutla/RateMyUCFProfessor.git"
                link="https://chromewebstore.google.com/detail/imlmfakdnakcelcmhkdmehdeljilhnok?utm_source=chrome-ntp-icon"
                tech={["HTML", "CSS", "JavaScript", "Chrome API"]}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-2 bg-white/80 backdrop-blur-xl border-t border-slate-200/50">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Arun Deegutla. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
