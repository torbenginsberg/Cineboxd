const fetchShow = filmId => (
    $.ajax({
        method: 'GET',
        url: `api/films/${filmId}`
    })
)