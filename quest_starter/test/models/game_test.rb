# == Schema Information
#
# Table name: games
#
#  id                :integer          not null, primary key
#  author_id         :integer          not null
#  author_name       :string           not null
#  title             :string           not null
#  summary           :string
#  description       :text
#  image_url         :string
#  active            :boolean          default(FALSE), not null
#  following_players :integer          default(0), not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'test_helper'

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
