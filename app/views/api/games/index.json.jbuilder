json.games @games do |game|
  json.extract! game, :id, :author_id, :author_name, :title, :summary, :image_url
  json.extract! game, :description, :active, :followers, :updates, :comments
end

# active author_id author_name image_url summary title 
