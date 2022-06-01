import styles from './Post.module.css';

function Post(props) {
  return (
    <div>
      <h3>{ props.theme }</h3>
      <p>{ props.text }</p>
    </div>
  );
}

export default Post;