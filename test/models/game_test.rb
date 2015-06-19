# == Schema Information
#
# Table name: games
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  author_name :string           not null
#  title       :string           not null
#  summary     :string           not null
#  description :text             not null
#  image_url   :string           not null
#  active      :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
