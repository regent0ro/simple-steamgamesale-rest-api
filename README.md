# simple-steamgamesale-rest-api

**このリポジトリは Code Chrysalis の生徒であるときに作成しました**
**（This was created during my time as a student at Code Chrysalis）**

簡単な REST API(CRUD)を実装しています。内容は Steam のセール情報を想定しています。
ここで使用されたダミーデータは Kaggle の[Steam Sale Dataset](https://www.kaggle.com/xybervenom/steam-sale)を利用しています。

## 準備

### 前提

以下のものが事前にインストールされている必要があります。

- [Node.js](https://nodejs.org/en/)
  - 作成環境は Node 12 です
- [yarn](https://classic.yarnpkg.com/en/)
- [PostgreSQL](https://www.postgresql.org/)
- chrome

### インストールと実行

1. yarn よりパッケージをインストールします

   ```bash
   yarn install
   ```

2. `config\config.json`を生成し、DB の接続情報を入力します

   ```json
   {
     "development": {
       "username": "ユーザー名",
       "password": "パスワード",
       "database": "DB名",
       "host": "localhost",
       "dialect": "postgres"
     },
     "test": {
       "username": "ユーザー名",
       "password": "パスワード",
       "database": "DB名",
       "host": "localhost",
       "dialect": "postgres"
     },
     "production": {
       "username": "ユーザー名",
       "password": "パスワード",
       "database": "DB名",
       "host": "localhost",
       "dialect": "postgres"
     }
   }
   ```

3. マイグレーションでテーブルを生成します(games)

   ```bash
   yarn sequelize db:migrate
   ```

4. (必要な場合)Seed を実行し、ダミーデータをテーブルに挿入します

   ```bash
   yarn sequelize db:migrate
   ```

5. サーバを実行します
   ```bash
   yarn sequelize db:seed:all --debug
   ```
6. その他
   - `nodemon`がふくまれているもで`yarn dev`で実行すると、更新を検知してサーバを再起動してくれます。
   - `yarn test`より`chai`のテストと`eslint`が実行されます。

## 実装した REST API について

以下の API を実装しています。リクエストなどの詳細情報は[別途の html ファイル](https://github.com/regent0ro/simple-steamgamesale-rest-api/blob/main/src/public/api.html)に書きました。
| URL | Method | 説明 |
|-|-|-|-|-|
|/game | GET | すべてのゲームリストを取得します |
|/game | POST|　新しいゲーム情報を追加します |
|/game/:id | PATCH | 指定 Id のゲームの情報を修正します |
|/game/:id | DETELE | 指定 Id のゲームを削除します|

## デモ

以下のフォルダに API の説明ページを含めた、簡単なデモページを作成しています。

```text
/src/public/index.html
/src/public/api.html
```

![demo page](readme_demo.png)
