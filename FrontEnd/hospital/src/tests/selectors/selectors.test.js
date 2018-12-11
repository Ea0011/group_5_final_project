import * as selectors from '../../selectors/selectors';

describe("Selectors for redux store", () => {
  const store = {
    currentUser: { // null if the user is not logged in
        fname: 'Naira',
        lname: 'Yezekyan',
        email: 'naira@info.am',
        type: 'admin'
    },
    admins: null, // not null if the user is a super user, otherwise it is null
    patients: {
        3: {
            fname: 'Gurgen',
            lname: 'Hayrapetyan',
            phone: '+37477001110',
            email: 'example@info.am',
            age: 32,
            gender: 'Male',
            appointments: [1]
        }
    },
    doctors: {
        srtaban: {
            27: {
                fname: 'Narek',
                lname: 'Ghevondian',
                specialization: 'srtaban',
                appointments: [1]
            }
        },
        mankabuyj: {},
        atamnabuyj: {}
        // and many more
    },
    procedures: {
        30: {
            description: 'Virahatutyun',
            duration: '1 hrs',
            requiredSpecialist: 'srtaban',
            appointments: [1]
        }
    },
    appointments: {
        1: {
            patient: 3,
            doctor: 27,
            procedure: 30,
	          specialist: 'srtaban',
            start_date: 'esor jam@ 7',
            end_date: 'esor jam@ 8',
            status: 'complete'
        }
    }
}
  describe("Get doctor by appointment", () => {
    test("Should get the doctor from appointment", () => {
      expect(selectors.getDoctorByAppointment(store, 1)).toEqual(store.doctors.srtaban[27])
    })
  })

  describe("Get patient by appointment", () => {
    test("Should get the patient from appointment", () => {
      expect(selectors.getPatientByAppointment(store, 1)).toEqual(store.patients[3]);
    })
  })

  describe("Get appoinments by doctor", () => {
    test("Should get all appointments of the doctor", () => {
      expect(selectors.getAppointmentsByDoctor(store, 'srtaban', 27)).toEqual([
          {
            patient: 3,
            doctor: 27,
            procedure: 30,
            specialist: 'srtaban',
            start_date: 'esor jam@ 7',
            end_date: 'esor jam@ 8',
            status: 'complete'
          }
      ])
    })
  })

  describe("Get appointments by patient", () => {
    test("Should get appointments of the patient", () => {
      expect(selectors.getAppointmentsByPatient(store, 3)).toEqual([
          {
            patient: 3,
            doctor: 27,
            procedure: 30,
            specialist: 'srtaban',
            start_date: 'esor jam@ 7',
            end_date: 'esor jam@ 8',
            status: 'complete'
          }
      ])
    })
  })

  describe("Get procedure by appointment", () => {
      test("Should get procedure of the given appointment", () => {
          expect(selectors.getProcedureByAppointment(store, 1)).toEqual(store.procedures[30]);
      })
  })

  describe("Get appointments by procedure", () => {
      test("Should get all appointments from the procedure", () => {
          expect(selectors.getAppointmentsByProcedure(store, 30)).toEqual([
            {
                patient: 3,
                doctor: 27,
                procedure: 30,
                specialist: 'srtaban',
                start_date: 'esor jam@ 7',
                end_date: 'esor jam@ 8',
                status: 'complete'
            }
          ])
      })
  })
})