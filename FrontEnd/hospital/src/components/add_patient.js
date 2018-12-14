import React from 'react';
import { connect } from 'react-redux';
import * as patientActions from '../actions/patients';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class AddPatient extends React.PureComponent {
  state = {
    fname: '',
    lname: '',
    email: null,
    pnumber: '',
    age: '',
    gender: 'Male'
  }

  addPatient = async(patient) => {
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
      const params = { method: 'POST', headers, body: formData };
      const addPatientRequest = await fetch("http://localhost:3000/patients", params);
      const response = await addPatientRequest.json();
      this.props.addPatient(response);
    } catch(e) {
      alert("Something went wrong");
    }
  }

  handleClick = () => {
    const { fname, lname, email, pnumber, age, gender } = this.state;
    if (fname && lname && pnumber && age && gender && email) {
      this.addPatient({ fname, lname, email, pnumber, age, gender });
    } else {
      alert("All fields are mandatory");
    }
  }

  render() {
    return(
      <Grid container direction="column" alignItems="center">
        <TextField 
          hint="Enter firt name"
          label="first name"
          onChange={(e) => { this.setState({ fname: e.target.value }) }} />
        <TextField 
          hint="Enter last name"
          label="last name"
          onChange={(e) => { this.setState({ lname: e.target.value }) }} />
        <TextField 
          hint="Enter email"
          label="email"
          onChange={(e) => { this.setState({ email: e.target.value }) }} />
        <TextField 
          hint="Enter phone number"
          label="phone number"
          onChange={(e) => { this.setState({ pnumber: e.target.value }) }} />
        <TextField 
          hint="Enter the age"
          label="age"
          onChange={(e) => { this.setState({ age: e.target.value }) }} />
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

const mapDispatchToProps = dispatch => ({
  addPatient: (patient) => { dispatch(patientActions.addPatient(patient)) }
});

export default connect(null, mapDispatchToProps)(AddPatient);