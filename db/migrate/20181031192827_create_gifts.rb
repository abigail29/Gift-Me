class CreateGifts < ActiveRecord::Migration[5.2]
  def change
    create_table :gifts do |t|
      t.string :gift, null: false
      t.string :price, null: false
      t.string :reason, null: false
      t.belongs_to :person
    end
  end
end
