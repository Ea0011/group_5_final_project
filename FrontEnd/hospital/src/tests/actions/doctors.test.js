import * as actions from '../../actions/doctors';
import * as actionTypes from '../../constants/actionTypes';

describe("Doctors action generators", () => {
    describe("Add new doctor", () => {
        test("should generate correct payload", () => {
            const doctor = {
                doctorId: 23,
                fname: 'Some',
                lname: 'Name',
                specialization: 'srtaban',
                appointments: [{
                    appointment_id: 1
                }]
            };

            expect(actions.addDoctor(doctor)).toEqual({
                    payload: {
                    doctorId: 23,
                    fname: 'Some',
                    lname: 'Name',
                    specialization: 'srtaban',
                    appointments: [1]
                },
                type: actionTypes.ADD_DOCTOR
            })
        })
    })

    describe("Delete a doctor", () => {
        test("should generate correct payload", () => {
            expect(actions.deleteDoctor('spec', 1)).toEqual({
                type: actionTypes.DELETE_DOCTOR,
                payload: { specialization: 'spec', doctorId: 1 }
            })
        })
    })

    describe("Update a doctor", () => {
        test("Should generate correct payload", () => {
            expect(actions.updateDoctor('spec', 1, { fname: 'Vineti' })).toEqual({
                type: actionTypes.UPDATE_DOCTOR,
                payload: { specialization: 'spec', doctorId: 1, newDoctor: { fname: 'Vineti' } }
            })
        })
    })

    describe("Add doctor appointment", () => {
        test("Should generate correct payload", () => {
            expect(actions.addDoctorAppointment('spec', 1, 1)).toEqual({
                type: actionTypes.ADD_DOCTOR_APPOINTMENT,
                payload: {
                    specialization: 'spec',
                    doctorId: 1,
                    appointmentId: 1
                 }
            })
        })
    })
})