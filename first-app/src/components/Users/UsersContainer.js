import { connect } from 'react-redux';
import { follow, setUsers, unfollow, addUsers, addPage, toggleIsFetching, getUsersThunkCreator } from '../../redux/usersReducer';
import Users from './Users';
import { WithAuthRedirect } from '../HOCs/WithAuthRedirect';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

/* const MapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {dispatch(followAC(userId))},
    unfollow: (userId) => {dispatch(unfollowAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
    addUsers: (users) => {dispatch(addUsersAC(users))},
    addPage: () => {dispatch(addPageAC())},
    toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingAC(isFetching))},
  }
} */

const AuthRedirectedComponent = WithAuthRedirect(Users); 

const UsersContainer = connect(mapStateToProps, 
  { follow, setUsers, unfollow, addUsers, addPage, toggleIsFetching, getUsersThunkCreator })(AuthRedirectedComponent);

export default UsersContainer;