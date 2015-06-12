# == Schema Information
#
# Table name: updates
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  text       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Update < ActiveRecord::Base
  validates :game_id, :title, :text, presence: true

  belongs_to :game
end
