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
        case actionTypes.DELETE_DOCTOR: {
            const { specialization, doctorId } = action.payload;
            const currentDoctors = { ...state[specialization] };
            delete currentDoctors[doctorId];
            return { ...state, [specialization]: currentDoctors };
        }
        case actionTypes.UPDATE_DOCTOR: {
            const { specialization, doctorId, newDoctor } = action.payload;
            const newDetails = Object.assign({}, state[specialization][doctorId], newDoctor);
            const newDcotors = { ...state[specialization], [doctorId]: newDetails };
            return { ...state, [specialization]: newDcotors };
        }
        default:
            return state;
    }
}