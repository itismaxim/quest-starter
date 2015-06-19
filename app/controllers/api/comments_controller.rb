module Api
  class CommentsController < ApiController
    before_action :require_signed_in!, only: [:update, :destroy]

    def create
      if current_user
        @comment = current_user.comments.new(comment_params)
        @comment.poster_name = current_user.name
        @comment.user_id = current_user.id
      else
        @comment = Comment.new(comment_params)
        @comment.user_id = 0
      end

      if @comment.save
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @comment = current_user.comments.find(params[:id])

      if @comment && @comment.update(comment_params)
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @comment = current_user.comments.find(params[:id])
      @comment.destroy
      render json: {}
    end

    def comment_params
      params.require(:comment).permit(:poster_name, :text, :game_id)
    end
  end
end
