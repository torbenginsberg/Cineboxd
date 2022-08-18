export const fetchFilm = filmId => (
    $.ajax({
        method: 'GET',
        url: `api/films/${filmId}`
    })
);

export const fetchFilms = data => (
    $.ajax({
        method: 'GET',
        url: `api/films`,
        data
    })
);
