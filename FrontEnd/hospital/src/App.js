import React, { Component } from 'react';
import Calendar from './components/calendar';
import { connect } from 'react-redux';
import * as doctorActions from './actions/doctors';
import * as appointmentsActions from './actions/appointments';
import * as proceduresActions from './actions/procedures';
import * as userActions from './actions/user';
import Authorization from './components/authorize';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import { PrivateRoute } from './routing/private_route';

class App extends Component {
  state = {
    loading: true
  }

  async componentDidMount() {
    try {
      const headers = new Headers();
      headers.append("Authorization", window.localStorage.getItem("Authorization"));
      const requests = await Promise.all([
        fetch("http://localhost:3000/doctors", { headers }),
        fetch("http://localhost:3000/appointments", { headers }),
        fetch("http://localhost:3000/procedures", { headers })
      ])

      const [ doctors, appointments, procedures ] = await Promise.all(requests.map(req => req.json()));

      doctors.forEach(doc => { this.props.addDoctor(doc) });
      appointments.forEach(app => { this.props.addAppointment(app) });
      procedures.forEach(proc => { this.props.addProcedure(proc) });
      this.setState({ loading: false });
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <PrivateRoute exact path='/' component={() => this.state.loading ? null : <Calendar />} />
          <Route path='/login' component={Authorization} />
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
