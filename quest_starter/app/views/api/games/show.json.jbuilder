json.extract! @game, :id, :author_id, :author_name, :title, :summary, :image_url
json.extract! @game, :description, :active, :followers, :updates, :comments
json.authored current_user && current_user.id == @game.author_id

if current_user
  follow = current_user.follows.find_by(game_id: @game.id)
  json.follow_id (follow ? follow.id : nil)
else
  json.follow_id nil
end

# If not logged in, those last two are null

# Remember mate, survey stuff is gonna go here.
# Probably.
