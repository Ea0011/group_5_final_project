import React from 'react';
import Timeline, { TodayMarker  } from 'react-calendar-timeline';
import moment from 'moment';
import { connect } from 'react-redux';
import * as selectors from '../selectors/selectors';
import 'react-calendar-timeline/lib/Timeline.css';

const Calendar = ({
  getDoctors,
  getProcedureByAppointment,
  getAppointments,
  history,
  getDoctorById 
}) => {
  console.log(getDoctorById(1));
  return(
    <div style={{margin: 16}}>
      <Timeline
          groups={getDoctors().map(doctor => { return { id: doctor.id, title: doctor.fname + doctor.lname } })}
          items={getAppointments().map(appt => { return { id: appt.id, group: appt.doctor, title: getProcedureByAppointment(appt.id).name, start_time: new Date(appt.start_date), end_time: new Date(appt.end_date)} })}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
          sidebarWidth={250}
          sidebarContent={"Doctors"}
          onItemClick={(item, e, time) => { console.log(item, e, time) }}
          onItemMove={(id, time, group) => {
             return true;
          }}
          onCanvasClick={(doctor, time, e) => { 
            if (time <= Date.now()) {
              alert("Cannot create appointment in the past");
            } else {
              console.log(doctor);
              history.push(`/newappointment/${getDoctorById(doctor).specialization}/${doctor}/${time}`);
            }
          }}
          canResize={false}>
        <TodayMarker />
      </Timeline>
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
    getAppointments: () => selectors.getAppointments(state),
    getDoctorById: (id) => selectors.getDoctorById(state, id),
    getAppointmentById: (id) => selectors.getAppointmentById(state, id)
  }
}

export default connect(mapStateToProps, null)(Calendar);