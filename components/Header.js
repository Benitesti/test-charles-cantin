import NavBar from "./NavBar";
import Socials from "./Socials";
import styles from "./Header.module.css"

const Header = () => (
  <div className={styles.Header}>
    <a href="/">
      <img className={styles.Logo} src="assets/logo-transparent.png" alt="logo"/>
    </a>
    <NavBar/>
    <Socials className="align"/>
  </div>
);

export default Header;