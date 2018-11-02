class CreateGiftings < ActiveRecord::Migration[5.2]
  def change
    create_table :giftings do |t|
      t.belongs_to :user, null: false
      t.belongs_to :person, null: false
      t.belongs_to :gift, null: false
      
      t.string :price, null: false
      t.string :reason, null: false

      t.timestamps null: false
    end
  end
end
