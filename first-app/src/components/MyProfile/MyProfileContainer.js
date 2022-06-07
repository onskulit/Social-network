import { connect } from 'react-redux';
import MyProfile from './MyProfile';

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

const MyProfileContainer = connect(mapStateToProps, MapDispatchToProps)(MyProfile);

export default MyProfileContainer;