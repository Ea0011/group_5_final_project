import React from 'react';
import { connect } from 'react-redux';
import * as patientActions from '../actions/patients';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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

  render() {
      console.log(this.props);
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
        </Grid>
    )
  }
}
const mapStateToProps = (state, { match }) => ({patient: state.patients[match.params.id]})
const mapDispatchToProps = dispatch => ({
  updatePatient: (patient) => { dispatch(patientActions.updatePatient(patient)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePatient);