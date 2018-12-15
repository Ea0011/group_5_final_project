class AuthenticateUser
    def initialize(email, password)
        @email = email
        @password = password
    end

    def call
        current_user = user
        token = Devise.friendly_token
        current_user.update!(authentication_token: token)
        {
            user: current_user
        }
    end

    private

    def user
        user = Admin.where(email: @email).first
        return user if user && user.valid_password?(@password)

        # handle the case when credentials are invalid
        raise(ExceptionHandler::AuthorizationError, "Invalid Credentials")
    end
end