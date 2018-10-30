class CreateRegistrations < ActiveRecord::Migration[5.2]
  def change
    create_table :registrations do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :username, null: false, index: {unique: true}
      t.integer :birthday, null: false

      t.timestamps null: false
    end
  end
end
