class ApplicationController < ActionController::API
    include Response, ExceptionHandler

    attr_reader :current_user
    before_action :authenticate_user

    private

    def authenticate_user
        @current_user = (AuthorizeApiRequest.new(request.headers).call)[:user]
    end

    def super_user?
        # true -> super user, false -> just an admin
    end
end
