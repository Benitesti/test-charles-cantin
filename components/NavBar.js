import styles from "./NavBar.module.css"

const NavBar = () => (
  <div className={styles.NavBar}>
    <ul>
      <li>
        <a href="/gallerie">GALLERIE</a>
      </li>
      <li>
        <a href="/prestations">PRESTATIONS</a>
      </li>
      <li>
        <a href="/contact">CONTACT</a>
      </li>
    </ul>

  </div>
);

export default NavBar;