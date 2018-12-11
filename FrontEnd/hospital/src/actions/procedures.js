import * as actionTypes from '../constants/actionTypes';

export const addProcedure = procedure => {
    const action = { type: actionTypes.ADD_PROCEDURE };
<<<<<<< HEAD
    const appointments = [1];
    const newProcedure = { ...procedure,  appointments};
=======
    const appointments = procedure.appointments.map(appointment => appointment.id);
    const newProcedure = { ...procedure, appointments };
>>>>>>> 1f43735e25ffa8ca370dcbd3b45120208b61376e
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