import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE } from '../constants';

const initialState = {
    user: {},
    error: null,
    gettingUser: false,
    receivedUser: false,
}

const userReducer = (state = initialState, {type, payload} ) => {
    switch (type) {
        case GET_USER:
            return {
                ...state, 
                gettingEvents: true
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                gettingUser: false, 
                receivedUser: true,
                user: payload
            }
        case GET_USER_FAILURE:
            return {
                ...state, 
                gettingUser: false, 
                error: payload
            }
        default: 
            return state;
    }
}

export default userReducer;