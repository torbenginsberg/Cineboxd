import { RECEIVE_LIKE, DELETE_LIKE } from "../actions/likes_actions";

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
        default:
            return state;
    }
}