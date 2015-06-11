# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  email         :string
#  session_token :string           not null
#  pass_hash     :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class User < ActiveRecord::Base
  validates :name, :session_token, :pass_hash, uniqueness: true, presence: true # :email
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many :games, class_name: 'Game', foreign_key: :author_id
  # has_many :surveys, through: :surveys
  # I think I won't need this at all. When do you call ALL the surveys?
  # You always sort them by board don't you?

  after_initialize :ensure_session_token

  def self.find_by_credentials(params)
    user = User.find_by_name(params[:name])
    return nil unless user && user.is_password?(params[:password])
    user
  end

  def password=(password)
    @password = password
    self.pass_hash = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.pass_hash).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
