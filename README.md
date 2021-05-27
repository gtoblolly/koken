# アプリケーション名
## コーケン株式会社HP

# 概要
・顧客が企業へ問い合わせができる。  
・企業がHPに新着情報を投稿できる。

# 制作背景(意図)
### 建築会社HPの実案件  
・会社の宣伝発信  
・顧客の集客  
・クライアントの窓口

# DEMO
[![Image from Gyazo](https://i.gyazo.com/2e0f151a882f4adca81903f6535ee092.png)](https://gyazo.com/2e0f151a882f4adca81903f6535ee092)

# 実装予定の内容
.企業側投稿機能  
・管理者認証機能
.閲覧数確認機能

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
