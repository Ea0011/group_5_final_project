import * as actionTypes from '../../constants/actionTypes';
import * as actions from '../../actions/appointments';

describe("Action creators for appointments", () => {
  describe("Add appointment", () => {
    test("Should generate correct payload", () => {
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
      expect(actions.addAppointment(appointment)).toEqual({
        type: actionTypes.ADD_APPOINTMENT,
        payload: {
          "id": 8,
          "start_date": "2018-02-15T11:00:00.000Z",
          "end_date": "2018-02-15T13:00:00.000Z",
          patient: 1,
          doctor: 1,
          specialist: 'Dentist',
          procedure: 1
        }
      })
    })
  })
})