import { admins } from '../../reducers/admin';
import * as actions from '../../actions/admin';

describe("Admins reducer correctly manipulates state", () => {
    const admin = {
        id: 45,
        fname: 'Narek',
        lname: 'Gevorgyan',
        email: 'narek@info.am',
        type: 'not_super_user'
    };
    describe("Add admin to store", () => {
        test("Should add admin to the store", () => {
            expect(admins({}, actions.addAdmin(admin))).toEqual({
                45: {
                    id: 45,
                    fname: 'Narek',
                    lname: 'Gevorgyan',
                    email: 'narek@info.am',
                    type: 'not_super_user'
                }
            })
        })
    })

    describe("Delete admin from store", () => {
        test("Should delete the admin with givent id", () => {
            expect(admins({
                45: admin
            }, actions.deleteAdmin(45))).toEqual({});
        })
    })

    describe("Update admin from store", () => {
        test("Should update the admin with given id", () => {
            expect(admins({
                45: admin
            }, actions.updateAdmin(45, { fname: 'Gourgen' }))).toEqual({
                45: {
                    id: 45,
                    fname: 'Gourgen',
                    lname: 'Gevorgyan',
                    email: 'narek@info.am',
                    type: 'not_super_user'
                }
            })
        })
    })
})