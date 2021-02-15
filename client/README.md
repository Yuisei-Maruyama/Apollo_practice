# Frontend

create-react-app でプロジェクトを作成する。

```
npx create-react-app client --template typescript
```

## 導入

```
npm i -D @material-ui/icons @material-ui/core eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin husky lint-staged
```

## VS Code の設定

.vscode/setting.json

```json
{
  "editor.formatOnSave": true, // <-- prettierで整形
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // <-- eslintでリント
  },
  // デフォルトフォーマッタをprettierに
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
