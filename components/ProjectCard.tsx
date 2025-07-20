"use client"

import Link from "next/link"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  desc: string
  image: string
  github: string
  link?: string
  tech: string[]
}

export default function ProjectCard({ title, desc, github, link, tech }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-slate-800/70 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-slate-800/80 hover:border-slate-600/50 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-2xl font-light text-white">{title}</h3>
        <div className="flex gap-3">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={github}
              target="_blank"
              className="w-10 h-10 bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-600/80 hover:border-slate-500/50 transition-all duration-200"
            >
              <FaGithub className="text-lg" />
            </Link>
          </motion.div>
          {link && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={link}
                target="_blank"
                className="w-10 h-10 bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-600/80 hover:border-slate-500/50 transition-all duration-200"
              >
                <FaExternalLinkAlt className="text-sm" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-300 leading-relaxed mb-8 font-light">{desc}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {tech.map((technology, index) => (
          <motion.span
            key={technology}
            className="px-3 py-1 bg-slate-700/80 backdrop-blur-sm text-slate-400 rounded-full text-sm border border-slate-600/50 hover:bg-slate-600/80 hover:border-slate-500/50 hover:text-white transition-all duration-200"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -1 }}
          >
            {technology}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
