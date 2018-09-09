import { createStore, combineReducers } from 'redux';
import { UserDataReducer } from './reducers/UserData_Reducer';
import { changeData } from './reducers/UserData_Reducer';

export const store = createStore(changeData);