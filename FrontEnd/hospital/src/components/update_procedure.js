import React from 'react';
import { connect } from 'react-redux';
import * as procedureActions from '../actions/procedures';
import * as selectors from '../selectors/selectors';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class UpdateProcedure extends React.PureComponent {
  state = {
    name: this.props.procedure.name,
    duration: this.props.procedure.duration,
    specialist: this.props.procedure.specialist
  }

  updateProcedure = async(procedure) => {
    try {
      const headers = new Headers();
      headers.append("Authorization", window.localStorage.getItem("Authorization"));
      const formData = new FormData();
      const { name, duration, specialist } = procedure;
      formData.append("name", name);
      formData.append("duration", duration);
      formData.append("specialist", specialist);
      const params = { method: 'PUT', headers, body: formData };
      const updateProcedureRequest = await fetch(`http://localhost:3000/procedures/${this.props.procedure.id}`, params);
      const response = await updateProcedureRequest.json();
      this.props.updateProcedure(response);
    } catch(e) {
      alert("Something went wrong");
    }
  }

  handleClick = () => {
    const { name, duration, specialist } = this.state;
    if (name && duration && specialist) {
      this.updateProcedure({ name, duration, specialist });
    } else {
      alert("All fields are mandatory");
    }
  }

  render() {
    return(
      <Grid container direction="column" alignItems="center">
        <TextField
          value={this.state.name}   
          hint="name"
          label="name"
          onChange={(e) => { this.setState({ name: e.target.value }) }} />
        <h5> select duration </h5>
        <Select 
          value={this.state.duration}
          onChange={(e) => { this.setState({ duration: e.target.value }) }}>
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={6}>Six</MenuItem>
          <MenuItem value={7}>Seven</MenuItem>
          <MenuItem value={8}>Eight</MenuItem>
          <MenuItem value={9}>Nine</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select> 
        <h5> select specialist </h5>
        <Select 
          value={this.state.specialist}
          onChange={(e) => { this.setState({ specialist: e.target.value }) }}>
          {this.props.getSpecialists().map(specialist => (<MenuItem key={specialist} value={specialist}>{specialist}</MenuItem>))}
        </Select> 
        <Button
          primary="true"
          onClick={this.handleClick}>Submit</Button>
        </Grid>
    )
  }
}
const mapStateToProps = (state, { match }) => ({procedure: state.procedures[match.params.id], getSpecialists: ()  => selectors.getSpecialists(state)})
const mapDispatchToProps = dispatch => ({
  updateProcedure: (procedure) => { dispatch(procedureActions.updateProcedure(procedure.id, procedure)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProcedure);