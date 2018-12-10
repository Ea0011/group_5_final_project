import * as actionTypes from '../constants/actionTypes';

export const addPatient = patient => {
    const action = { type: actionTypes.ADD_PATIENT };
    const appointments = patient.appointments.map(appointment => appointment.id);
    const newPatient = { ...patient, appointments };
    action.payload = newPatient;
    return action;
}

export const deletePatient = id => (
    { type: actionTypes.DELETE_PATIENT, payload: { id } }
)

export const updatePatient = (id, newPatient) => (
    { type: actionTypes.UPDATE_PATIENT, payload: { id, newPatient } }
)

export const addPatientAppointment = (id, appointmentId) => (
    { type: actionTypes.ADD_PATIENT_APPOINTMENT, payload: { id, appointmentId } }
)

export const deletePatientAppointment = (id, appointmentId) => (
    { type: actionTypes.DELETE_PATIENT_APPOINTMENT, payload: { id, appointmentId } }
)