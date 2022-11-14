class PostsController < ApplicationController
    def create 
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        render json: {}, status: 200
    end

    def index
        render json: Post.all, status: 200
    end
    def show
        post = Post.find(session[:user_id])
        render json: post, status: 200
    end

    def update
        post = Post.find(params[:id])
        if post 
            post.update(post_params)
            render json: post, status: 200
        end
    end

    private 

    def post_params
        params.permit(:post, :saves, :likes, :comments, :group_id, :user_id)
    end
end
