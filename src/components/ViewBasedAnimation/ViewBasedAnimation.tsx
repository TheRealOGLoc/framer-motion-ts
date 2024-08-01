import React from 'react'
import { motion } from 'framer-motion'

export default function ViewBasedAnimation() {
  return (
    <div>
      <div style={{height: "150vh"}} />
      <motion.div 
        style={{height: "100vh", backgroundColor: "black"}}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
      />
    </div>
  )
}
