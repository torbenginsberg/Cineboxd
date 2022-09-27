@films.each do |film|
    json.set! film.id do
        json.extract! film, :id, :title, :year, :length, :director_name, :summary, :avg_rating
        json.posterUrl url_for(film.poster)
        json.backdropUrl url_for(film.backdrop)
    end

    # json.likes do
    #     film.likes.each do |like|
    #         json.set! like.id do
    #             json.partial! 'api/likes/like', like: like
    #         end
    #     end
    # end
end