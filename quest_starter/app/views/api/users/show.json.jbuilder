json.extract! @user, :id, :name, :email
json.games @user.games


# also include the games that were authored by the user
