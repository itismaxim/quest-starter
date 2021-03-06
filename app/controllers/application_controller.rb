class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?

  def user_params
    puts (params.require(:user).permit(:password, :name))
    params.require(:user).permit(:password, :name)
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def log_out
    current_user && current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_sign_in
    redirect_to new_session_url unless signed_in?
  end

end
