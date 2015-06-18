module Api
  class UsersController < ApiController
    def show
      @user = User.find(params[:id])
      render :show
      # if @user.id == current_user.id
      #   render :show
      # else
      #   render :show_less
      # end
    end

    # def index
    #   @users = current_user.users
    #   render json: @users
    # end
    #
    # def new
    #   require_signed_in!
    #   @user = current_user.users.new(user_params)
    #
    #   if @user.save
    #     render json: @user
    #   else
    #     render json: @user.errors.full_messages, status: :unprocessable_entity
    #   end
    # end
    #
    # def edit
    #   require_signed_in!
    #   @user = user.find(params[:id])
    #
    #   if @user && @user.update(user_params)
    #     render json: @user
    #   else
    #     render json: @user.errors.full_messages, status: :unprocessable_entity
    #   end
    # end
    #
    # def destroy
    #   require_signed_in!
    #   @user = current_user.users.find(params[:id])
    #   @user.destroy
    #   render json: {}
    # end
    #
    # def user_params
    #   params.require(:user).permit(:author_id, :summary, :description, :image_url, :status :interested_players)
    # end
  end
end
