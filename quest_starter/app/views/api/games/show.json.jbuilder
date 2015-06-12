json.extract! @game, :id, :author_id, :author_name, :title, :summary
json.extract! @game, :image_url, :description, :active, :following_players
json.following current_user && current_user.followed_games.include?(@game)
json.authored current_user && current_user.id == @game.author_id

# If not logged in, those last two are null

# Remember mate, survey stuff is gonna go here.
# Probably.
