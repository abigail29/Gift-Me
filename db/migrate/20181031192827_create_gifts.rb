class CreateGifts < ActiveRecord::Migration[5.2]
  def change
    create_table :gifts do |t|
      t.string :name, null: false
      t.string :price, null: false
      t.belongs_to :person
    end
  end
end
