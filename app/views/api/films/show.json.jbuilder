json.extract! @film, :id, :title, :year, :summary, :length, :director_name, :avg_rating
# need genres, actors
json.posterUrl url_for(@film.poster)
json.backdropUrl url_for(@film.backdrop)