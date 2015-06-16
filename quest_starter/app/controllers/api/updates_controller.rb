module Api
  class UpdatesController < ApiController
    before_action :require_signed_in!
    before_action :user_authored_game

    def create
      @update = current_user.updates.new(update_params)

      if @update.save
        render json: @update
      else
        render json: @update.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @update = Update.find(params[:id])

      if @update && @update.update(update_params)
        render json: @update
      else
        render json: @update.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @update = current_user.updates.find(params[:id])
      @update.destroy
      render json: {}
    end

    def update_params
      params.require(:update).permit(:game_id, :title, :text)
    end

    def user_authored_game
      game = Game.find(params[:update][:game_id])
      unless current_user.authored_games.includes(game)
        render json: ["This game doesn't belong to you."], status: :unauthorized
      end
    end
  end
end
