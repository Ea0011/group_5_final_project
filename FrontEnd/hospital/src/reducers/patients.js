import * as actionTypes from '../constants/actionTypes';

export const patients = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ADD_PATIENT: {
            const newPatient = {}
            newPatient[action.payload.patientId] = {...action.payload};
            return Object.assign(state, newPatient);
        }
        default:
            return state;
    }
}