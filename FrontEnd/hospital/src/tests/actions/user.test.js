import * as actions from '../../actions/user';
import * as actionTypes from '../../constants/actionTypes';

describe("user action generator", () => {
    describe("Set user", () => {
        test("should generate correct action", () => {
            const user = {
                id: 10,
                fname: 'Naira',
                lname: 'Gevorgyan',
                email: 'naira@info.am',
                type: 'super_user'
            };

            expect(actions.setUser(user)).toEqual({
                type: actionTypes.SET_USER,
                payload: {
                    id: 10,
                    fname: 'Naira',
                    lname: 'Gevorgyan',
                    email: 'naira@info.am',
                    type: 'super_user'
                }
            })
        })
    })

    describe("Delete user", () => {
        test("should generate correct payload", () => {
            expect(actions.deleteUser(10))
                .toEqual({
                    type: actionTypes.DELETE_USER,
                    payload: { id: 10 }
                })
        })
    })

    describe("Update user", () => {
        test("should generate correct payload", () => {
            expect(actions.updateUser(10, { fname: 'Gourgen' }))
                .toEqual({
                    type: actionTypes.UPDATE_USER,
                    payload: {
                        id: 10,
                        newUser: { fname: 'Gourgen' }
                    }
                })
        })
    })
})