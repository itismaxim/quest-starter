class SessionsController < ApplicationController

  def new

  end

  def create
    user = User.find_by_credentials(user_params)

    if user
      sign_in(user)
      redirect_to root_url
    else
      flash.now[:errors] = ['Invalid username or password. :c']
      render :new
    end
  end

  def destroy
    log_out
    redirect_to new_session_url
  end
end
