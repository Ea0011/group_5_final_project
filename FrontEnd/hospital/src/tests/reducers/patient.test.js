import * as actionTypes from '../../constants/actionTypes';
import { patients } from '../../reducers/patients';

describe("Patients reducer correctly manipulates state", () => {
    describe("Add patient to store", () => {
        test("Should add correct patient to the store", () => {
            const patient = {
                patientId: 23,
                fname: 'Some',
                lname: 'Name',
                age: 23,
                gender: 'Male',
                phone: '+37477434343',
                email: 'somemail@mail.ru',
                appointments: []
            };

            const action = {
                type: actionTypes.ADD_PATIENT,
                payload: patient
            }

            expect(patients({}, action)).toEqual({
                23: {
                    patientId: 23,
                    fname: 'Some',
                    lname: 'Name',
                    age: 23,
                    gender: 'Male',
                    phone: '+37477434343',
                    email: 'somemail@mail.ru',
                    appointments: []
                }
            })
        })
    })
})