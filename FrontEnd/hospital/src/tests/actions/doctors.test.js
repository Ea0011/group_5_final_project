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
})