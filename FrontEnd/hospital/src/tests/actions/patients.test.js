import * as actions from '../../actions/patients';
import * as actionTypes from '../../constants/actionTypes';

describe("Patients action generator", () => {
    describe("Add new patient", () => {
        test("should generate correct action", () => {
            const patient = {
                patientId: 23,
                fname: 'Some',
                lname: 'Name',
                age: 23,
                gender: 'Male',
                phone: '+37477434343',
                email: 'somemail@mail.ru',
                appointments: [{
                    appointment_id: 1
                }]
            };

            expect(actions.addPatient(patient)).toEqual({
                type: actionTypes.ADD_PATIENT,
                payload: {
                    patientId: 23,
                    fname: 'Some',
                    lname: 'Name',
                    age: 23,
                    gender: 'Male',
                    phone: '+37477434343',
                    email: 'somemail@mail.ru',
                    appointments: [1]
                }
            })
        })
    })

    describe("Delete patient", () => {
        test("should generate correct payload", () => {
            expect(actions.deletePatient(23)).toEqual({
                type: actionTypes.DELETE_PATIENT,
                payload: { patientId: 23 }
            })
        })
    })
})