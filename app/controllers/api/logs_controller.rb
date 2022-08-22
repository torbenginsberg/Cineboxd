class Api::LogsController < ApplicationController
    def create
        @log = Log.new(log_params)
        if @log.save
            render :show
        else
            render json: @log.errors.full_messages, status: 400
        end
    end

    def destroy
        @log = Log.find_by(id: params[:id])
        if @log
            @log.destroy
            render :show
        else
            render json: ['Unable to find log'], status: 404
        end
    end

    private
    def log_params
        params.require(:log).permit(:film_id, :user_id)
    end
end