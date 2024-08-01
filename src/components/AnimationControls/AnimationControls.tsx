import { motion } from "framer-motion"

export default function AnimationControls() {
  return (
    <div style={{marginTop:200}} >
      <button>Flip it</button>
      <motion.div
      style={{
        width: 150,
        height: 150,
        backgroundColor:"black",
        
      }}
      >

      </motion.div>
    </div>
  )
}
