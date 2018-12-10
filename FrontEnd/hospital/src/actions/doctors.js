import * as actionTypes from '../constants/actionTypes';

export const addDoctor = doctor => {
    const appointments = doctor.appointments.map(appointment => appointment.id);
    const newDoctor = { ...doctor, appointments };
    return { type: actionTypes.ADD_DOCTOR, payload: newDoctor };
}

export const deleteDoctor = (specialization, id) => (
    { type: actionTypes.DELETE_DOCTOR, payload: { specialization, id } }
)

export const updateDoctor = (specialization, id, newDoctor) => (
    { type: actionTypes.UPDATE_DOCTOR, payload: { specialization, id, newDoctor } }
)

export const addDoctorAppointment = (specialization, id, appointmentId) => (
    { type: actionTypes.ADD_DOCTOR_APPOINTMENT, payload: { specialization, id, appointmentId } }
)

export const deleteDoctorAppointment = (specialization, id, appointmentId) => (
    { type: actionTypes.DELETE_DOCTOR_APPOINTMENT, payload: { specialization, id, appointmentId } }
)