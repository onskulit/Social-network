import Post from './Post/Post';
import styles from './Posts.module.css';

function Posts(props) {
  const postsJSX = props.posts.map(post => <Post theme={post.theme} text={post.text} />)

  return (
    <div>
      { postsJSX }
    </div>
  );
}

export default Posts;