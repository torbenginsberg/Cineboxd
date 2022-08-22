# == Schema Information
#
# Table name: logs
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  film_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Log < ApplicationRecord
    validates :user_id, :film_id, presence: true
    validates :user_id, uniqueness: { scope: [:film_id]}

    belongs_to :user

    belongs_to :film
end
