import React from 'react';
import Timeline from 'react-calendar-timeline';
import moment from 'moment';
import { connect } from 'react-redux';
import * as selectors from '../selectors/selectors';
import 'react-calendar-timeline/lib/Timeline.css'

const Calendar = ({
  getDoctors,
  getProcedureByAppointment,
  getAppointments 
}) => {
  // const groups = [
  //   {id: 1, title: 'group 1'},
  //   {id: 2, title: 'group 2'}
  // ]
   
  // const items = [
  //   {id: 1, group: 1, title: 'item 1', start_time: moment(), end_time: moment().add(1, 'hour')},
  //   {id: 2, group: 2, title: 'item 2', start_time: moment().add(-0.5, 'hour'), end_time: moment().add(0.5, 'hour')},
  //   {id: 3, group: 1, title: 'item 3', start_time: moment().add(2, 'hour'), end_time: moment().add(3, 'hour')}
  // ]
  return(
    <div>
      <Timeline groups={getDoctors().map(doctor => { return { id: doctor.id, title: doctor.fname + doctor.lname } })}
                items={getAppointments().map(appt => { return { id: appt.id, group: appt.doctor, title: getProcedureByAppointment(appt.id).name, start_time: new Date(appt.start_date), end_time: new Date(appt.end_date)} })}
                defaultTimeStart={moment().add(-12, 'hour')}
                defaultTimeEnd={moment().add(12, 'hour')}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    getAppointmentsByDoctor: (specialist, doctorId) => {
       return selectors.getAppointmentsByDoctor(state, specialist, doctorId)
    },
    getProcedureByAppointment: id => { return selectors.getProcedureByAppointment(state, id) },
    getDoctors: () => { return selectors.getDoctors(state) },
    getAppointments: () => selectors.getAppointments(state)
  }
}

export default connect(mapStateToProps, null)(Calendar);