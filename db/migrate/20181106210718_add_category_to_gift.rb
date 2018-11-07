class AddCategoryToGift < ActiveRecord::Migration[5.2]
  def change
    add_column :gifts, :category, :string

  end
end
