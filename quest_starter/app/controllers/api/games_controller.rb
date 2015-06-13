module Api
  class GamesController < ApiController
    def show
      @game = Game.find(params[:id])
      render :show
    end

    def index
      @games = current_user.games
      render json: @games
    end

    def create
      require_signed_in!
      @game = current_user.games.new(game_params)

      if @game.save
        render json: @game
      else
        render json: @game.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      require_signed_in!
      @game = Game.find(params[:id])

      if @game && @game.update(game_params)
        render json: @game
      else
        render json: @game.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      require_signed_in!
      @game = current_user.games.find(params[:id])
      @game.destroy
      render json: {}
    end

    def game_params
      params.require(:game).permit(:title, :summary, :description, :image_url, :active)
    end
  end
end
