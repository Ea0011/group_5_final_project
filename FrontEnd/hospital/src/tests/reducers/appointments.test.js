import * as actions from '../../actions/appointments'
import { appointments } from '../../reducers/appointments';

describe("Appointments reducer should correctly manipulate the state", () => {
  const appointment = {
    "id": 8,
    "start_date": "2018-02-15T11:00:00.000Z",
    "end_date": "2018-02-15T13:00:00.000Z",
    "doctor": {
        "id": 1,
        "fname": "Gurgne",
        "lname": "Hayrapetyan",
        "specialization": "Dentist"
    },
    "patient": {
        "id": 1,
        "fname": "Edvard",
        "lname": "Avagyan",
        "email": null,
        "pnumber": 77001110,
        "age": 20,
        "gender": "Male"
    },
    "procedure": {
        "id": 1,
        "name": "dentism",
        "duration": 1,
        "specialist": "Dentist"
    }
  }
  describe("Add appointment", () => {
    test("Should add appointment to the state", () => {
      expect(appointments({}, actions.addAppointment(appointment))).toEqual({
        8: {
          id: 8,
          "start_date": "2018-02-15T11:00:00.000Z",
          "end_date": "2018-02-15T13:00:00.000Z",
          doctor: 1,
          patient: 1,
          procedure: 1,
          specialist: 'Dentist'
        }
      })
    })
  })

  describe("Delete appointment", () => {
    test("Should delete the appointment with the given id", () => {
      expect(appointments({
        8: {
          id: 8,
          "start_date": "2018-02-15T11:00:00.000Z",
          "end_date": "2018-02-15T13:00:00.000Z",
          doctor: 1,
          patient: 1,
          procedure: 1,
          specialist: 'Dentist'
        }
      }, actions.deleteAppointment(8))).toEqual({})
    })
  })

  describe("Update appointment", () => {
    test("Should update appointment with the given id", () => {
      expect(appointments({
        8: {
          id: 8,
          "start_date": "2018-02-15T11:00:00.000Z",
          "end_date": "2018-02-15T13:00:00.000Z",
          doctor: 1,
          patient: 1,
          procedure: 1,
          specialist: 'Dentist'
        }
      }, actions.updateAppointment(8, { specialist: "Neurologist" }))).toEqual({
        8: {
          id: 8,
          "start_date": "2018-02-15T11:00:00.000Z",
          "end_date": "2018-02-15T13:00:00.000Z",
          doctor: 1,
          patient: 1,
          procedure: 1,
          specialist: 'Neurologist'
        }
      })
    })
  })
})