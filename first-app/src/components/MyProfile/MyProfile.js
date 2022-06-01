import AddPost from './AddPost/AddPost';
import Bio from './Bio/Bio';
import styles from './MyProfile.module.css';
import Posts from './Posts/Posts';

function MyProfile() {
  return (
    <div className={styles.myProfile}>
      <Bio age="24"/>
      <AddPost />
      <Posts />
    </div>
  );
}

export default MyProfile;