import { useState } from "react"
import "./BasicOfMotion.css"
import { motion, AnimatePresence } from "framer-motion"

export default function BasicOfMotion() {

  const [isTrue, setIsTrue] = useState<boolean>(true)

  return (
    <div>
      <motion.button onClick={() => setIsTrue(!isTrue)} >SHOW/HIDE</motion.button>
      <AnimatePresence>  // add this component when the exit animation is needed
        {
          isTrue && <motion.div
            className="basic-of-motion-box"
            initial={{    // initial div status
              rotate: "0deg",
              scale: 1,
              y: 0
            }}
            animate={{    // finish div status
              rotate: "180deg",
              scale: 1,
              y: 150
            }}
            exit={{       // exit animate
              rotate: "0deg",
              scale: 0,
              y:0
            }}
            transition={{ // the animation between initial and finish status
              duration: 1,
              ease: "backInOut"
            }}
            style={{
              width: 150,
              height: 150,
              backgroundColor: "black"
            }} >
          </motion.div>
        }
      </AnimatePresence>
    </div>

  )
}
