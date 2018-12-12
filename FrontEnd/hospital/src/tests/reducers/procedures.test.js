import { patients, procedures } from '../../reducers/procedures';
import * as actions from '../../actions/procedures';

describe("Procedure reducer correctly manipulates state", () => {
    const procedure = {
        id: 25,
        name: 'procedure1',
        duration: 2,
        specialist: 'cardiologist',
        appointments: []
    };

    describe("Add procedure to store", () => {
        test("Should add correct procedure to the store", () => {
            expect(procedures({}, actions.addProcedure(procedure))).toEqual({
                25: {
                    id: 25,
                    name: 'procedure1',
                    duration: 2,
                    specialist: 'cardiologist',
                    appointments: []
                }
            })
        })
    })

    describe("Delete procedure from store", () => {
        test("Should delete the procedure with givent id", () => {
            expect(procedures({
                25: procedure
            }, actions.deleteProcedure(25))).toEqual({});
        })
    })

    describe("Update procedure from store", () => {
        test("Should update the procedure with given id", () => {
            expect(procedures({
                25: procedure
            }, actions.updateProcedure(25, { name: 'surgery' }))).toEqual({
                25: {
                    id: 25,
                    name: 'surgery',
                    duration: 2,
                    specialist: 'cardiologist',
                    appointments: []
                }
            })
        })
    })

    describe("Add appointment to a procedure", () => {
        test("Should add an appointment to a procedure with given id", () => {
            expect(procedures({
                25: procedure
            }, actions.addProcedureAppointment(25, 2))).toEqual({
                25: {
                    id: 25,
                    name: 'procedure1',
                    duration: 2,
                    specialist: 'cardiologist',
                    appointments: [2]
                }
            })
        })
    })

    describe("Delete an appointment from the procedure", () => {
        test("Should remove given appointment from the selected procedure", () => {
            procedure.appointments.push(2);
            expect(procedures({
                25: procedure
            }, actions.deleteProcedureAppointment(25,2))).toEqual({
                25: {
                    id: 25,
                    name: 'procedure1',
                    duration: 2,
                    specialist: 'cardiologist',
                    appointments: []
                }
            })
        })
    })
})