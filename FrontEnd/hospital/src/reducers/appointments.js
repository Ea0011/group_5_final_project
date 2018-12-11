import * as actionTypes from '../constants/actionTypes';

export const appointments = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.ADD_APPOINTMENT: {
      const appointmentId = action.payload.id;
      return Object.assign({}, state, { [appointmentId]: action.payload });
    }
    case actionTypes.DELETE_APPOINTMENT: {
      const appointmentId = action.payload.id;
      const currentAppointments = { ...state };
      delete currentAppointments[appointmentId];

      return currentAppointments;
    }
    case actionTypes.UPDATE_APPOINTMENT: {
      const { id, newAppointment } = action.payload;
      const currentAppointment = { ...state[id] };
      const newDetails = Object.assign({}, currentAppointment, newAppointment);
      return { ...state, [id]: newDetails };
    }    
    default:
      return state;
  }
}