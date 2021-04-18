class TweetsController < ApplicationController
  def index
  end

  def create
    Tweet.create(tweet_params)
    render :new
  end

  def new
    @tweet = Tweet.new
  end

  def show
  end
  
  private
  def tweet_params
    params.require(:tweet).permit(:title, :image, :comment)
  end
end
