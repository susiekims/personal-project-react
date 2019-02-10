import { GET_EVENTS_SUCESSS, GET_EVENTS_FAILURE } from "../constants"

const eventsAction = (dispatch, username) => {
    dispatch({type: GET_EVENTS})
    fetch(`https://api.github.com/users/${username}/events`)
        .then(res => res.json())
        .then(res => dispatch({ type: GET_EVENTS_SUCESSS, payload: res }))
        .catch(err => dispatch({ type: GET_EVENTS_FAILURE, payload: err}))
}

export default eventsAction;