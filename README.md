# テーブル設計

## news テーブル

| Column     | Type   | Options     |
| --------   | ------ | ----------- |
| title      | string | null: false |
| image      | text   |             |
| comment    | text   | null: false |

## contact テーブル

| Column       | Type   | Options     |
| -------------| ------ | ----------- |
| name         | string | null: false |
| email        | string | null: false |
| phone_number | string | null: false |
| message      | text   | null: false |