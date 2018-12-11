import * as actionTypes from '../constants/actionTypes';

export const patients = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ADD_PATIENT: {
            const newPatient = {}
            newPatient[action.payload.id] = {...action.payload};
            return Object.assign(state, newPatient);
        }
        case actionTypes.DELETE_PATIENT: {
            const newState = {...state};
            delete newState[action.payload.id];
            return newState;
        }
        case actionTypes.UPDATE_PATIENT: {
            const { id, newPatient } = action.payload;
            const newDetails = Object.assign({}, state[id], newPatient);
            const updatedPatient = {};
            updatedPatient[id] = newDetails;
            return Object.assign({}, state, updatedPatient);
        }
        case actionTypes.ADD_PATIENT_APPOINTMENT: {
            const { id, appointmentId } = action.payload;
            const currentAppointments = [ ...state[id].appointments ];
            currentAppointments.push(appointmentId);
            const newDetails = { ...state[id], appointments: currentAppointments };
            const updatedPatient = {}
            updatedPatient[id] = newDetails;
            return Object.assign({}, state, updatedPatient);
        }
        case actionTypes.DELETE_PATIENT_APPOINTMENT: {
            const { id, appointmentId } = action.payload;
            const currentAppointments = [ ...state[id].appointments ];
            const appointmentIdx = currentAppointments.indexOf(appointmentId);
            currentAppointments.splice(appointmentIdx, 1);
            const newDetails = { ...state[id], appointments: currentAppointments };
            const updatedPatient = {};
            updatedPatient[id] = newDetails;
            return Object.assign({}, state, updatedPatient);
        }
        default:
            return state;
    }
}