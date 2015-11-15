class AddGameDefaultValues < ActiveRecord::Migration
  def change
    change_column_default :games, :title, 'My Cool Game'
    change_column_default :games, :summary, 'Summarize your game here. Make is short but sweet!'
    change_column_default :games, :description, 'Describe your game here. This is where you can get in depth and describe what system you want to run, what the setting will be, and what kind of characters the players will have. Feel free to add anything else!'
    change_column_default :games, :image_url, 'http://res.cloudinary.com/dar1oti2e/image/upload/w_700,h_500,c_fill/v1447300087/kpzpw79z8k4lq6e7a52o.jpg'
  end
end
