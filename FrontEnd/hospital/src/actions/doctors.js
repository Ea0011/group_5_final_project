import * as actionTypes from '../constants/actionTypes';

export const addDoctor = doctor => {
    const appointments = doctor.appointments.map(appointment => appointment.appointment_id);
    const newDoctor = { ...doctor, appointments };
    return { type: actionTypes.ADD_DOCTOR, payload: newDoctor };
}