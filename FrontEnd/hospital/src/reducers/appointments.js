import * as actionTypes from '../constants/actionTypes';

export const appointments = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.ADD_APPOINTMENT: {
      const appointmentId = action.payload.id;
      return Object.assign({}, state, { [appointmentId]: action.payload });
    }
    default:
      return state;
  }
}