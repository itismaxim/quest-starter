json.games @games do |game|
  json.active game.active
  json.author_id game.author_id
  json.author_name game.author_name
  json.image_url game.image_url
  json.summary game.summary
  json.title game.title
end
# uh maybe I need to name these authorId, javascript style?
