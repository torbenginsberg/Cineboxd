class Api::LikesController < ApplicationController
    def create
        like = Like.new(like_params)
        like.user_id = current_user.id
        like.save
        @film = Film.find_by(id: like.likeable_item_id)
    #     if like.likeable_type == "Film"
    #         @films = Film.where(id: like.likeable_item_id)
    #    else
    #         @films = Film.where(id: (Review.where(id: like.likeable_item_id)[0].film_id))
    #    end
    #    render "api/films/index"
    end

    def index
        #tbd
    end

    def destroy
        like = Like.find_by(id: params[:id])
        like.destroy
        @film = Film.find_by(id: like.likeable_item_id)
        # if like.likeable_type == "Film"
        #     @films = Film.where(id: like.likeable_item_id)
        # else
        #     @films = Film.where(id: (Review.where(id: like.likeable_item_id)[0].film_id))
        # end
        # render 'api/films/index'
    end

    private
    def like_params
        params.require(:like).permit(:likeable_type, :likeable_item_id)
    end
end