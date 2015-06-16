module Api

  class ApiController < ApplicationController
    def require_signed_in!
      unless signed_in?
        render json: ["You must be signed in to perform that action!"], status: :unauthorized
        # when you rewrtie this
        # listen to the ... fetch?
        # and have an error callback?
        # and in there pop up an alert or something.
        # YOU GOTTA BE SIGNED IN
        # because ajax and redirects are funny
      end
    end
  end

end
