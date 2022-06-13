import { connect } from 'react-redux';
import { WithAuthRedirect } from '../HOCs/WithAuthRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    persons: state.dialogsPage.persons,
  }
}

const MapDispatchToProps = (dispatch) => {
  return {

  }
}

const AuthRedirectedComponent = WithAuthRedirect(Dialogs); 

const DialogsContainer = connect(mapStateToProps, MapDispatchToProps)(AuthRedirectedComponent);

export default DialogsContainer;