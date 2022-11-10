class GroupsController < ApplicationController
    def index 
        render json: Group.all, status: 200
    end

    def show
        group = Group.find(params[:id])
        render json: group, status: 200
    end

    def create 
        group = Group.create!(group_params)
        render json: group, status: :created
    end

    def destroy
        group = Group.find(params[:id])
        group.destroy
        render json: {}, status: 200
    end

    private

    def group_params
        params.permit(:name, :description, :genre, :profile_picture)
    end
end
