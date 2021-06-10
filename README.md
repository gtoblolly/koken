# アプリケーション名
## コーケン株式会社企業WEBサイト

# 概要
・顧客が企業へ問い合わせができる。  
・企業がサイトに新着情報を投稿できる。

# 制作背景(意図)
### 企業WEBサイトの実案件<br>
企業ページを作成したい建築会社の社長を知人に紹介してもらい、実際のクライアントに見立てて企業サイトを作成しました。<br>

建築会社の宣伝発信をして新規顧客の集客を目的する。<br>
会社側から新しい取り組みを更新できること。<br>
クライアントがサイト上より会社に直接コンタクトを取れるようにするできること。<br>
以上の機能とレイアウトを提案し、画像と文面は会社様に用意してもらいました。<br>

自分はプログラミング技術と、コミュニケーション力を形にするため。<br>
会社様は未経験のエンジニアの作成物なので安価でHPを作成できる。<br>
双方に利益があると思いこのウェブサイトを作成しました。<br>
# DEMO
[![Image from Gyazo](https://i.gyazo.com/2e0f151a882f4adca81903f6535ee092.png)](https://gyazo.com/2e0f151a882f4adca81903f6535ee092)

# 実装予定の内容
企業側投稿機能<br>
施工事例、新着情報をサイトに投稿できてサイトを更新できるようにする。<br>

管理者認証機能<br>
投稿機能画面のアクセスに制限をかけるため<br>

閲覧数確認機能<br>
ウェブサイトが実際に役に立っているのか数字で表すため。<br>

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


## user　テーブル

| Column       | Type   | Options     |
| -------------| ------ | ----------- |
| email        | string | null: false |
| password     | string | null: false |

