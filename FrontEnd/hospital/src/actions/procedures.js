import * as actionTypes from '../constants/actionTypes';

export const addProcedure = procedure => {
    const action = { type: actionTypes.ADD_PROCEDURE };
    const appointments = procedure.appointments.map(appointment => appointment.appointment_id);
    const newProcedure = { ...procedure, appointments };
    action.payload = newProcedure;
    return action;
}

export const deleteProcedure = procedureId => (
    { type: actionTypes.DELETE_PROCEDURE, payload: { procedureId } }
)

export const updateProcedure = (procedureId, newProcedure) => (
    { type: actionTypes.UPDATE_PROCEDURE, payload: { procedureId, newProcedure} }
)

export const addPatientAppointment = (patientId, appointmentId) => (
    { type: actionTypes.ADD_PATIENT_APPOINTMENT, payload: { patientId, appointmentId } }
)