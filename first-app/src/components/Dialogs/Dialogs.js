import styles from './Dialogs.module.css';
import Messages from './Messages/Messages';
import Persons from './Persons/Persons';

function Dialogs(props) {
  return (
    <div className={styles.container}>
      <Persons persons={ props.dialogsPage.persons }/>
      <Messages />
    </div>
  );
}

export default Dialogs;