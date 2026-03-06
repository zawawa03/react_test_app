class V1::Auth::SessionsController < DeviseTokenAuth::SessionsController
  before_action :authenticate_user!, only: [:destory]
  
end
