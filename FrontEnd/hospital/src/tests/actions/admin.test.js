import * as actions from '../../actions/admin';
import * as actionTypes from '../../constants/actionTypes';

describe("admin action generator", () => {
    describe("Add new admin", () => {
        test("should generate correct action", () => {
            const admin = {
                id: 45,
                fname: 'Naira',
                lname: 'Gevorgyan',
                email: 'naira@info.am',
                type: 'super_user'
            };

            expect(actions.addAdmin(admin)).toEqual({
                type: actionTypes.ADD_ADMIN,
                payload: {
                    id: 45,
                    fname: 'Naira',
                    lname: 'Gevorgyan',
                    email: 'naira@info.am',
                    type: 'super_user'
                }
            })
        })
    })

    describe("Delete admin", () => {
        test("should generate correct payload", () => {
            expect(actions.deleteAdmin(45))
                .toEqual({
                    type: actionTypes.DELETE_ADMIN,
                    payload: { id: 45 }
                })
        })
    })

    describe("Update admin", () => {
        test("should generate correct payload", () => {
            expect(actions.updateAdmin(45, { fname: 'Milena' }))
                .toEqual({
                    type: actionTypes.UPDATE_ADMIN,
                    payload: {
                        id: 45,
                        newAdmin: { fname: 'Milena' }
                    }
                })
        })
    })
})