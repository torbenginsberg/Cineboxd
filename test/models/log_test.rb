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
require 'test_helper'

class LogTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
