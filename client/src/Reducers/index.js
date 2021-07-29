import {combineReducers} from 'redux'; 
import expenses from './expenses';
import auth from './auth';
import dashboard from './dashboard';
export const reducers= combineReducers({
    expenses, 
    auth,
    dashboard
});