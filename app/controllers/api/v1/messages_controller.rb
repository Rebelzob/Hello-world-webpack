class Api::V1::MessagesController < ApplicationController
  def index
    @messages = Message.order('RANDOM()')
    render json: { message: @messages.first.greetings, status: '200'}
  end
end
