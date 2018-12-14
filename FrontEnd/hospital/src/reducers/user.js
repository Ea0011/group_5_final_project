import * as actionTypes from '../constants/actionTypes';

export const users = (state = null, action) => {
    switch(action.type) {
        case actionTypes.SET_USER: {
            const newUser = {...action.payload};
            return Object.assign(state, newUser);
        }
        case actionTypes.DELETE_USER: {
            return null;
        }
        case actionTypes.UPDATE_USER: {
            const { newUser } = action.payload;
            return Object.assign({}, state, newUser);
        }
        default:
            return state;
    }
}