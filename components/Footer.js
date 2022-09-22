import Socials from './Socials';

import styles from './Footer.module.css'

const Footer = () => (
  <div className={styles.Footer}>
    <img className={styles.Logo} src="assets/logo-transparent.png" alt="Logo"/>
    <div className={styles.Adresse}>
      <span>Charles Cantin</span>
      <p>
        12 rue Nicéphore Niépce<br/>
        12345 TORQUENT PER CONUBIA<br/>
        01 23 45 67 89
      </p>
    </div>
    <Socials/>
  </div>     
    
);

export default Footer;