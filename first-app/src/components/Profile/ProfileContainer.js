import { connect } from 'react-redux';
import Profile from './Profile';

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

const profileContainer = connect(mapStateToProps, MapDispatchToProps)(Profile);

export default profileContainer;