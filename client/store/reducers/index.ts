import { combineReducers } from 'redux';
import { HomeReducer } from './home-reducer';

const rootReducer = combineReducers({
  homes: HomeReducer
});

export default rootReducer;
