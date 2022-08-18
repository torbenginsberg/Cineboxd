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
require 'test_helper'

class FilmTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
