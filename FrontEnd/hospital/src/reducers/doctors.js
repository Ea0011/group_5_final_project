import * as actionTypes from '../constants/actionTypes';

export const doctors = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ADD_DOCTOR: {
            const { specialization } = action.payload;
            if (state[specialization]) {
                const newDoctor = {};
                newDoctor[action.payload.id] = action.payload;
                const updatedDoctors = Object.assign({}, state[specialization], newDoctor);
                return {...state, [specialization]: updatedDoctors};
            } else {
                const newDoctor = {};
                newDoctor[action.payload.id] = action.payload;
                const newState = Object.assign({}, state, { [specialization]: newDoctor });
                return newState;
            }
        }
        case actionTypes.DELETE_DOCTOR: {
            const { specialization, id } = action.payload;
            const currentDoctors = { ...state[specialization] };
            delete currentDoctors[id];
            return { ...state, [specialization]: currentDoctors };
        }
        case actionTypes.UPDATE_DOCTOR: {
            const { specialization, id, newDoctor } = action.payload;
            const newDetails = Object.assign({}, state[specialization][id], newDoctor);
            const newDcotors = { ...state[specialization], [id]: newDetails };
            return { ...state, [specialization]: newDcotors };
        }
        case actionTypes.ADD_DOCTOR_APPOINTMENT: {
            const { specialization, id, appointmentId } = action.payload;
            const currentAppointments = [ ...state[specialization][id].appointments ];
            currentAppointments.push(appointmentId);
            const newDetails = Object.assign({}, state[specialization][id], { appointments: currentAppointments });
            const newDoctors = { ...state[specialization], [id]: newDetails };
            return { ...state, [specialization]: newDoctors };
        }
        case actionTypes.DELETE_DOCTOR_APPOINTMENT: {
            const { specialization, id, appointmentId } = action.payload;
            const currentAppointments = [ ...state[specialization][id].appointments ];
            const appointmentIdx = currentAppointments.indexOf(appointmentId);
            currentAppointments.splice(appointmentIdx, 1);
            const newDetails = Object.assign({}, state[specialization][id], { appointments: currentAppointments });
            const newDoctors = { ...state[specialization], [id]: newDetails };
            return { ...state, [specialization]: newDoctors };
        }
        default:
            return state;
    }
}