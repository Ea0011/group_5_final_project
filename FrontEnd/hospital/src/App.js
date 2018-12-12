import React, { Component } from 'react';
import logo from './logo.svg';
import Calendar from './components/calendar';
import { connect } from 'react-redux';
import * as doctorActions from './actions/doctors';
import * as appointmentsActions from './actions/appointments';
import * as proceduresActions from './actions/procedures';
import './App.css';

class App extends Component {
  state = {
    loading: true
  }

  async componentDidMount() {
    try {
      const headers = new Headers();
      headers.append("Authorization", "MngBPwKx_x7gr1DuFCNN");
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
        { this.state.loading ? null : <Calendar /> }
      </React.Fragment>
    );
  }
}

const mapDispatchProps = dispatch => {
  return {
    addDoctor: (doctor) => { dispatch(doctorActions.addDoctor(doctor)) },
    addAppointment: (appointment) => { dispatch(appointmentsActions.addAppointment(appointment)) },
    addProcedure: (procedure) => { dispatch(proceduresActions.addProcedure(procedure)) }
  }
}

export default connect(null, mapDispatchProps)(App);
