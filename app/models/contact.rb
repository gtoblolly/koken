class Contact < ApplicationRecord
  with_options presence: true do
    validates :name
    validates :email
    validates :phone_number
    validates :message
  end

  validates :area, inclusion: { in: ["東京都", "神奈川県", "埼玉県", "千葉県", "その他"] }
  validates :contents, inclusion: { in: ["戸建て", "マンション", "テナント工事", "現状回復"] }
end
