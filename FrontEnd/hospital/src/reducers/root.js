import { combineReducers } from 'redux';
import { doctors } from './doctors';
import { patients } from './patients';
import { procedures } from './procedures';
import { appointments } from './appointments';
import { users } from './user';
import { admins } from './admin';

export default combineReducers({
  doctors,
  patients,
  procedures,
  appointments,
  users,
  admins
});