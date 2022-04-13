# line-bot-typescript-template

LINE Bot + TypeScript + Firebase Functions のテンプレート  
オウム返しボットです。

## 初期設定

1. .firebaserc ファイルを設定
2. functions/.env.expample をもとに.env ファイルを作成&設定

## デプロイ

実行環境

```bash
node 14
```

コマンド

```bash
cd functions

firebase deploy
or
firebase deploy --only functions:lineBot
```
