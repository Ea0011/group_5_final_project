import * as actions from '../../actions/doctors';
import { doctors } from '../../reducers/doctors';


describe("Doctors reducer should correctly manipulate store", () => {
    const doctor = {
        id: 23,
        fname: 'Some',
        lname: 'Name',
        specialization: 'srtaban',
        appointments: []
    };
    describe("Add new doctor with already existing specialization", () => {
        test("Should add a doctor to the store", () => {
            expect(doctors({srtaban: {}}, actions.addDoctor(doctor))).toEqual({
                srtaban: {
                    23: {
                        id: 23,
                        fname: 'Some',
                        lname: 'Name',
                        specialization: 'srtaban',
                        appointments: []
                    }
                }
            })
        })
    })

    describe("Add new doctor with new specialization", () => {
        test("Should add a doctor to the store", () => {
            expect(doctors({}, actions.addDoctor(doctor))).toEqual({
                srtaban: {
                    23: {
                        id: 23,
                        fname: 'Some',
                        lname: 'Name',
                        specialization: 'srtaban',
                        appointments: []
                    }
                }
            })
        })
    })

    describe("Delete doctor", () => {
        test("Should delete doctor with the give specialization and id", () => {
            const state = {
                srtaban: {
                    23: doctor 
                }
            };
            expect(doctors(state, actions.deleteDoctor('srtaban', 23))).toEqual({ srtaban: {} });
        })
    })

    describe("Update doctor", () => {
        test("Should update a doctor with given specialization and id" ,() => {
            const state = {
                srtaban: {
                    23: doctor
                }
            };
            expect(doctors(state, actions.updateDoctor('srtaban', 23, { fname: 'Vineti' }))).toEqual({
                srtaban: {
                    23: {
                        id: 23,
                        fname: 'Vineti',
                        lname: 'Name',
                        specialization: 'srtaban',
                        appointments: []
                    }
                }
            })
        })
    })

    describe("Add appointment to a doctor", () => {
        test("Should add an appointment to a doctor", () => {
            const state = {
                srtaban: {
                    23: doctor
                }
            };
            expect(doctors(state, actions.addDoctorAppointment('srtaban', 23, 1))).toEqual({
                srtaban: {
                    23: {
                        id: 23,
                        fname: 'Some',
                        lname: 'Name',
                        specialization: 'srtaban',
                        appointments: [1]
                    }
                }
            })
        })
    })

    describe("Delete appointment from doctor", () => {
        test("Should delete an appointment from doctor", () => {
            doctor.appointments.push(1);
            const state = {
                srtaban: {
                    23: doctor
                }
            }
            expect(doctors(state, actions.deleteDoctorAppointment('srtaban', 23, 1))).toEqual({
                srtaban: {
                    23: {
                        id: 23,
                        fname: 'Some',
                        lname: 'Name',
                        specialization: 'srtaban',
                        appointments: []
                    }
                }
            })
        })
    })
})