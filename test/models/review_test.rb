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
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
