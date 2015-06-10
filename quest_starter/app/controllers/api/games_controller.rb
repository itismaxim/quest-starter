module Api
  class GamesController < ApiController
    def show
      @game = game.find(params[:id])
      render json: @game
      # render :show
      # that goes to views/api/games/show.json.jbuilder
      # I don't think I need any of those nested resources, though.
    end

    def index
      @games = current_user.games
      render json: @games
    end

    def new
      require_signed_in!
      @game = current_user.games.new(game_params)

      if @game.save
        render json: @game
      else
        render json: @game.errors.full_messages, status: :unprocessable_entity
      end
    end

    def edit
      require_signed_in!
      @game = game.find(params[:id])

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
      params.require(:game).permit(:user_id, :summary, :description, :image_url, :status :interested_players)
    end
  end
end
