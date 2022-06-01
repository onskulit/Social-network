import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/myProfile" 
          className={({ isActive }) => isActive ? `${styles.link_active} ${styles.link}` : `${styles.link}`}>
            My profile
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs" 
          className={({ isActive }) => isActive ? `${styles.link_active} ${styles.link}` : `${styles.link}`}>
            Dialogs
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/##" 
          className={({ isActive }) => isActive ? `${styles.link_active} ${styles.link}` : `${styles.link}`}>
            Feed
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/##" 
          className={({ isActive }) => isActive ? `${styles.link_active} ${styles.link}` : `${styles.link}`}>
            Music
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/##" 
          className={({ isActive }) => isActive ? `${styles.link_active} ${styles.link}` : `${styles.link}`}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;