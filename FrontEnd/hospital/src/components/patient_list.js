import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import * as selectors from '../selectors/selectors';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import * as patientActions from '../actions/patients';

const PatientList = ({ getPatients, removePatient }) => {
  return(
    <React.Fragment>
      <Typography variant="h6">Patients</Typography>
      <Grid container direction="column">
        {getPatients().map(patient => (
          <Grid item key={patient.id}>
            <List>
              <ListItem>
                <ListItemText
                  primary={patient.fname + " " + patient.lname}
                  secondary={patient.pnumber}
                />
              </ListItem>
              <ListItemSecondaryAction style={{marginRight: -32}}>
                <IconButton>
                  <Delete onClick={(e) => { removePatient(patient.id) }}/>
                </IconButton>
              </ListItemSecondaryAction>
              <ListItemSecondaryAction style={{marginRight: -84}}>
                <Link to={`/patients/${patient.id}`} style={{textDecoration: 'none'}}>
                  <IconButton>
                    <Edit />
                  </IconButton>
                </Link>
              </ListItemSecondaryAction>
            </List>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({ getPatients: () => selectors.getPatients(state) });
const mapDispatchToProps = dispatch => ({
  removePatient: async(id) => {
    try {
      const headers = new Headers();
      headers.append("Authorization", window.localStorage.getItem("Authorization"));
      const params = { method: 'DELETE', headers }
      const deleteRequest = await fetch(`http://localhost:3000/patients/${id}`, params);
      console.log(deleteRequest);
      if (deleteRequest.ok) {
        dispatch(patientActions.deletePatient(id));
      }
    } catch(e) {
      console.error(e);
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);