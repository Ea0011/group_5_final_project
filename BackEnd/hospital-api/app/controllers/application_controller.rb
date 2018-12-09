class ApplicationController < ActionController::API
    include Response, ExceptionHandler

    attr_reader :current_user
    before_action :authenticate_user

    private

    def authenticate_user
        @current_user = (AuthorizeApiRequest.new(request.headers).call)[:user]
    end

    def authenticate_super_user
        @current_user = (AuthorizeApiRequest.new(request.headers).call)[:user]
        unless @current_user.super_user
            raise(ExceptionHandler::NotEnoughPrivileges, "Not enough privileges")
        end
    end
end
