export const getDoctorByAppointment = (state = {}, appointmentId) => {
  const { specialist, doctor } = state.appointments[appointmentId];
  const doc = state.doctors[specialist][doctor];
  return doc;
}

export const getPatientByAppointment = (state = {}, appointmentId) => {
  const { patient } = state.appointments[appointmentId];
  return state.patients[patient];
}

export const getAppointmentsByDoctor = (state = {}, specialist, doctorId) => {
  const { appointments } = state.doctors[specialist][doctorId];
  const appts = [];
  appointments.forEach(aptId => appts.push(state.appointments[aptId]));
  return appts;
}

export const getAppointmentsByPatient = (state = {}, patientId) => {
  const { appointments } = state.patients[patientId];
  const appts = [];
  appointments.forEach(aptId => appts.push(state.appointments[aptId]));
  return appts;
}

export const getProcedureByAppointment = (state = {}, appointmentId) => {
  const { procedure } = state.appointments[appointmentId];
  return state.procedures[procedure];
}

export const getAppointmentsByProcedure = (state = {}, procedureId) => {
  const { appointments } = state.procedures[procedureId];
  const appts = [];
  appointments.forEach(appt => appts.push(state.appointments[appt]));
  return appts;
}

export const getDoctorsBySpecialization = (state = {}, specialization) => {
  // write tests for this
}