import { motion, useAnimationControls } from "framer-motion"

export default function AnimationControls() {
  const controls = useAnimationControls()
  const handleClick = () => {
    controls.start("flop")

  }

  return (
    <div style={{ marginTop: 200 }} >
      <button onClick={handleClick} >Flip it</button>
      <motion.div
        style={{
          width: 150,
          height: 150,
          backgroundColor: "black",
        }}
        variants={{    // custom variants which can be used in other attribute
          initial: {
            rotate: "0deg"
          },
          flop: {
            rotate: "180deg"
          }
        }}
        // whileHover="flop"   // eg
        initial = "initial"
        animate = {controls}
      >
      </motion.div>
    </div>
  )
}
