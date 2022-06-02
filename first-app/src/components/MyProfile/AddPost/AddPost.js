import React from 'react';
import styles from './AddPost.module.css';

function AddPost(props) {
  const newPostTheme = React.createRef();
  const newPostText = React.createRef();

  const addPost = () => {
    const theme = newPostTheme.current.value;
    const text = newPostText.current.value;
    props.addPost(theme, text);
  }

  return (
    <div>
      <h2>New post</h2>
      <textarea placeholder='Theme' ref={ newPostTheme }></textarea>
      <textarea placeholder='Text' ref={ newPostText }></textarea>
      <button onClick={ addPost }>Add post</button>
    </div>
  );
}

export default AddPost;