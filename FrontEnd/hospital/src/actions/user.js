import * as actionTypes from '../constants/actionTypes';

export const setUser = user => {
    const action = { type: actionTypes.SET_USER };
    const newUser = { ...user};
    action.payload = newUser;
    return action;
}

export const deleteUser = id => (
    { type: actionTypes.DELETE_USER, payload: { id } }
)

export const updateUser = (id, newUser) => (
    { type: actionTypes.UPDATE_USER, payload: { id, newUser } }
)