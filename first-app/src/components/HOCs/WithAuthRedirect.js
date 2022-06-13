import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Redirect, Route, Routes } from 'react-router-dom';

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export const WithAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return (
        <Routes>
          <Route path='*' element={<Navigate replace to='/login' />} />
        </Routes>
      );

      return (
      <Component {...this.props} />
  )
    }
  }

  const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

  return ConnectedRedirectComponent;
};