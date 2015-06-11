# == Schema Information
#
# Table name: follows
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  game_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Follow < ActiveRecord::Base
  validates :user_id, :game_id, presence: true

  belongs_to :game
  belongs_to :user
end
