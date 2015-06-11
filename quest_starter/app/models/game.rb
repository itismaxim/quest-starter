# == Schema Information
#
# Table name: games
#
#  id                :integer          not null, primary key
#  author_id         :integer          not null
#  title             :string           not null
#  summary           :string
#  description       :text
#  image_url         :string
#  active            :boolean          default(FALSE), not null
#  following_players :integer          default(0), not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Game < ActiveRecord::Base
  validates :author_id, :title, presence: true # :status, :interested_players,
  # I'll let the database handle it? No reason to set them every time.
  # Maybe a custom setter meathod?
  belongs_to :author, class_name: 'User', foreign_key: :author_id


end
