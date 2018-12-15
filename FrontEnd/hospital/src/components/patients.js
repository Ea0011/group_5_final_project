import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PatientList from './patient_list';
import AddPatient from './add_patient';
import UpdatePatient from './update_patient';

const Patients = (props) => {
  return(
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={PatientList} />
        <Route path='/newpatient' component={AddPatient} />
        <Route path='/patients/:id' component={UpdatePatient} />
      </Switch>
    </React.Fragment>
  )
}

export default Patients;