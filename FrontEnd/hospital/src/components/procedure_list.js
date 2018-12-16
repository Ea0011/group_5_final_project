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
import * as procedureActions from '../actions/procedures';

const ProcedureList = ({ getProcedures, removeProcedure }) => {
  return(
    <React.Fragment>
      <Typography variant="h6">Procedures</Typography>
      <Grid container direction="column">
        {getProcedures().map(procedure => (
          <Grid item key={procedure.id}>
            <List>
              <ListItem>
                <ListItemText
                  primary={procedure.name}
                  secondary={`${procedure.duration} Hours`}
                />
              </ListItem>
              <ListItemSecondaryAction style={{marginRight: -32}}>
                <IconButton>
                  <Delete onClick={(e) => { removeProcedure(procedure.id) }}/>
                </IconButton>
              </ListItemSecondaryAction>
              <ListItemSecondaryAction style={{marginRight: -84}}>
                <Link to={`/procedures/${procedure.id}`} style={{textDecoration: 'none'}}>
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

const mapStateToProps = state => ({
  getProcedures: () => selectors.getProcedures(state)
});

const mapDispatchToProps = dispatch => ({
  removeProcedure: async(id) => {
    try {
      const headers = new Headers();
      headers.append("Authorization", window.localStorage.getItem("Authorization"));
      const params = { method: 'DELETE', headers }
      const deleteRequest = await fetch(`http://localhost:3000/procedures/${id}`, params);
      if (deleteRequest.ok) {
        dispatch(procedureActions.deleteProcedure(id));
      } else {
        alert("Something went wrong");
      }
    } catch(e) {
      console.error(e);
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProcedureList);