class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        if @review.save
            render json: @review
        else
            render json: @review.errors.full_messages, status: 400
        end
    end

    def index
        @reviews = Review.all
    end

    def show
        @review = Review.find(params[:id])
    end

    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private
    def review_params
        params.require(:review).permit(:user_id, :film_id, :body, :date_watched)
    end
end