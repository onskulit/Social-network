import styles from './Users.module.css';

function Users (props) {
  let usersJSX = props.users.map(user => {
    return (
      <div className='user__container' key={ user.id }>
        <img src={ user.img } alt='avatar' className={styles.avatar}></img>
        <div>{ user.fullName }</div>
        <div>{ user.status }</div>
        <div>{ `${user.location.country}, ${user.location.city}` }</div>
        {user.isFollowed 
        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button> 
        : <button onClick={() => props.follow(user.id)}>Follow</button>}
      </div>
    )
  });

  return (
    <div>
      { usersJSX }
    </div>
  )
}

export default Users;