import { connect } from 'react-redux';
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

const DialogsContainer = connect(mapStateToProps, MapDispatchToProps)(Dialogs);

export default DialogsContainer;