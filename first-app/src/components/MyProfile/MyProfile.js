import AddPost from './AddPost/AddPost';
import Bio from './Bio/Bio';
import styles from './MyProfile.module.css';
import Posts from './Posts/Posts';

function MyProfile(props) {
  return (
    <div className={styles.container}>
      <Bio age="24"/>
      <AddPost addPost={ props.addPost }/>
      <Posts posts={ props.posts }/>
    </div>
  );
}

export default MyProfile;