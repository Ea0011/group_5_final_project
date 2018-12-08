import * as actionTypes from '../constants/actionTypes';

export const doctors = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ADD_DOCTOR: {
            const { specialization } = action.payload;
            if (state[specialization]) {
                const newDoctor = {};
                newDoctor[action.payload.doctorId] = action.payload;
                const updatedDoctors = Object.assign({}, state[specialization], newDoctor);
                return {...state, [specialization]: updatedDoctors};
            } else {
                const newDoctor = {};
                newDoctor[action.payload.doctorId] = action.payload;
                const newState = Object.assign({}, state, { [specialization]: newDoctor });
                return newState;
            }
        }
        default:
            return state;
    }
}