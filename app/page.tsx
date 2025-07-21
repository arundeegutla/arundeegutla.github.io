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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden w-full">
      {/* Grain texture overlay */}
      <div className="fixed inset-0 opacity-40 mix-blend-overlay pointer-events-none grain-texture" />

      {/* Subtle background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none opacity-20" />

      {/* Floating glass orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
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
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-4">Skills</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
            <SkillsComp />
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-32 px-6 bg-gradient-to-b from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-4">Experience</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">My journey through technology and innovation</p>
            </div>

            <VerticalTimeline animate={false} lineColor="rgba(148, 163, 184, 0.3)">
              <ExpCard
                title="Software Engineer Intern"
                dates="May 2025 - Aug 2025"
                location="Microsoft - Atlanta, GA"
                desc="Improving OAuth connector reliability for 200M+ Intune clients."
                image={
                  <Image
                    src={"/images/msft_logo.png"}
                    alt="Microsoft logo"
                    width={56}
                    height={56}
                    className="w-14 auto rounded-2xl overflow-visible"
                  />
                }
              />
              <ExpCard
                title="ICPC Competitive Programmer"
                dates="Sep 2022 - May 2025"
                location="UCF Programming Team - Orlando, FL"
                desc="Solved 1500+ coding problems and competed in regional contests."
                image={
                  <Image
                    src={"/images/ucf_logo.png"}
                    alt="ICPC logo"
                    width={56}
                    height={56}
                    className="w-14 auto rounded-2xl overflow-visible"
                  />
                }
              />
              <ExpCard
                title="Undergraduate Teaching Assistant"
                dates="Sep 2024 - Dec 2024"
                location="UCF - Orlando, FL"
                desc="TA for Discrete Structures 2."
                image={
                  <Image
                    src={"/images/ucf_logo.png"}
                    alt="UCF logo"
                    width={56}
                    height={56}
                    className="w-14 auto rounded-2xl overflow-visible"
                  />
                }
              />
              <ExpCard
                title="Software Engineer Intern"
                dates="May 2024 - Aug 2024"
                location="AMD - San Jose, CA"
                desc="Built CI/CD monitoring tool, reducing build failures by 60%. Automated deployments and visualized pipeline health in Grafana."
                image={
                  <Image
                    src={"/images/amd_logo.png"}
                    alt="AMD logo"
                    width={56}
                    height={56}
                    className="w-14 auto rounded-2xl overflow-visible"
                  />
                }
              />
              <ExpCard
                title="Undergraduate Teaching Assistant"
                dates="Jan 2024 - May 2024"
                location="UCF - Orlando, FL"
                desc="TA for Problem Solving and Team Dynamics."
                image={
                  <Image
                    src={"/images/ucf_logo.png"}
                    alt="UCF logo"
                    width={56}
                    height={56}
                    className="w-14 auto rounded-2xl overflow-visible"
                  />
                }
              />
              <ExpCard
                title="Software Engineer Intern / Co-op"
                dates="Jun 2023 - May 2024"
                location="Kore AI - Orlando, FL"
                desc="Enhanced chatbot performance and engagement with GPT-4."
                image={
                  <Image
                    src={"/images/kore_logo.png"}
                    alt="Kore AI logo"
                    width={56}
                    height={56}
                    className="w-14 auto rounded-2xl overflow-visible"
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
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-4">Projects</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">Building solutions that make a difference</p>
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
        <footer className="py-5 px-6 bg-slate-900/80 backdrop-blur-xl border-t border-slate-700/30">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Arun Deegutla. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div >
  )
}
