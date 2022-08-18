class CreateFilms < ActiveRecord::Migration[5.2]
  def change
    create_table :films do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.string :length, null: false
      t.string :director_name, null: false
      t.string :summary, null: false
      t.float :avg_rating

      t.timestamps
    end
    add_index :films, :title
    add_index :films, :year
    add_index :films, :director_name
  end
end
