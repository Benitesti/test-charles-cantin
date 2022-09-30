import Cross from './Cross.js'

import styles from "./Menu.module.css"


const Menu = ({ onClick, expanded }) => (
  <nav className={expanded ? styles["Menu"] + ' ' + styles["expanded"] : styles.Menu}>
    <Cross       
      onClick={onClick}
    />  
    <ul>
      <li>
        <a href="/">ACCUEIL</a>
      </li>
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

  </nav>
);

export default Menu;