import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route {...rest}
   render = {props => (window.localStorage.getItem("Authorization") ?
   <Component {...props}/> : 
   <Redirect to='/login'/>)}
  />
)

const mapStateToProps = state => ({ user: state.users });

export default connect(mapStateToProps, null)(PrivateRoute);