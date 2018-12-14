import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProcedureList from './procedure_list';

const Procedures = (props) => {
  return(
    <React.Fragment>
      <Switch>
        <Route path='/' component={ProcedureList} />
        {/* <Route path='/patient/:id' component={Patient} /> */}
      </Switch>
    </React.Fragment>
  )
}

export default Procedures;