import { combineReducers } from 'redux';
import zones from './zones';
import points from './points';
import params from './params';

export default combineReducers({
  zones,
  points,
  params
})