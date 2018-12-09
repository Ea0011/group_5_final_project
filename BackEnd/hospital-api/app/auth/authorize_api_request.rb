class AuthorizeApiRequest
    def initialize(headers)
        @headers = headers
    end

    def call
        {
            user: user
        }
    end

    private

    def user
        @user = Admin.find_by!(authentication_token: auth_headers)

        #handle the case when the user is not found
        rescue ActiveRecord::RecordNotFound => e
            raise(ExceptionHandler::InvalidToken, "Invalid Token")
    end

    def auth_headers
        if @headers["Authorization"].present?
            return @headers["Authorization"].split(' ').last
        end
            raise(ExceptionHandler::MissingToken, "Missing Token")
    end
end