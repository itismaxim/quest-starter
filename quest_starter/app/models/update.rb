# == Schema Information
#
# Table name: updates
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  game_id    :integer          not null
#  title      :string           not null
#  text       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Update < ActiveRecord::Base
  validates :user_id, :game_id, :title, :text, presence: true

  belongs_to :user
  belongs_to :game
end
