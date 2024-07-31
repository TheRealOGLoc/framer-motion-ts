import { motion, MotionConfig } from "framer-motion"

export default function Gestures() {
  return (
    <MotionConfig transition={{
      duration: 0.5,
      ease: "easeInOut"
    }} >  //MotionConfig is used to set configuration options for all children motion components.
      <div>
        <motion.button
          whileHover={{  // hover in css
            scale: 1.05
          }}
          whileTap={{  // on click
            scale: 0.95,
            rotate: "2.5deg",
          }}
          
        >Click Me</motion.button>
        <motion.button
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.95,
            rotate: "-2.5deg",
          }}
          
        >Click Me</motion.button>
        
      </div>
    </MotionConfig>
  )
}
