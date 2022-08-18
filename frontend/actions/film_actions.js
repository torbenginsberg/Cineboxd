import * as FilmApiUtil from '../util/film_api_utils';

export const RECEIVE_FILM = 'RECEIVE_FILM';
export const RECEIVE_FILMS = 'RECEIVE_FILMS';

export const receiveFilm = film => ({
    type: RECEIVE_FILM,
    film
});

export const receiveFilms = films => ({
    type: RECEIVE_FILMS,
    films
});

export const fetchFilm = filmId => dispatch => FilmApiUtil.fetchFilm(filmId)
    .then(film => dispatch(receiveFilm(film)));

export const fetchFilms = () => dispatch => FilmApiUtil.fetchFilms()
    .then(films => dispatch(receiveFilms(films)));