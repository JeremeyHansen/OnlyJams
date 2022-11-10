class SubscriptionsController < ApplicationController
    def create 
        subscription = Subscription.create!(subscription_params)
        render json: subscription, status: :created
    end

    def destroy
        subscription = Subscription.find(params[:id])
        subscription.destroy
        render json: {}, status: 200
    end

    def index
        render json: Subscription.all, status: 200
    end

    private 

    def subscription_params
        params.permit(:group_id, :user_id)
    end
    
end
