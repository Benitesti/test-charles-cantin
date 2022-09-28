import { useState } from "react"
import { motion } from "framer-motion"

import GridImageContainer from "./GridImageContainer"

import styles from "./PictureGrid.module.css"



const PictureGrid = ({ displayedPictures }) => {

  const [isBlurred, setIsBlurred] = useState(false)
  const [isOutsideClick, setIsOutsideClick] = useState(false)
  
  const handleClick = () => {
    setIsBlurred(!isBlurred)}
  

return (
  <div className={styles.container}>
    <div className={styles.grid}>
        {displayedPictures.map((img, i) => (
          <GridImageContainer 
            key={i} 
            img={img}
            blur={isBlurred}
            setBlur={() => setIsBlurred(!isBlurred)} />
        ))}
    </div>
    <motion.div 
      className={styles.blur} 
      transition={{ duration: 0.5}} 
      initial={false}
      animate={{display: isBlurred ? "block" : "none"}}
      onClick={handleClick}
      />
  </div>  
  )
}  


export default PictureGrid