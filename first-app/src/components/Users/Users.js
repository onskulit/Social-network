import styles from './Users.module.css';
import * as axios from 'axios';
import Preloader from '../common/Preloader.js';
import { NavLink } from 'react-router-dom';
import getUsers from '../../api/api';

function Users (props) {
  let pageCounter = props.totalUsersCount / props.pageSize;
  if (props.users.length === 0) {
    props.getUsersThunkCreator(props.currentPage, props.pageSize);
  }

  const addUsersLocal = () => {
    props.toggleIsFetching(true);
    props.addPage();
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage + 1}&count=${props.pageSize}`).then(response => { //TO FIX
    props.toggleIsFetching(false);  
    props.addUsers(response.data.items);
    })
  }

  let usersJSX = props.users.map(user => {
    return (
      <div className='user__container' key={ user.id }>
        <NavLink to={`/profile/${ user.id }`}>
          <img src='https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/865d2d0e-bac6-4a78-a0ed-17a87b285069/280x420' alt='avatar' className={styles.avatar} />
        </NavLink>
        <div>{ user.name }</div>
        <div>{ `user.status` }</div>
        <div>{ `{user.location.country}, {user.location.city}` }</div>
        {user.followed 
        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button> 
        : <button onClick={() => props.follow(user.id)}>Follow</button>}
      </div>
    )
  });

  return (
    <div>
      { usersJSX }
      { props.isFetching ? <Preloader /> : <button onClick={() => addUsersLocal()}>Show More</button> }
    </div>
  )
}

export default Users;