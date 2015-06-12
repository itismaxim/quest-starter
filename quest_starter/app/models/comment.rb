# == Schema Information
#
# Table name: comments
#
#  id          :integer          not null, primary key
#  game_id     :integer          not null
#  user_id     :integer
#  poster_name :string           not null
#  text        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :game_id, :poster_name, :text, presence: true

  # belongs_to :user
  belongs_to :game
end
