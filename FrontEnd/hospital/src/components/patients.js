import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PatientList from './patient_list';

const Patients = (props) => {
  return(
    <React.Fragment>
      <Switch>
        <Route path='/' component={PatientList} />
        {/* <Route path='/patient/:id' component={Patient} /> */}
      </Switch>
    </React.Fragment>
  )
}

export default Patients;