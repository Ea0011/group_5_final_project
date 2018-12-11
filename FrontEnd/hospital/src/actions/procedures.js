import * as actionTypes from '../constants/actionTypes';

export const addProcedure = procedure => {
    const action = { type: actionTypes.ADD_PROCEDURE };
    const appointments = procedure.appointments.map(appointment => appointment.id);
    const newProcedure = { ...procedure, appointments };
    action.payload = newProcedure;
    return action;
}

export const deleteProcedure = id => (
    { type: actionTypes.DELETE_PROCEDURE, payload: { id } }
)

export const updateProcedure = (id, newProcedure) => (
    { type: actionTypes.UPDATE_PROCEDURE, payload: { id, newProcedure} }
)

export const addProcedureAppointment = (id, appointmentId) => (
    { type: actionTypes.ADD_PROCEDURE_APPOINTMENT, payload: { id, appointmentId } }
)

export const deleteProcedureAppointment = (id, appointmentId) => (
    { type: actionTypes.DELETE_PROCEDURE_APPOINTMENT, payload: { id, appointmentId } }
)