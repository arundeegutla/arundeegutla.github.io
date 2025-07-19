"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  const codeSnippets = [
    "const magic = () => {",
    "return 'awesome';",
    "};",
    "npm install creativity",
    "git commit -m 'feat: ✨'",
    "console.log('Hello World!');",
    "import { dreams } from 'reality';",
    "export default Success;",
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-xs font-mono text-purple-400/10 select-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  )
}
