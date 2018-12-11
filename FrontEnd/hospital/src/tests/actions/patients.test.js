import * as actions from '../../actions/patients';
import * as actionTypes from '../../constants/actionTypes';

describe("Patients action generator", () => {
    describe("Add new patient", () => {
        test("should generate correct action", () => {
            const patient = {
                id: 23,
                fname: 'Some',
                lname: 'Name',
                age: 23,
                gender: 'Male',
                phone: '+37477434343',
                email: 'somemail@mail.ru',
                appointments: [{
                    id: 1
                }]
            };

            expect(actions.addPatient(patient)).toEqual({
                type: actionTypes.ADD_PATIENT,
                payload: {
                    id: 23,
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
            expect(actions.deletePatient(23))
                .toEqual({
                    type: actionTypes.DELETE_PATIENT,
                    payload: { id: 23 }
                })
        })
    })

    describe("Update patient", () => {
        test("should generate correct payload", () => {
            expect(actions.updatePatient(23, { fname: 'Edvard' }))
                .toEqual({
                    type: actionTypes.UPDATE_PATIENT,
                    payload: {
                        id: 23,
                        newPatient: { fname: 'Edvard' }
                    }
                })
        })
    })

    describe("Add an appointment to a patient", () => {
        test("Should generate correct payload", () => {
            expect(actions.addPatientAppointment(23, 2)).toEqual({
                type: actionTypes.ADD_PATIENT_APPOINTMENT,
                payload: { id: 23, appointmentId: 2 }
            })
        })
    })

    describe("Delete an appointment from a patient", () => {
        test("Should generate correct payload", () => {
            expect(actions.deletePatientAppointment(23, 2)).toEqual({
                type: actionTypes.DELETE_PATIENT_APPOINTMENT,
                payload: { id: 23, appointmentId: 2 }
            })
        })
    })
})