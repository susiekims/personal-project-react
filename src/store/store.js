import { createStore, applyMiddleware } from "redux";
import eventsReducer from './reducers/events'
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
const store = createStore(eventsReducer, middleware);

export default store;

