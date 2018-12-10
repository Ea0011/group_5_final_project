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

    describe("Update patient from store", () => {
        test("Should update the patient with given id", () => {
            expect(patients({
                23: patient
            }, actions.updatePatient(23, { lname: 'Edvard' }))).toEqual({
                23: {
                    patientId: 23,
                    fname: 'Some',
                    lname: 'Edvard',
                    age: 23,
                    gender: 'Male',
                    phone: '+37477434343',
                    email: 'somemail@mail.ru',
                    appointments: []
                }
            })
        })
    })

    describe("Add appointment to a patient", () => {
        test("Should add an appointment to a patient with given id", () => {
            expect(patients({
                23: patient
            }, actions.addPatientAppointment(23, 2))).toEqual({
                23: {
                    patientId: 23,
                    fname: 'Some',
                    lname: 'Name',
                    age: 23,
                    gender: 'Male',
                    phone: '+37477434343',
                    email: 'somemail@mail.ru',
                    appointments: [2]
                }
            })
        })
    })

    describe("Delete an appointment from the patient", () => {
        test("Should remove given appointment from the given patient", () => {
            patient.appointments.push(2);
            expect(patients({
                23: patient
            }, actions.deletePatientAppointment(23, 2))).toEqual({
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