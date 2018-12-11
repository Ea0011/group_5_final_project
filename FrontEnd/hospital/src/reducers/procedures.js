import * as actionTypes from '../constants/actionTypes';

export const patients = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ADD_PROCEDURE: {
            const newProcedure = {}
            newProcedure[action.payload.id] = {...action.payload};
            return Object.assign(state, newProcedure);
        }
        case actionTypes.DELETE_PROCEDURE: {
            const newState = {...state};
            delete newState[action.payload.id];
            return newState;
        }
        case actionTypes.UPDATE_PROCEDURE: {
            const { id, newProcedure } = action.payload;
            const newDetails = Object.assign({}, state[id], newProcedure);
            const updatedProcedure = {};
            updatedProcedure[id] = newDetails;
            return Object.assign({}, state, updatedProcedure);
        }
        case actionTypes.ADD_PROCEDURE_APPOINTMENT: {
            const { id, appointmentId } = action.payload;
            const newDetails = { ...state[id] };
            newDetails.appointments.push(appointmentId);
            const updatedProcedure = {}
            updatedProcedure[id] = newDetails;
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
            return Object.assign({}, state, updatedProcedure);
        }
        default:
            return state;
    }
}