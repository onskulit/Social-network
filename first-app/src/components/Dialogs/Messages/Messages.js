import styles from './Messages.module.css';
import WriteMessage from './WriteMessage/WriteMessage';

function Messages(props) {
  return (
    <div className={styles.container}>
      Messages
      <WriteMessage />
    </div>
  );
}

export default Messages; 