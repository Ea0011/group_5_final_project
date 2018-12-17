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
  const specialists = state.doctors[specialization];
  return Object.values(specialists);
}

export const getDoctors = (state = {}) => {
  const specs = Object.keys(state.doctors);
  let doctors = [];
  specs.forEach(spec => {
    const specialists = Object.values(state.doctors[spec]);
    doctors = doctors.concat(specialists);
  });
  return doctors;
}

export const getAppointments = (state = {}) => {
  return Object.values(state.appointments);
}

export const getPatients = (state = {}) => {
  return Object.values(state.patients);
}

export const getProcedures = (state = {}) => {
  return Object.values(state.procedures);
}

export const getSpecialists = (state = {}) => {
  return Object.keys(state.doctors);
}

export const getProceduresBySpecialist = (state = {}, spec) => {
  const procs = Object.values(state.procedures);
  return procs.filter(proc => proc.specialist === spec);
}

export const getDoctorById = (state = {}, id) => {
  const specs = Object.keys(state.doctors);
  for (let i = 0; i < specs.length; i++) {
    const idx = Object.values(state.doctors[specs[i]]).map(doctor => doctor.id);
    const pos = idx.indexOf(id);
    if (pos >= 0) {
      return state.doctors[specs[i]][id];
    }
  }
}

export const getProcedureById = (state = {}, id) => {
  return state.procedures[id];
}

export const getAppointmentById = (state = {}, id) => {
  return state.appointments[id];
}