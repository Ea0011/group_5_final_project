import * as actionTypes from '../constants/actionTypes';

export const users = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.SET_USER: {
            const newUser = {}
            newUser[action.payload.id] = {...action.payload};
            return Object.assign(state, newUser);
        }
        case actionTypes.DELETE_USER: {
            const newState = {...state};
            delete newState[action.payload.id];
            return newState;
        }
        case actionTypes.UPDATE_USER: {
            const { id, newUser } = action.payload;
            const newDetails = Object.assign({}, state[id], newUser);
            const updatedUser = {};
            updatedUser[id] = newDetails;
            return Object.assign({}, state, updatedUser);
        }
        default:
            return state;
    }
}