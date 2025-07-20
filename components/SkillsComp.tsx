"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML", "CSS"],
    icon: "💻",
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Material-UI", "Framer Motion"],
    icon: "🎨",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Firebase"],
    icon: "⚡",
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "CI/CD"],
    icon: "🛠️",
  },
]

export default function SkillsComp() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          className="bg-slate-800/70 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-slate-800/80 hover:border-slate-600/50 transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl">{category.icon}</span>
            <h3 className="text-2xl font-light text-white">{category.title}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-slate-700/80 backdrop-blur-sm text-slate-300 rounded-full text-sm border border-slate-600/50 hover:bg-slate-600/80 hover:border-slate-500/50 hover:text-white transition-all duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
