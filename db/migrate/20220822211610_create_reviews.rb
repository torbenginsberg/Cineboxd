class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :film_id, null: false
      t.text :body, null: false
      t.date :date_watched

      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :film_id
  end
end
