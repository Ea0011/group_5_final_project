import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, Select, MenuItem } from '@material-ui/core';
import * as selectors from '../selectors/selectors';
import * as appointmentActions from '../actions/appointments';
import * as patientActions from '../actions/patients';
import Button from '@material-ui/core/Button';
import * as doctorActions from '../actions/doctors';

class AddAppointment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      patient: this.props.getPatients[0] === undefined ? null : this.props.getPatients[0].id,
      procedure: this.props.getProcedures[0] === undefined ? null : this.props.getProcedures[0].id,
    }
  }

  handleSubmit = async() => {
    try {
      const headers = new Headers();
      headers.append("Authorization", window.localStorage.getItem("Authorization"));
      const formData = new FormData();
      const { procedure, patient } = this.state;
      const { startDate, doctor } = this.props;
      formData.append("patient_id", patient);
      formData.append("procedure_id", procedure);
      formData.append("doctor_id", doctor.id);
      formData.append("start_date", startDate);
      formData.append("end_date", new Date(startDate.getTime() + (this.props.getProcedure(procedure).duration * 1000 * 60 * 60)));
      const params = { method: 'POST', headers, body: formData };
      const addRequest = await fetch("http://localhost:3000/appointments", params);
      const response = await addRequest.json();
      if (addRequest.ok) {
        this.props.addAppointment(response);
      } else {
        alert("Something went wrong, check times");
      }
    } catch(e) {
      console.log(e);
    }
  }

  static getDerivedStateFromProps(props, state) {
    const newState = {...state};
    newState.procedure = props.getProcedures[0] === undefined ? null : props.getProcedures[0].id
    return newState;
  }

  render() {
    return(
      !this.state.patient || !this.state.procedure ? <h1>No patients or no suitable procedures</h1> : 
      <React.Fragment>
        <Grid container direction="column" alignItems="center">
          <Typography variant="h6">{this.props.doctor.fname + " " + this.props.doctor.lname}</Typography>
          <h6>select procedure</h6>
          <Select value={this.state.procedure} style={{width: '80%'}} onChange={(e) => { this.setState({ procedure: e.target.value }) }}>
            {this.props.getProcedures.map(proc => <MenuItem key={proc.id} value={proc.id}>{proc.name}</MenuItem>)}
          </Select>
          <h6>select patient</h6>
          <Select value={this.state.patient} style={{width: '80%'}} onChange={(e) => { this.setState({ patient: e.target.value }) }}>
            {this.props.getPatients.map(patient => <MenuItem key={patient.id} value={patient.id}>{patient.fname +
             " " + patient.lname}</MenuItem>)}
          </Select>
          <h6>Start Date: { this.props.startDate.toDateString() + " " + this.props.startDate.getHours() + " : " + this.props.startDate.getMinutes()}</h6>
          <h6>Duration: {this.props.getProcedure(this.state.procedure).duration + " Hrs"}</h6>
        </Grid>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, { match }) => ({
  doctor: state.doctors[match.params.specialist][match.params.id],
  getProcedures: selectors.getProceduresBySpecialist(state, match.params.specialist),
  getPatients: selectors.getPatients(state),
  startDate: new Date(parseInt(match.params.startDate)),
  getProcedure: (id) => selectors.getProcedureById(state, id)
});

const mapDispatchToProps = dispatch => ({
  addAppointment: (appointment) => { 
    dispatch(appointmentActions.addAppointment(appointment));
    dispatch(patientActions.addPatientAppointment(appointment.patient.id, appointment.id)); 
    dispatch(doctorActions.addDoctorAppointment(appointment.doctor.specialization, appointment.doctor.id, appointment.id)) 
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAppointment);