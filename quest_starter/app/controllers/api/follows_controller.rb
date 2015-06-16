module Api
  class FollowsController < ApiController
    # before_action :require_signed_in!, only: [:index]

    def create
      @follow = current_user.follows.new(follow_params)

      if @follow.save
        render json: @follow
      else
        render json: @follow.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @follow = current_user.follows.find(params[:id])
      @follow.destroy
      render json: {}
    end

    def follow_params
      params.require(:follow).permit(:game_id, :user_id)
    end
  end
end
