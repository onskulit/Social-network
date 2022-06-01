import { NavLink } from 'react-router-dom';
import styles from './Person.module.css';

function Person(props) {
  return (
    <div className={styles.container}>
      <NavLink
        to={`dialogs/${props.id}`}
        className={({ isActive }) =>
          isActive ? `${styles.item_active} ${styles.item}` : `${styles.item}`
        }
      >
        {props.name}
      </NavLink>
    </div>
  );
}

export default Person;