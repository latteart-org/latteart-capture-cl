# latteart-capture-cl パッケージの開発

## 環境のセットアップ

開発に必要な以下ソフトウェアを開発環境にインストールします。

- Git
- Node.js v16.13.2
- Yarn

全てのインストールが完了したら、`latteart-capture-cl`リポジトリを clone し、以下を実行します。

```bash
$ cd latteart-capture-cl
$ yarn install
```

## 開発用コマンド

```bash
# 静的解析、自動修正
$ yarn fix

# テストの実行
$ yarn test

# ソースコードの変更検知、再ビルド
$ yarn watch

# ビルド済サーバの起動(port:3001)
$ node dist/index.js
```

## パッケージのビルド

```bash
$ yarn package
```

`dist`ディレクトリ配下に以下構成のディレクトリが作成されます。

```bash
dist/
  └─ latteart/
      └─ latteart-capture-cl/
          ├─ latteart-capture-cl.exe # Windows用実行ファイル
          └─ latteart-capture-cl # Mac用実行ファイル
```

## API ドキュメント

- [REST API リファレンス](https://latteart-org.github.io/latteart-capture-cl/)
- [WebSocket API リファレンス](./socketIOEvents.md)
