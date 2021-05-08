class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :name,         null: false
      t.string :email,        null: false
      t.string :phone_number, null: false
      t.integer :area,        null: false
      t.integer :contents,    null: false
      t.text :message,        null: false
      t.timestamps
    end
  end
end
