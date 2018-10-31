class CreateGifts < ActiveRecord::Migration[5.2]
  def change
    create_table :gifts do |t|
      t.string :name, null: false
      t.string :date, null: false
      t.string :description
      t.string :person_id, null: false
      t.belongs_to :user, null: false
      t.belongs_to :person, null: false


      t.timestamps null: false
    end
  end
end
