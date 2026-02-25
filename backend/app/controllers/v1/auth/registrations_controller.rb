class V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  after_action :set_token_info, only: [:create]
  before_action :configure_permitted_params, only: [:create]

  private

  def configure_permitted_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  def sign_up_params
    params.permit(:email, :password, :password_confirmation, :name)
  end

  def set_token_info
    return unless @resource.persisted?

    token = @resource.create_new_auth_token
    response.set_header('access-token', token['access-token'])
    response.set_header('client', token['client'])
    response.set_header('uid', token['uid'])
  end
end
