"use client"

import type React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

interface ExpCardProps {
  title: string
  dates: string
  location: string
  desc: string
  image: React.ReactNode
}

export default function ExpCard({ title, dates, location, desc, image }: ExpCardProps) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "24px",
        color: "#334155",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.8)",
      }}
      iconStyle={{
        background: "rgba(255, 255, 255, 0.9)",
        border: "3px solid rgba(148, 163, 184, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
      }}
      icon={
        <motion.div
          className="flex items-center justify-center w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {image}
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-light text-slate-900 mb-2">{title}</h3>
        <h4 className="text-slate-600 font-medium mb-2">{location}</h4>
        <p className="text-slate-500 text-sm mb-4 bg-slate-100/80 px-3 py-1 rounded-full inline-block font-mono">
          {dates}
        </p>
        <p className="text-slate-700 leading-relaxed font-light">{desc}</p>
      </motion.div>
    </VerticalTimelineElement>
  )
}
