# LatteArt Capture CL

LatteArt で利用する操作履歴を取得するサービスです。

WebDriver を利用して Web ブラウザに対するユーザ操作を取得します。

## 起動

### 事前準備

1. 実行端末に以下をインストールし、パスを通します。
   - テスト対象のプラットフォームが PC の場合
     1. テスト対象の chrome のバージョンに対応する`chromedriver`
   - テスト対象のプラットフォームが Android の場合
     1. テスト対象の chrome のバージョンに対応する`chromedriver`
     1. `adb`
     1. `Appium`
1. テスト対象のプラットフォームが PC 以外の場合は Appium サーバを起動します。

### 手順

1. `latteart-capture-cl`ディレクトリ配下の実行ファイルをダブルクリック等で実行します。
1. ローカルサーバが立ち上がり、`http://127.0.0.1:3001`で待ち受けます。

## License

This software is licensed under the Apache License, Version2.0.
