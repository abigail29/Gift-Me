class CreatePeoples < ActiveRecord::Migration[5.2]
  def change
    create_table :peoples do |t|
      t.string :firstName, null: false
      t.string :lastName, null: false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
