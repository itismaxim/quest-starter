# == Schema Information
#
# Table name: games
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  author_name :string           not null
#  title       :string           not null
#  summary     :string
#  description :text
#  image_url   :string
#  active      :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Game < ActiveRecord::Base
  validates :author_id, :author_name, :title, presence: true
  belongs_to :author, class_name: 'User', foreign_key: :author_id
  has_many :follows
  has_many :followers, through: :follows, source: :user
  has_many :updates
  has_many :comments

  def followers
    self.follows.count
  end
end
