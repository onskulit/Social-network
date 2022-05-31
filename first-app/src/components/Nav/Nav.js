import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}><a href="##" className={`${styles.nav__link} ${styles.nav__link_active}`}>My page</a></li>
        <li className={styles.nav__item}><a href="##" className={styles.nav__link}>Messages</a></li>
        <li className={styles.nav__item}><a href="##" className={styles.nav__link}>Feed</a></li>
        <li className={styles.nav__item}><a href="##" className={styles.nav__link}>Music</a></li>
        <li className={styles.nav__item}><a href="##" className={styles.nav__link}>Settings</a></li>
      </ul>
    </nav>
  );
}

export default Nav;