# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  bookmarks_count        :integer          default(0), not null
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :string
#  email                  :string           not null
#  encrypted_password     :string           default(""), not null
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  sign_in_count          :integer          default(0), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :trackable

  validates :email, presence: true, uniqueness: { case_sensitive: false }

  has_many :bookmarks, dependent: :destroy, counter_cache: :bookmarks_count
  has_many :items, through: :bookmarks, counter_cache: :bookmarks_count

  def add_bookmark(item)
    bookmarks.find_or_create_by(item: item)
  end
end
