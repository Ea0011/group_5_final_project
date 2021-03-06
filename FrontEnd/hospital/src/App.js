import React from 'react';
import Page from './components/page';
import { connect } from 'react-redux';
import * as doctorActions from './actions/doctors';
import * as appointmentsActions from './actions/appointments';
import * as proceduresActions from './actions/procedures';
import * as userActions from './actions/user';
import Authorization from './components/authorize';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import PrivateRoute from './routing/private_route';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <PrivateRoute exact path='/' component={Page} />
          <PrivateRoute path='/patients' component={Page} />
          <PrivateRoute path='/procedures' component={Page} />
          <PrivateRoute path='/newpatient' component={Page} />
          <PrivateRoute path='/newprocedure' component={Page} />
          <PrivateRoute path='/newappointment' component={Page} />
          <Route path='/login' component={Authorization} />
          {/* <SuperRoute path='/adminpage' component={AdminPage} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

const mapDispatchProps = dispatch => {
  return {
    addDoctor: (doctor) => { dispatch(doctorActions.addDoctor(doctor)) },
    addAppointment: (appointment) => { dispatch(appointmentsActions.addAppointment(appointment)) },
    addProcedure: (procedure) => { dispatch(proceduresActions.addProcedure(procedure)) },
    setUser: (user) => { dispatch(userActions.setUser(user)) }
  }
}

export default withRouter(connect(null, mapDispatchProps)(App));
