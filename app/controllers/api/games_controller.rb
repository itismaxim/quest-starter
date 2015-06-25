module Api
  class GamesController < ApiController
    before_action :require_signed_in!, only: [:create, :update, :destroy]

    def show
      @game = Game.find(params[:id])
      render :show
    end

    def index
      @games = current_user.games
      render json: @games
    end

    def create
      @game = current_user.authored_games.new(game_params)
      @game.author_name = current_user.name

      if @game.save
        render json: @game
      else
        render json: @game.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @game = current_user.authored_games.find(params[:id])

      if @game && @game.update(game_params)
        render json: @game
      else
        render json: @game.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @game = current_user.authored_games.find(params[:id])
      @game.destroy
      render json: {}
    end

    def search
      if params[:query].present?
        @game = Game.where("title ~ ?", params[:query])
      else
        @game = Game.none
      end
      render json: @game
      
      # This only includes titles.
      # I'm sure that if you parsed what was in the query string,
      # you could search by that instead.
      # Just a thought.
    end

    def game_params
      params.require(:game).permit(:title, :summary, :description, :image_url, :active)
    end
  end
end
