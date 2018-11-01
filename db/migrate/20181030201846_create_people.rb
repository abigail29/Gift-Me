class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :name, null: false
      t.string :birthday, null: false
      t.string :description
      t.belongs_to :user, null: false


      t.timestamps null: false
    end
  end
end
