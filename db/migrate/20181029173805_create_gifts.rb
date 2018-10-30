class CreateGifts < ActiveRecord::Migration[5.2]
  def change
    create_table :gifts do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :username, null: false, index: {unique: true}
      
      t.timestamps null: false
    end
  end
end
