import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProcedureList from './procedure_list';
import AddProcedure from './add_procedure';
import UpdateProcedure from './update_procedure'

const Procedures = (props) => {
  return(
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={ProcedureList} />
        <Route path='/newprocedure' component={AddProcedure} />
        <Route path='/procedures/:id' component={UpdateProcedure} />
      </Switch>
    </React.Fragment>
  )
}

export default Procedures;