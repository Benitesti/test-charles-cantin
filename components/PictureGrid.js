
import Image from "next/image"

import styles from "./PictureGrid.module.css"

const PictureGrid = ({ displayedPictures }) => (
  <div className={styles.PicturesGrid}>
      {displayedPictures.map((img, i) => (
        <div key={i}>
          <Image src= {'/' + img.photo} width="300" height="300" />
        </div>
      ))}
    </div>
)

export default PictureGrid