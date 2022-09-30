
import styles from "./Home.module.css"
// import background from "/assets/wedding-foto-pettine-IfjHaIoAoqE-unsplash.jpg"

const Home = () => (
  <div className={styles.Home}>
    <div className={styles.background}/>
    <img 
      className={styles.logo}
      src="/assets/Logo-transparent.png" 
      alt="logo"/>
  </div>
)

export default Home