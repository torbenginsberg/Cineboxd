class Api::LikesController < ApplicationController
    def create
        like = Like.new(like_params)
    end

    def index

    end

    def destroy

    end

    private
    def like_params
        params.require(:like).permit(:likeable_type, :likeable_item_id, :user_id)
    end
end