import {combineReducers} from 'redux'; 
import expenses from './expenses';
import auth from './auth';
export const reducers= combineReducers({
    expenses, 
    auth
});