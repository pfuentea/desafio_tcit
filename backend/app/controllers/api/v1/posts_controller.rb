class Api::V1::PostsController < ApplicationController
    before_action :set_post, only: [:show, :edit, :update, :destroy]
    

    # GET /api/v1/posts
    def index
        @posts = Post.all
        render json: @posts
    end

    # GET /api/v1/posts/1
    def show
      render json: @post
    end

    def new
        @post = Post.new
    end

    def edit; end

    # POST /api/v1/posts
    def create
        @post = Post.new(post_params)

        if @post.save
          render json: @post, status: :created
        else
            render json: @post.errors, status: :unprocessable_entity
        end
    end

    

    # PATCH/PUT /api/v1/posts/1
    def update
      if @post.update(post_params)
        render json: @post
      else
          render json: @post.errors, status: :unprocessable_entity
      end
    end

    #DELETE /post/1
    def destroy
      @post.destroy
      render json: @post
    end

    private
        def set_post
            @post = Post.find(params[:id])
        end

        def post_params
            params.require(:post).permit(:nombre,:descripcion,:id)
        end

end