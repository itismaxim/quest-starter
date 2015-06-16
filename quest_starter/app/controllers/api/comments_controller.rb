module Api
  class CommentsController < ApiController
    # before_action :require_signed_in!, only: [:index]

    def create
      if current_user
        @comment = current_user.comments.new(comment_params)
      else
        @comment = Comment.new(comment_params)
      end

      if @comment.save
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @comment = Comment.find(params[:id])

      if @comment && @comment.update(comment_params)
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @comment = Comment.find(params[:id])
      @comment.destroy
      render json: {}
    end

    def comment_params
      params.require(:comment).permit(:poster_name, :text, :game_id)
    end
  end
end
