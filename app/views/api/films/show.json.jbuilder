json.extract! @film, :id, :title, :year, :summary, :length, :director_name, :avg_rating
# need genres, actors
json.posterUrl url_for(@film.poster)
json.backdropUrl url_for(@film.backdrop)

json.likes do
    @film.likes.each do |like|
        json.set! like.id do
            json.partial! 'api/likes/like', like: like
        end
    end
end

json.logs do
    @film.logs.each do |log|
        json.set! log.id do
            json.partial! 'api/logs/log', log: log
        end
    end
end