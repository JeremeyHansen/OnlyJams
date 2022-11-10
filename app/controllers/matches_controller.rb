class MatchesController < ApplicationController
    def create
        match = Match.create!(match_params)
        render json: match, status: :created
    end

    def destroy
        match = Match.find(params[:id])
        match.destroy
        render json: {}, status: 200
    end

    def index
        render json: Match.all, status: 200
    end

    def show
        match = Match.find(params[:id])
        render json: match, status: 200
    end

    private 

    def match_params
        params.permit(:friend_id, :user_id)
    end
end
