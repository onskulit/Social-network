import Post from './Post/Post';
import styles from './Posts.module.css';

function Posts() {
  return (
    <div>
      <Post theme="First post" text="Begin React learning 30.05.2022"/>
      <Post theme="Second post" text="Use the first props 01.06.2022"/>
    </div>
  );
}

export default Posts;