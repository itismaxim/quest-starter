json.extract! @user, :id, :name, :email
json.authored_games @user.authored_games
json.followed_games @user.followed_games