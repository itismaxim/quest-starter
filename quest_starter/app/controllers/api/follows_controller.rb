module Api
  class FollowsController < ApiController
    def show
      @follow = Follow.find(params[:id])
      render json: @follow
    end

    def index
      @follows = current_user.follows
      render json: @follows
    end

    def create
      require_signed_in!
      @follow = current_user.follows.new(follow_params)

      if @follow.save
        render json: @follow
      else
        render json: @follow.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      require_signed_in!
      @follow = Follow.find(params[:id])

      if @follow && @follow.follow(follow_params)
        render json: @follow
      else
        render json: @follow.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      require_signed_in!
      @follow = current_user.follows.find(params[:id])
      @follow.destroy
      render json: {}
    end

    def follow_params
      params.require(:follow).permit(:game_id, :user_id)
    end
  end
end
