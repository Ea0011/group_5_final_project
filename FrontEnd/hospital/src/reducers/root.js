import { combineReducers } from 'redux';
import { doctors } from './doctors';
import { patients } from './patients';
import { procedures } from './procedures';
import { appointments } from './appointments';

export default combineReducers({
  doctors,
  patients,
  procedures,
  appointments
});