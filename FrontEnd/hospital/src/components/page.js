import React from 'react';
import Calendar from './calendar';
import * as doctorActions from '../actions/doctors';
import * as appointmentsActions from '../actions/appointments';
import * as proceduresActions from '../actions/procedures';
import * as userActions from '../actions/user';
import * as patientActions from '../actions/patients';
import { connect } from 'react-redux';
import Patients from './patients';
import Procedures from './procedures';
import Grid from '@material-ui/core/Grid';

class Page extends React.PureComponent {
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
        fetch("http://localhost:3000/procedures", { headers }),
        fetch("http://localhost:3000/patients", { headers })
      ]);

      const [ doctors, appointments, procedures, patients ] = await Promise.all(requests.map(req => req.json()));
      doctors.forEach(doc => { this.props.addDoctor(doc) });
      appointments.forEach(app => { this.props.addAppointment(app) });
      procedures.forEach(proc => { this.props.addProcedure(proc) });
      patients.forEach(patient => { this.props.addPatient(patient) });
      this.setState({ loading: false });
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    return(
      this.state.loading ? null :
      <React.Fragment>
        <Calendar style={{ height: '30%' }}/>
        <Grid container direction="row" style={{ height: '70%' }}>
          <Grid container style={{width: '45%', margin: 8}}>
            <Grid item>
              <Patients />
            </Grid>
          </Grid>
          <Grid container style={{width: '50%'}}>
            <Grid item>
              <Procedures />
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

const mapDispatchProps = dispatch => {
  return {
    addDoctor: (doctor) => { dispatch(doctorActions.addDoctor(doctor)) },
    addAppointment: (appointment) => { dispatch(appointmentsActions.addAppointment(appointment)) },
    addProcedure: (procedure) => { dispatch(proceduresActions.addProcedure(procedure)) },
    addPatient: (patient) => { dispatch(patientActions.addPatient(patient)) },
    setUser: (user) => { dispatch(userActions.setUser(user)) }
  }
}

export default connect(null, mapDispatchProps)(Page);