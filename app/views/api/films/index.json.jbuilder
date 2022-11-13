@films.each do |film|
    json.set! film.id do
        json.extract! film, :id, :title, :year, :length, :director_name, :summary, :avg_rating
        json.posterUrl url_for(film.poster)
        json.backdropUrl url_for(film.backdrop)
    end
end