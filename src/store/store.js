import { createStore, applyMiddleware, combineReducers } from "redux";
import events from './reducers/events'
import user from './reducers/user'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({ events, user });

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

export default store;

