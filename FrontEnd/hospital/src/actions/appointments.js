import * as actionTypes from '../constants/actionTypes';

export const addAppointment = appointment => {
  const patientId = appointment.patient.id;
  const doctorId = appointment.doctor.id;
  const procedureId = appointment.procedure.id;
  const specialist = appointment.doctor.specialization;

  return { 
    type: actionTypes.ADD_APPOINTMENT,
    payload: { ...appointment, patient: patientId, doctor: doctorId, procedure: procedureId, specialist }
  };
}

export const deleteAppointment = id => (
  { type: actionTypes.DELETE_APPOINTMENT, payload: { id } }
)

export const updateAppointment = (id, newAppointment) => (
  { type: actionTypes.UPDATE_APPOINTMENT, payload: { id, newAppointment } }
)