import { RECEIVE_LOG, DELETE_LOG } from "../actions/log_actions";
import { RECEIVE_FILM } from '../actions/film_actions';

export const logsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    let logs;
    switch (action.type) {
        case RECEIVE_LOG:
            newState[action.log.id] = action.log;
            return newState;
        case DELETE_LOG:
            delete newState[action.log.id];
            return newState;
        case RECEIVE_FILM:
            if (action.film.logs) {
                Object.values(action.film.logs).forEach(log => {
                    newState[log.id] = log
                })
            };
            return newState;
        default:
            return state;
    }
}