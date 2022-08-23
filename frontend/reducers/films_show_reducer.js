import { RECEIVE_FILM } from "../actions/film_actions";

const showFilmReducer = (state = null, action) => {
    switch (action.type) {
        case RECEIVE_FILM:
            return action.film.id
        default:
            return state;
    }
};

export default showFilmReducer;