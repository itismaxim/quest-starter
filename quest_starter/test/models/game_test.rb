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

require 'test_helper'

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
