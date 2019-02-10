import { createStore, combineReducers } from "redux";
import eventsReducer from './reducers/events'

const store = createStore(eventsReducer);

export default store;

