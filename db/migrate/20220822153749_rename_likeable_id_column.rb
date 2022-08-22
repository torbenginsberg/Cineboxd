class RenameLikeableIdColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :likes, :likeable_item_id, :likeable_id
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
