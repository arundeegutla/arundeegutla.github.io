"use client"

import Link from "next/link"
import { FaMediumM } from "react-icons/fa"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import { Typewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        {/* Greeting */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-6xl">👋</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-6xl md:text-8xl font-thin text-slate-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Hi, I&apos;m{" "}
          <span className="font-light bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Arun Deegutla
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          className="text-2xl md:text-3xl font-light text-slate-600 mb-3 h-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Typewriter
            words={[
              "Software Engineer",
              "Full-Stack Developer",
              "Problem Solver",
              "Tech Innovator",
              "ICPC Competitor",
              "AI Enthusiast",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={2000}
          />
        </motion.div>

        {/* Social Links */}
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

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
