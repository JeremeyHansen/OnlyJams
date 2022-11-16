class UsersController < ApplicationController
    
    def create
        user = User.create!(user_params)
        render json: user, status: 200
    end

    def index 
        render json: User.all, status: 200
    end

    def show
        user = User.find(session[:user_id])
        render json: user, status: 200
    end

    def destroy 
        user = User.find(params[:id])
        user.destroy
        render json: {}, status: 200
    end

    def update
        user = User.find(session[:user_id])
        if user 
            user.update(user_params)
            render json: user, status: 200
        end

        dbUser = User.find(params[:user_id])
        if dbUser
            user.update(user_parmas)
            render json: user, status: 200
        end
    end

    def showFriends
        user = User.find(params[:id]).friends 
        render json: user, status: 200
    end

    private 

    def user_params
        params.permit(:first_name, :last_name, :pronouns, :profile_picture, :phone_number, :birthday, :username, :email, :password)
    end
end
