import { GET_EVENTS, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE } from "../constants"

const eventsAction = (username) => {
    return (dispatch) => {
        dispatch({type: GET_EVENTS});
        fetch(`https://api.github.com/users/${username}/events`)
            .then(res => res.json())
            .then(
                res => dispatch({ type: GET_EVENTS_SUCCESS, payload: res}),
                err => dispatch({ type: GET_EVENTS_FAILURE, payload: err})
            )
    }
}

export default eventsAction;