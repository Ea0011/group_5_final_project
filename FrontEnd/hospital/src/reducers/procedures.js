import * as actionTypes from '../constants/actionTypes';

export const patients = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ADD_PROCEDURE: {
            const newProcedure = {}
            newProcedure[action.payload.procedureId] = {...action.payload};
            return Object.assign(state, newProcedure);
        }
        case actionTypes.DELETE_PROCEDURE: {
            const newState = {...state};
            delete newState[action.payload.procedureId];
            return newState;
        }
        case actionTypes.UPDATE_PROCEDURE: {
            const { procedureId, newProcedure } = action.payload;
            const newDetails = Object.assign({}, state[procedureId], newProcedure);
            const updatedProcedure = {};
            updatedProcedure[procedureId] = newDetails;
            return Object.assign({}, state, updatedProcedure);
        }
        case actionTypes.ADD_PROCEDURE_APPOINTMENT: {
            const { procedureId, appointmentId } = action.payload;
            const newDetails = { ...state[procedureId] };
            newDetails.appointments.push(appointmentId);
            const updatedProcedure = {}
            updatedProcedure[procedureId] = newDetails;
            return Object.assign({}, state, updatedProcedure);
        }
        case actionTypes.DELETE_PROCEDURE_APPOINTMENT: {
            const { id, appointmentId } = action.payload;
            const currentAppointments = [ ...state[id].appointments ];
            const appointmentIdx = currentAppointments.indexOf(appointmentId);
            currentAppointments.splice(appointmentIdx, 1);
            const newDetails = { ...state[id], appointments: currentAppointments };
            const updatedProcedure = {};
            updatedProcedure[id] = newDetails;
            return Object.assign({}, state, updatedPatient);
        }
        default:
            return state;
    }
}