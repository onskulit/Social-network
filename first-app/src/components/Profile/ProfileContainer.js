import { connect } from 'react-redux';
import Profile from './Profile';
import { WithAuthRedirect } from '../HOCs/WithAuthRedirect';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    addPost: (theme, text) => {
      dispatch({ type: 'ADD_POST', theme: theme, text: text });
    },
  }
}

const AuthRedirectedComponent = WithAuthRedirect(Profile); 

const profileContainer = connect(mapStateToProps, MapDispatchToProps)(AuthRedirectedComponent);

export default profileContainer;