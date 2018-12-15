import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddAppointment from './add_appointment';

const Appoinments = (props) => {
  return(
    <Switch>
      <Route path='/newappointment/:specialist/:id/:startDate' component={AddAppointment} />
    </Switch>
  )
}

export default Appoinments;