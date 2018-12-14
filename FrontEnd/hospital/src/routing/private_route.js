import { Route, Redirect } from 'react-router-dom';
import React from 'react';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
   render = {props => (window.localStorage.getItem("Authorization") ?
   <Component {...props}/> : 
   <Redirect to='/login'/>)}
  />
)