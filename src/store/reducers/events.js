import { GET_EVENTS, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE } from '../constants';

const initialState = {
    pulls: [],
    forks: [],
    error: null,
    gettingEvents: false,
}

const transformPulls = (data) => {
    return data.filter(({type}) => type === "PullRequestEvent" )
        .map(({payload: { pull_request: {title, html_url, state, merged}}}) => {
            return {
            url: html_url, 
            name: title,
            state,
            merged,
            }
        });
}

const transformForks = (data) => {
    return data.filter(({type}) => type === "ForkEvent")
        .map(({repo: { name }, payload: { forkee: {full_name, name: title}}}) => {
            return {
                baseRepoUrl: `https://github.com/${name}`, 
                repoUrl: `https://github.com/${full_name}`, 
                title}
            })

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
                pulls: transformPulls(payload), 
                forks: transformForks(payload)
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