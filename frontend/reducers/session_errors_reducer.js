//keeps track of any error messages

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";
import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

//listens for action types
export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return []; // clears the errors
        case RECEIVE_ERRORS:
            return action.errors; //sets errors to the action's errors

        // clear errors in login / review modals when we open or close
        case OPEN_MODAL:
            return [];
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
};