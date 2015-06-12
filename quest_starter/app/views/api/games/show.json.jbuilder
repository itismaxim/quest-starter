json.extract! @game, :id, :author_id, :author_name, :title, :summary, :image_url
json.extract! @game, :description, :active, :followers, :updates, :comments
json.authored current_user && current_user.id == @game.author_id
json.following current_user && current_user.followed_games.include?(@game)

# If not logged in, those last two are null

# Remember mate, survey stuff is gonna go here.
# Probably.
