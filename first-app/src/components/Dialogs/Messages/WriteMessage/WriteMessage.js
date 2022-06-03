import styles from './WriteMessage.module.css';
import React from 'react';

function WriteMessage(props) {
  const messageText = React.createRef();

  return (
    <div className={styles.container}>
      <textarea placeholder='Ad message' ref={ messageText }/>
      <button>Send Message</button>
    </div>
  );
}

export default WriteMessage; 