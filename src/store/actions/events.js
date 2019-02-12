import { GET_EVENTS, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE } from "../constants"

const transformEvents = data => {
    return {
        pulls : data.filter(({type}) => type === "PullRequestEvent" )
        .map(({payload: { pull_request: {title, html_url, state, merged}}}) => {
            return {
            url: html_url, 
            name: title,
            state,
            merged,
            }
        }),
        forks: data.filter(({type}) => type === "ForkEvent")
        .map(({repo: { name }, payload: { forkee: {full_name, name: title}}}) => {
            return {
                baseRepoUrl: `https://github.com/${name}`, 
                repoUrl: `https://github.com/${full_name}`, 
                title
            }
        })
    }
}

const eventsAction = (username) => {
    return (dispatch) => {
        dispatch({type: GET_EVENTS});
        fetch(`https://api.github.com/users/${username}/events`)
            .then(res => res.json())
            .then(res => transformEvents(res))
            .then(
                res => dispatch({ type: GET_EVENTS_SUCCESS, payload: res}),
                err => dispatch({ type: GET_EVENTS_FAILURE, payload: err})
            )
    }
}

export default eventsAction;