json.extract! @user, :id, :name, :email
json.authored_games @user.authored_games
json.followed_games @user.followed_games


# also include the games that were authored by the user
