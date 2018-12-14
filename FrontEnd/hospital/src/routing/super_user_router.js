import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const SuperRoute = ({ component: Component, user, ...rest }) => { console.log(user); return (
  <Route {...rest} 
    render={props => (window.localStorage.getItem("Authorization") && user && user.super_user) ? 
    <Component {...props} />:
    <Redirect to='/login' />}
  />
)}

const mapStateToProps = state => ({ user: state.users });

export default connect(mapStateToProps, null)(SuperRoute);