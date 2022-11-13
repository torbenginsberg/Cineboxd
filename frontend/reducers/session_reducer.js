//keeps track of our current user

import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_ERRORS
} from '../actions/session_actions';

//maintains its own default state
const _nullUser = {
    id: null,
}

//listens for action types
const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state); // prevents the state from accidentally being mutated
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.currentUser.id }); // sets sesison id to the action's user.id
        case LOGOUT_CURRENT_USER:
            return _nullUser; // sets session id to null
        case RECEIVE_ERRORS:
            return null;
        default:
            return state;
    }
}

export default sessionReducer;