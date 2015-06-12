module Api
  class UpdatesController < ApiController
    def show
      @update = Update.find(params[:id])
      render json: @update
    end

    def index
      @updates = current_user.updates
      render json: @updates
    end

    def new
      require_signed_in!
      @update = current_user.updates.new(update_params)

      if @update.save
        render json: @update
      else
        render json: @update.errors.full_messages, status: :unprocessable_entity
      end
    end

    def edit
      require_signed_in!
      @update = Update.find(params[:id])

      if @update && @update.update(update_params)
        render json: @update
      else
        render json: @update.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      require_signed_in!
      @update = current_user.updates.find(params[:id])
      @update.destroy
      render json: {}
    end

    def update_params
      params.require(:update).permit(:title, :text)
    end
  end
end
