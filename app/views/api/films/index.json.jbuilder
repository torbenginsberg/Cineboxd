@films.each do |film|
    json.set! film.id do
        json.extract! film, :id, :title, :year, :length, :director_name, :summary, :avg_rating
        # also need for actors and genres
        # prob need something for photo when we get there
    end
end