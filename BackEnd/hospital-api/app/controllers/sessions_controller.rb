class SessionsController < ApplicationController
    skip_before_action :authenticate_user, only: [:login]

    def login
        current_user = (AuthenticateUser.new(admin_params[:email], admin_params[:password]).call)[:user]
        json_response(current_user)
    end

    def logout
        current_user.update(authentication_token: nil)
        head(:no_content)
    end

    private

    def admin_params
        params.permit(:email, :password)
    end
end
