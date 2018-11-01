class CreateHolidays < ActiveRecord::Migration[5.2]
  def change
    create_table :holidays do |t|
      t.string :christmas, null: false
      t.string :valentines, null: false
      t.string :easter, null: false
      t.string :new_years, null: false
      t.string :hanukkah, null: false
      t.string :mothers_day, null: false
      t.string :fathers_day, null: false

      t.timestamps null:false
    end
  end
end
