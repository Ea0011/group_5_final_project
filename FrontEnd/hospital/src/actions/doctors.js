import * as actionTypes from '../constants/actionTypes';

export const addDoctor = doctor => {
    const appointments = doctor.appointments.map(appointment => appointment.appointment_id);
    const newDoctor = { ...doctor, appointments };
    return { type: actionTypes.ADD_DOCTOR, payload: newDoctor };
}

export const deleteDoctor = (specialization, doctorId) => (
    { type: actionTypes.DELETE_DOCTOR, payload: { specialization, doctorId } }
)

export const updateDoctor = (specialization, doctorId, newDoctor) => (
    { type: actionTypes.UPDATE_DOCTOR, payload: { specialization, doctorId, newDoctor } }
)