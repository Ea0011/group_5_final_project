import * as actionTypes from '../constants/actionTypes';

export const patients = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ADD_PATIENT: {
            const newPatient = {}
            newPatient[action.payload.patientId] = {...action.payload};
            return Object.assign(state, newPatient);
        }
        case actionTypes.DELETE_PATIENT: {
            const newState = {...state};
            delete newState[action.payload.patientId];
            return newState;
        }
        case actionTypes.UPDATE_PATIENT: {
            const { patientId, newPatient } = action.payload;
            const newDetails = Object.assign({}, state[patientId], newPatient);
            const updatedPatient = {};
            updatedPatient[patientId] = newDetails;
            return Object.assign({}, state, updatedPatient);
        }
        default:
            return state;
    }
}