import React from 'react';
import Timeline, { TodayMarker  } from 'react-calendar-timeline';
import moment from 'moment';
import { connect } from 'react-redux';
import * as selectors from '../selectors/selectors';
import 'react-calendar-timeline/lib/Timeline.css';
import * as appointmentActions from '../actions/appointments';

const reschedule = async(startDate, endDate, doctorId, appointmentId, cb) => {
  try {
    const formData = new FormData();
    formData.append("start_date", startDate);
    formData.append("end_date", endDate);
    formData.append("doctor_id", doctorId);
    const headers = new Headers();
    headers.append("Authorization", window.localStorage.getItem("Authorization"));
    const params = { method: 'PUT',  headers, body: formData };

    const updateRequest = await fetch(`http://localhost:3000/appointments/${appointmentId}`, params);
    const response = await updateRequest.json();
    const newAppointment = {...response, doctor: doctorId, patient: response.patient.id, procedure: response.procedure.id};
    cb(appointmentId, newAppointment);
  } catch(e) {
    console.error(e);
  }
}

const Calendar = ({
  getDoctors,
  getProcedureByAppointment,
  getAppointments,
  history,
  getDoctorById,
  updateAppointment 
}) => {
  return(
    <div style={{margin: 16}}>
      <Timeline
          groups={getDoctors.map(doctor => { return { id: doctor.id, title: doctor.fname + " " + doctor.specialization } })}
          items={getAppointments.map(appt => { return { id: appt.id, group: appt.doctor, title: getProcedureByAppointment(appt.id).name, start_time: new Date(appt.start_date), end_time: new Date(appt.end_date)} })}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
          sidebarWidth={250}
          sidebarContent={"Doctors"}
          onItemMove={(id, time, group) => {
             const doctor = getDoctors[group];
             const procedure = getProcedureByAppointment(id);
             if (doctor.specialization !== procedure.specialist) {
               alert("This specialist cannot peform current procedure");
             } else if(time <= Date.now()) {
                alert("Cannot reschedule into past");
             } else {
               const startDate = new Date(parseInt(time));
               const endDate = new Date(startDate.getTime() + (procedure.duration * 1000 * 60 * 60));
               const doctorId = doctor.id;
               reschedule(startDate, endDate, doctorId, id, updateAppointment); 
             }
          }}
          onCanvasClick={(doctor, time, e) => { 
            if (time <= Date.now()) {
              alert("Cannot create appointment in the past");
            } else {
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
    getDoctors: selectors.getDoctors(state),
    getAppointments: selectors.getAppointments(state),
    getDoctorById: (id) => selectors.getDoctorById(state, id),
    getAppointmentById: (id) => selectors.getAppointmentById(state, id)
  }
}

const mapDispatchToProps = dispatch => ({
  updateAppointment: (id, newAppointment) => { dispatch(appointmentActions.updateAppointment(id, newAppointment)) } 
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);