# == Schema Information
#
# Table name: films
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  year          :integer          not null
#  length        :string           not null
#  director_name :string           not null
#  summary       :string           not null
#  avg_rating    :float
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Film < ApplicationRecord
    validates :title, :year, :length, :director_name, :summary, presence: true

    has_many_attached :photos
end
