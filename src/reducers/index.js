import { clickReducer } from './clickReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  clickState: clickReducer
});
