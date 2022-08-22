class Api::FilmsController < ApplicationController
    def index
        @films = Film.all
        render :index
    end

    def show
        @film = Film.find(params[:id])
    end

    private
    def film_params
        params.require(:film).permit(:title, :year, :length, :director_name, :summary, :avg_rating)
    end
end