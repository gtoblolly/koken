class CreateExamples < ActiveRecord::Migration[6.0]
  def change
    create_table :examples do |t|
      t.string :title
      t.text :img
      t.timestamps
    end
  end
end
