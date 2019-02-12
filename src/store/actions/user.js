import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE } from "../constants"

const userAction = (username) => {
    return (dispatch) => {
        dispatch({type: GET_USER});
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(
                
                res => dispatch({ type: GET_USER_SUCCESS, payload: res}),
                err => dispatch({ type: GET_USER_FAILURE, payload: err})
            )
    }
}

export default userAction;