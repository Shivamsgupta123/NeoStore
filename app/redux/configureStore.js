import { createStore, combineReducers } from 'redux';
import { UserDataReducer } from './reducers/UserData_Reducer';

const store = createStore(combineReducers({
    UserDataReducer: UserDataReducer
}));

export default store;