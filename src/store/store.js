import { createStore, applyMiddleware, combineReducers } from "redux";
import eventsReducer from './reducers/events'
import userReducer from './reducers/user'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({ eventsReducer, userReducer });

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

export default store;

