import { GET_EVENTS, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE } from '../constants';

const initialState = {
    pulls: [],
    forks: [],
    error: null,
    gettingEvents: false,
    receivedEvents: false,
}

const eventsReducer = (state = initialState, {type, payload} ) => {
    switch (type) {
        case GET_EVENTS:
            return {
                ...state, 
                gettingEvents: true
            }
        case GET_EVENTS_SUCCESS:
            return {
                ...state, 
                gettingEvents: false, 
                receivedEvents: true,
                pulls: payload.pulls,
                forks: payload.forks
            }
        case GET_EVENTS_FAILURE:
            return {
                ...state, 
                gettingEvents: false, 
                error: payload
            }
        default: 
            return state;
    }
}

export default eventsReducer;