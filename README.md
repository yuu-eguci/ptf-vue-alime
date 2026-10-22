ptf-vue-alime
===

ポートフォリオサイト用に、無料テンプレート [Alime](https://colorlib.com/wp/template/alime/) を Vue 2 (Vue CLI) へ移植したやつ。
GitHub Pages で公開していて、URL の先頭 (`/en/...`) で言語を切り替える。

- Docker: 対応!
- Node.js: 24.22.1 (LTS)
- Linter: ESLint 6.8.0
- Test: Playwright 1.64.1
- Vue: 2.6.12 / Vue CLI 4.5

## バージョン

| もの | バージョン |
| --- | --- |
| Node.js | 24.22.1 (LTS, `.nvmrc`) |
| Yarn | 1.22.22 |
| Vue | 2.6.12 |
| Vue CLI | 4.5 (webpack 4.47.0) |
| ESLint | 6.8.0 (`plugin:vue/essential`) |
| Playwright | 1.64.1 (E2E, desktop / mobile) |

## パッと実行してみたい

```bash
docker compose up --build
# http://localhost:8080/en/index
```

ローカルの Node.js で動かすならこれ。

Node.js は `.nvmrc` のバージョンを使う。
Volta があれば `package.json` の指定に自動で切り替わる。

```bash
yarn install --frozen-lockfile
yarn serve
# http://localhost:8080/en/index
```

## コマンド

```bash
# 開発サーバー (ホットリロード)
yarn serve

# 本番ビルド (dist/)
yarn build

# lint
yarn lint

# E2E テスト (先に yarn build。dist/ を GitHub Pages っぽく配信して desktop / mobile で確認する)
yarn playwright install chromium
yarn test:e2e

# i18n の未使用キーなどをチェック
yarn i18n:report
```

設定は [Configuration Reference](https://cli.vuejs.org/config/) を参照。

## デプロイ

`master` に push すると GitHub Actions がビルドして `gh-pages` ブランチへデプロイする。
