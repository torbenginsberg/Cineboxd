class CreateLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :logs do |t|
      t.integer :user_id, null: false
      t.integer :film_id, null: false

      t.timestamps
    end
    add_index :logs, [:user_id, :film_id]
  end
end
