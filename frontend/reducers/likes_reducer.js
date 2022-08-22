import { RECEIVE_LIKE, DELETE_LIKE } from "../actions/likes_actions";
import { RECEIVE_FILM } from '../actions/film_actions';

export const likesReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    let likes;
    switch (action.type) {
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like;
            return newState;
        case DELETE_LIKE:
            delete newState[action.like.id];
            return newState;
        case RECEIVE_FILM:
            if (action.film.likes) {
                Object.values(action.film.likes).forEach(like => {
                    newState[like.id] = like
                })
            };
            return newState;
        default:
            return state;
    }
}