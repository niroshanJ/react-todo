import { todoReducer } from './todo';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    todo: todoReducer
});