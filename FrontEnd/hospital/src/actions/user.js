import * as actionTypes from '../constants/actionTypes';

export const setUser = user => {
    const action = { type: actionTypes.SET_USER };
    const newUser = { ...user};
    action.payload = newUser;
    return action;
}

export const deleteUser = () => (
    { type: actionTypes.DELETE_USER }
)

export const updateUser = (newUser) => (
    { type: actionTypes.UPDATE_USER, payload: { newUser } }
)