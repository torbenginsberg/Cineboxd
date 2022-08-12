//keeps track of all our users

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

//listens for 1 action type (for now)
const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser }); // adds the action's user to the state and sets the key to the id of the user
        default:
            return state
    }
}

export default usersReducer;