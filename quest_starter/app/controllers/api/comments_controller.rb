module Api
  class CommentsController < ApiController
    def show
      @comment = Comment.find(params[:id])
      render json: @comment
    end

    def index
      @comments = current_user.comments
      render json: @comments
    end

    def create
      require_signed_in!
      @comment = current_user.comments.new(comment_params)

      if @comment.save
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      require_signed_in!
      @comment = Comment.find(params[:id])

      if @comment && @comment.update(comment_params)
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      require_signed_in!
      @comment = current_user.comments.find(params[:id])
      @comment.destroy
      render json: {}
    end

    def comment_params
      params.require(:comment).permit(:poster_name, :text)
    end
  end
end
