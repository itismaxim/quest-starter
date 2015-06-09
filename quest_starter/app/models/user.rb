# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  email         :string           not null
#  session_token :string           not null
#  pass_hash     :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class User < ActiveRecord::Base
  validates :name, :email, :session_token, uniqueness: true, presence: true
  validates :password, length: { minimum: 6, allnow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(name, password)
    user = User.find_by_name(name)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.pass_hash = BCrypt::Password.create(password)
  end

  def is_password?(Password)
    BCrypt::Password.new(self.pass_hash).is_password?
  end

  def reset_session_token!
    self.session_token = SeccureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SeccureRandom.urlsafe_base64
  end

end
