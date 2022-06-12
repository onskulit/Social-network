import AddPost from './AddPost/AddPost';
import Bio from './Bio/Bio';
import styles from './Profile.module.css';
import Posts from './Posts/Posts';

function Profile(props) {
  return (
    <div className={styles.container}>
      <Bio age="24"/>
      <AddPost addPost={ props.addPost }/>
      <Posts posts={ props.posts }/>
    </div>
  );
}

export default Profile;