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

require 'test_helper'

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
