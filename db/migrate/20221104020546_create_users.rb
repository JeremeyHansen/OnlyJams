class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :phone_number
      t.string :profile_picture
      t.string :birthday
      t.string :pronouns

      t.timestamps
    end
  end
end
