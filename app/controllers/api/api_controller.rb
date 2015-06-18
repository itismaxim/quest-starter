module Api

  class ApiController < ApplicationController
    def require_signed_in!
      unless signed_in?
        render json: ["You must be signed in to perform that action!"], status: :unauthorized
      end
    end
  end

end
