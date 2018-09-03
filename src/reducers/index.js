import { combineReducers } from 'redux';
import zones from './zones';
import points from './points';

export default combineReducers({
  zones,
  points
})