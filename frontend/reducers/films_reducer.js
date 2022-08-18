import { RECEIVE_FILM, RECEIVE_FILMS } from "../actions/film_actions";

const filmsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_FILMS:
            return action.films
        case RECEIVE_FILM:
            const newFilm = { [action.film.id]: action.film };
            return Object.assign({}, state, newFilm);
        default:
            return state;
    }
};

export default filmsReducer;