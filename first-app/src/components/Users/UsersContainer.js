import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, addUsersAC, addPageAC, toggleIsFetchingAC } from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {dispatch(followAC(userId))},
    unfollow: (userId) => {dispatch(unfollowAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
    addUsers: (users) => {dispatch(addUsersAC(users))},
    addPage: () => {dispatch(addPageAC())},
    toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingAC(isFetching))},
  }
}

const UsersContainer = connect(mapStateToProps, MapDispatchToProps)(Users);

export default UsersContainer;