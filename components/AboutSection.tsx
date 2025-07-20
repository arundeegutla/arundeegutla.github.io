"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin text-white mb-4">About Me</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Driven by curiosity and powered by code</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Code Block */}
              <div className="bg-slate-950/90 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 font-mono text-sm shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-400 ml-2">about-me.js</span>
                </div>
                <div className="space-y-2 text-slate-300">
                  <div className="text-purple-400">
                    const <span className="text-blue-400">aboutMe</span> = {"{"}
                  </div>
                  <div className="ml-4 text-emerald-400">
                    name: <span className="text-yellow-300">"Arun Deegutla"</span>,
                  </div>
                  <div className="ml-4 text-emerald-400">
                    role: <span className="text-yellow-300">"Software Engineer"</span>,
                  </div>
                  <div className="ml-4 text-emerald-400">
                    location: <span className="text-yellow-300">"Orlando, FL"</span>,
                  </div>
                  <div className="ml-4 text-emerald-400">
                    education: <span className="text-yellow-300">"UCF - CS & Math (minor)"</span>,
                  </div>
                  <div className="ml-4 text-emerald-400">interests: [</div>
                  <div className="ml-8 text-yellow-300">"Full-Stack Development",</div>
                  <div className="ml-8 text-yellow-300">"Competitive Programming",</div>
                  <div className="ml-8 text-yellow-300">"AI & Machine Learning",</div>
                  <div className="ml-8 text-yellow-300">"DevOps & Cloud"</div>
                  <div className="ml-4 text-emerald-400">],</div>
                  <div className="ml-4 text-emerald-400">
                    currentFocus: <span className="text-yellow-300">"Building the Future"</span>
                  </div>
                  <div className="text-purple-400">{"};"}</div>
                </div>
              </div>

            </motion.div>
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800/70 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-slate-800/80 hover:border-slate-600/50 transition-all duration-500">
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p className="text-lg font-light">
                    I'm Arun, a passionate software engineer pursuing a Bachelor's in Computer Science with a Minor in
                    Mathematics at the <span className="font-medium text-white">University of Central Florida</span>,
                    graduating in 2025.
                  </p>
                  <p className="text-lg font-light">
                    With a strong foundation in full-stack development, DevOps, and AI, I've interned at{" "}
                    <span className="font-medium text-white">AMD</span> and{" "}
                    <span className="font-medium text-white">Kore AI</span>, where I contributed to impactful projects
                    that enhanced system reliability and user experience.
                  </p>
                  <p className="text-lg font-light">
                    I'm driven by a love for problem-solving and my commitment to innovation and collaboration. Let's
                    build something amazing together! 🚀
                  </p>
                </div>
              </div>
            </motion.div>


          </div>
        </motion.div>
      </div>
    </section>
  )
}
