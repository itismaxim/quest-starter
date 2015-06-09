# == Schema Information
#
# Table name: games
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  summary            :string           not null
#  description        :text             not null
#  image_url          :string           not null
#  status             :string           not null
#  interested_players :integer          not null
#  confirmed_players  :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Game < ActiveRecord::Base
  # validates :user_id, :email, :session_token, uniqueness: true, presence: true
  # validates :password, length: { minimum: 6, allnow_nil: true }

  # consider making a bunch of those NULL: okay.
  # Which would mean rolling back your migrations.
end
