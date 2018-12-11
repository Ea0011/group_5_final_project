import * as actions from '../../actions/procedures';
import * as actionTypes from '../../constants/actionTypes';

describe("Procedure action generator", () => {
    describe("Add new procedure", () => {
        test("should generate correct action", () => {
            const procedure = {
                id: 25,
                name: 'procedure1',
                duration: 2,
                specialist: 'cardiologist',
                appointments: [{
                    id: 1
                }]
            };

            expect(actions.addProcedure(procedure)).toEqual({
                type: actionTypes.ADD_PROCEDURE,
                payload: {
                    id: 25,
                    name: 'procedure1',
                    duration: 2,
                    specialist: 'cardiologist',
                    appointments: [1]
                }
            })
        })
    })

    describe("Delete procedure", () => {
        test("should generate correct payload", () => {
            expect(actions.deleteProcedure(25))
                .toEqual({
                    type: actionTypes.DELETE_PROCEDURE,
                    payload: { id: 25 }
                })
        })
    })

    describe("Update procedure", () => {
        test("should generate correct payload", () => {
            expect(actions.updateProcedure(25, { name: 'Procedure2' }))
                .toEqual({
                    type: actionTypes.UPDATE_PROCEDURE,
                    payload: {
                        id: 25,
                        newProcedure: { name: 'Procedure2' }
                    }
                })
        })
    })

    describe("Add an appointment to a procedure", () => {
        test("Should generate correct payload", () => {
            expect(actions.addProcedureAppointment(20, 5)).toEqual({
                type: actionTypes.ADD_PROCEDURE_APPOINTMENT,
                payload: { id: 20, appointmentId: 5 }
            })
        })
    })

    describe("Delete an appointment from a procedure", () => {
        test("Should generate correct payload", () => {
            expect(actions.deleteProcedureAppointment(20, 5)).toEqual({
                type: actionTypes.DELETE_PROCEDURE_APPOINTMENT,
                payload: { id: 20, appointmentId: 5 }
            })
        })
    })
})