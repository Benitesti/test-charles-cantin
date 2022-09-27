
import Image from "next/image"

import styles from "./PictureGrid.module.css"

const PictureGrid = ({ displayedPictures }) => (
  <div className={styles.PicturesGrid}>
      {displayedPictures.map((img, i) => (
        <div className={styles.imgContainer} key={i}>
          <Image 
            className={styles.Image} 
            src= {'/' + img.photo} 
            layout="fill" 
            objectFit="cover"
            sizes="(max-width: 384px) 50vw,
                  (max-width: 600px) 25vw,
                  33vw" />
        </div>  
      ))}
    </div>
)

export default PictureGrid