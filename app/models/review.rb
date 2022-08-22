# == Schema Information
#
# Table name: reviews
#
#  id           :bigint           not null, primary key
#  user_id      :integer          not null
#  film_id      :integer          not null
#  body         :text             not null
#  date_watched :date
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Review < ApplicationRecord
    validates :user_id, :film_id, presence: true

    belongs_to :user
    belongs_to :film
end
