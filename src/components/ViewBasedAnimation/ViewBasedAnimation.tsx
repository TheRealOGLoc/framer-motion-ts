import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ViewBasedAnimation() {

  const ref = useRef(null)   // add the ref to the target div
  const isInView = useInView(ref, { once: true })   // use the useInView to detect if it is in view

  useEffect(() => {
    console.log("is in view", isInView)
  }, [isInView])

  return (
    <div>
      <div style={{height: "150vh"}} />
      <motion.div 
        style={{height: "100vh", backgroundColor: "black"}}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
      />
      <div 
      ref={ref}  // add the target ref in here
      style={{
        height: "100vh",
        background: isInView ? "green" : "blue" ,
        transition: "1s background"
      }}
      />
    </div>
  )
}
