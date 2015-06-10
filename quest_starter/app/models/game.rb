# == Schema Information
#
# Table name: games
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  summary            :string
#  description        :text
#  image_url          :string
#  status             :string           not null
#  interested_players :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Game < ActiveRecord::Base
  validates :user_id, presence: true # :status, :interested_players,
  # I'll let the database handle it? No reason to set them every time.
  # Maybe a custom setter meathod?
  belongs_to :user

  
end
