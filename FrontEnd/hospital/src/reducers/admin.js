import * as actionTypes from '../constants/actionTypes';

export const admins = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ADD_ADMIN: {
            const newAdmin = {}
            newAdmin[action.payload.id] = {...action.payload};
            return Object.assign(state, newAdmin);
        }
        case actionTypes.DELETE_ADMIN: {
            const newState = {...state};
            delete newState[action.payload.id];
            return newState;
        }
        case actionTypes.UPDATE_ADMIN: {
            const { id, newAdmin } = action.payload;
            const newDetails = Object.assign({}, state[id], newAdmin);
            const updatedAdmin = {};
            updatedAdmin[id] = newDetails;
            return Object.assign({}, state, updatedAdmin);
        }
        default:
            return state;
    }
}