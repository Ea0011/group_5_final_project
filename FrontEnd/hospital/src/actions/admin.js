import * as actionTypes from '../constants/actionTypes';

export const addAdmin = admin => {
    const action = { type: actionTypes.ADD_ADMIN };
    const newAdmin = { ...admin};
    action.payload = newAdmin;
    return action;
}

export const deleteAdmin = id => (
    { type: actionTypes.DELETE_ADMIN, payload: { id } }
)

export const updateAdmin = (id, newAdmin) => (
    { type: actionTypes.UPDATE_ADMIN, payload: { id, newAdmin } }
)