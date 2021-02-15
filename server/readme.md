# Backend

## 導入

```
npm i express @types/express express-graphql graphql mongoose nodemon ts-node

npm i -D @types/node typescript

npm i cors @types/cors
```

## 使用パッケージ

- express : Node.js のフレームワーク
- @types/express : express で typescript を解釈できるようにする
- graphql : API のために作られたクエリ言語
- express-graphql : express で GraphQL を使用できるようにする
- mongoose : MongoDB と接続する
- nodemon : ソースを監視して、自動でサーバーを再起動してくれるツール
- ts-node : TypeScript で Node.js をトランスパイルする
- @types/node : Node.js で typescript を認識できるようにする
- typescript : Javascript に型情報を付与する
- cors : クロスドメインの許可

---

新しくクエリを追加する際には、下記の 3 点を確認する。

```
- Typeが定義されているか
- Modelの確認
- Queryを記述する
```
