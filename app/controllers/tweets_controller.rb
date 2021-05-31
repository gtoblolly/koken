class TweetsController < ApplicationController

  before_action :move_to_index, only: [:new, :edit]

  def index
    @tweets = Tweet.all
  end

  def create
    Tweet.create(tweet_params)
    redirect_to action: :new
  end

  def new
    @tweet = Tweet.new
    @tweets = Tweet.all
  end

  def show
    @tweet = Tweet.find(params[:id])
  end

  def destroy
    tweet = Tweet.find(params[:id])
    tweet.destroy
    redirect_to action: :new
  end
  
  def edit
    @tweet = Tweet.find(params[:id])
  end

  def update
    tweet = Tweet.find(params[:id])
    tweet.update(tweet_params)
    redirect_to action: :new
  end

  private
  def tweet_params
    params.require(:tweet).permit(:title, :image, :comment)
  end

  def move_to_index
    unless user_signed_in?
      redirect_to action: :index
    end
  end

end
