import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, addUsersAC, addPageAC } from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {dispatch(followAC(userId))},
    unfollow: (userId) => {dispatch(unfollowAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
    addUsers: (users) => {dispatch(addUsersAC(users))},
    addPage: () => {dispatch(addPageAC())},
  }
}

const UsersContainer = connect(mapStateToProps, MapDispatchToProps)(Users);

export default UsersContainer;