# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  session_token :string           not null
#  pass_hash     :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
