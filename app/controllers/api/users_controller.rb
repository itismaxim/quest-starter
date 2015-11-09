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
  end
end
