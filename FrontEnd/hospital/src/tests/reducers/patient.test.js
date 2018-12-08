import * as actionTypes from '../../constants/actionTypes';
import { patients } from '../../reducers/patients';
import * as actions from '../../actions/patients';

describe("Patients reducer correctly manipulates state", () => {
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

    describe("Add patient to store", () => {
        test("Should add correct patient to the store", () => {
            expect(patients({}, actions.addPatient(patient))).toEqual({
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

    describe("Delete patient from store", () => {
        test("Should delete the patient with givent id", () => {
            expect(patients({
                23: patient
            }, actions.deletePatient(23))).toEqual({});
        })
    })
})