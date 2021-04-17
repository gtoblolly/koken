# テーブル設計

## news テーブル

| Column     | Type   | Options     |
| --------   | ------ | ----------- |
| created_at | string | null: false |
| title      | string | null: false |
| comment    | text   | null: false |

## contact テーブル

| Column       | Type   | Options     |
| -------------| ------ | ----------- |
| name         | string | null: false |
| email        | string | null: false |
| phone_number | string | null: false |
| message      | text   | null: false |