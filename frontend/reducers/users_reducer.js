

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_FILM_REVIEWS } from "../actions/review_actions";
import { FaAcquisitionsIncorporated } from "react-icons/fa";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser }); // adds the action's user to the state and sets the key to the id of the user
        case RECEIVE_FILM_REVIEWS:
            return Object.assign({}, state, action.reviews.users)
        default:
            return state
    }
}

export default usersReducer;