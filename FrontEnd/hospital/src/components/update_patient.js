import React from 'react';
import { connect } from 'react-redux';
import * as patientActions from '../actions/patients';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import * as selectors from '../selectors/selectors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import Delete from '@material-ui/icons/DeleteForever';
import * as appointmentActions from '../actions/appointments';
import * as doctorActions from '../actions/doctors';

class UpdatePatient extends React.PureComponent {
  state = {
    fname: this.props.patient.fname,
    lname: this.props.patient.lname,
    email: this.props.patient.email,
    pnumber: this.props.patient.pnumber,
    age: this.props.patient.age,
    gender: this.props.patient.gender
  }

  updatePatient = async(patient) => {
    try {
      const headers = new Headers();
      headers.append("Authorization", window.localStorage.getItem("Authorization"));
      const formData = new FormData();
      const { fname, lname, email, pnumber, age, gender } = patient;
      formData.append("fname", fname);
      formData.append("lname", lname);
      formData.append("email", email);
      formData.append("age", age);
      formData.append("pnumber", pnumber);
      formData.append("gender", gender);
      const params = { method: 'PUT', headers, body: formData };
      const updatePatientRequest = await fetch("http://localhost:3000/patients", params);
      const response = await updatePatientRequest.json();
      this.props.updatePatient(response);
    } catch(e) {
      alert("Something went wrong");
    }
  }

  handleClick = () => {
    const { fname, lname, email, pnumber, age, gender } = this.state;
    if (fname && lname && pnumber && age && gender && email) {
      this.updatePatient({ fname, lname, email, pnumber, age, gender });
    } else {
      alert("All fields are mandatory");
    }
  }

  deleteAppointment = async(apptId, cb) => {
    try {
      const headers = new Headers();
      headers.append("Authorization", window.localStorage.getItem("Authorization"));
      const params = { method: 'DELETE', headers };
      const deleteRequest = await fetch(`http://localhost:3000/appointments/${apptId}`, params);
      if (!deleteRequest.ok) {
        alert("Something went wrong");
      } else {
        cb(apptId, this.props.patient.id, this.props.getDoctorByAppointment(apptId));
      }
    } catch(e) {
      console.error(e);
    }
  }

  dateFormat = (string) => {
    const date = new Date(string);
    const yearOnly = date.getFullYear();
    const monthOnly = date.getMonth();
    const dateOnly = date.getDate();
    const hoursOnly = date.getHours();
    const minutesOnly = date.getMinutes();

    return `${yearOnly}-${monthOnly}-${dateOnly} ${hoursOnly}:${minutesOnly};`
  }

  render() {
    return(
      <Grid container direction="column" alignItems="center">
        <TextField
          value={this.state.fname}   
          hint="Enter firt name"
          label="first name"
          onChange={(e) => { this.setState({ fname: e.target.value }) }} />
        <TextField 
          value={this.state.lname}
          hint="Enter last name"
          label="last name"
          onChange={(e) => { this.setState({ lname: e.target.value }) }} />
        <TextField 
          value={this.state.email}
          hint="Enter email"
          label="email"
          onChange={(e) => { this.setState({ email: e.target.value }) }} />
        <TextField 
          value={this.state.pnumber}
          hint="Enter phone number"
          label="phone number"
          onChange={(e) => { this.setState({ pnumber: e.target.value }) }} />
        <TextField 
          value={this.state.age}
          hint="Enter the age"
          label="age"
          onChange={(e) => { this.setState({ age: e.target.value }) }} />
        <h5> select gender </h5>
        <Select 
          value={this.state.gender}
          onChange={(e) => { this.setState({ gender: e.target.value }) }}>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Femal</MenuItem>
        </Select>  
        <Button
          primary="true"
          onClick={(e) => { this.handleClick() }}>Submit</Button>
          {this.props.patientAppointments.length === 0 ? null : (
            <List dense={false}>
              {this.props.patientAppointments.map(appt => 
                <ListItem key={appt.id}>
                  <ListItemText
                   primary={`from:${this.dateFormat(appt.start_date)} to:${this.dateFormat(appt.end_date)}`}
                   secondary={`Doctor: ${this.props.getDoctorByAppointment(appt.id).fname}`}/>
                   <ListItemSecondaryAction>
                     <IconButton onClick={(e) => { this.deleteAppointment(appt.id, this.props.deleteAppointment) }}>
                       <Delete />
                     </IconButton>
                   </ListItemSecondaryAction>
                </ListItem>
              )}
            </List>
          )}
        </Grid>
    )
  }
}
const mapStateToProps = (state, { match }) => ({
  patient: state.patients[match.params.id],
  patientAppointments: selectors.getAppointmentsByPatient(state, match.params.id),
  getDoctorByAppointment: (id) => selectors.getDoctorByAppointment(state, id)
})
const mapDispatchToProps = dispatch => ({
  updatePatient: (patient) => { dispatch(patientActions.updatePatient(patient)) },
  deleteAppointment: (apptId, patientId, doctor) => { 
    dispatch(patientActions.deletePatientAppointment(patientId, apptId));
    dispatch(appointmentActions.deleteAppointment(apptId));
    dispatch(doctorActions.deleteDoctorAppointment(doctor.specialization, doctor.id, apptId))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePatient);