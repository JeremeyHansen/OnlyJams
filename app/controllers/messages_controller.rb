class MessagesController < ApplicationController
    def create 
        message = Message.create!(message_params)
        render json: message, status: :created
    end

    def destroy
        message = Message.find(params[:id])
        message.destroy
        render json: {}, status: 200
    end

    def index
        render json: Message.all, status: 200
    end
    def show
        message = Message.find(params[:message_id])
        render json: message, status: 200
    end

    private 

    def message_params
        params.permit(:message, :friend_id, :user_id)
    end
end
