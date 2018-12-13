import { users } from '../../reducers/user';
import * as actions from '../../actions/user';

describe("User reducer correctly manipulates state", () => {
    const user = {
        id: 10,
        fname: 'Naira',
        lname: 'Gevorgyan',
        email: 'naira@info.am',
        type: 'super_user'
    };
    describe("Set user to store", () => {
        test("Should set user to the store", () => {
            expect(users({}, actions.setUser(user))).toEqual({
                10: {
                    id: 10,
                    fname: 'Naira',
                    lname: 'Gevorgyan',
                    email: 'naira@info.am',
                    type: 'super_user'
                }
            })
        })
    })

    describe("Delete user from store", () => {
        test("Should delete the user with givent id", () => {
            expect(users({
                10: user
            }, actions.deleteUser(10))).toEqual({});
        })
    })

    describe("Update user from store", () => {
        test("Should update the user with given id", () => {
            expect(users({
                10: user
            }, actions.updateUser(10, { lname: 'Grigoryan' }))).toEqual({
                10: {
                    id: 10,
                    fname: 'Naira',
                    lname: 'Grigoryan',
                    email: 'naira@info.am',
                    type: 'super_user'
                }
            })
        })
    })
})