class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      redirect_to root_url #crap I'll need to make that
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show

  end

end
