# poc-storybook
Next.js + Tailwind CSS + [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/ja/get-started/)について検証する

## GitHub Pages
- 本番環境: https://aew2sbee.github.io/poc-storybook
- 開発環境: https://aew2sbee.github.io/poc-storybook/develop

## インストール
Next.js
```bash
npx create-next-app@latest .
```

Storybook
```bash
npm create storybook@latest
```

taskbox
```bash
npx degit chromaui/intro-storybook-react-template taskbox
```

## 実行

```bash
npm run storybook
```

## Storybook 各ファイルの役割ガイド
- `.stories.tsx`: コンポーネントのカタログ - コンポーネントに「どんな状態（Props）」があるかを定義します。エンジニアがコードを確認するためのメイン場所です。
- `.mdx`: 取扱説明書（ドキュメント） - 使い方やデザインの意図を文章で書きます。非エンジニア（デザイナーやPM）が見てもわかる資料を作る場所です。
- `.test.tsx`: 自動点検マシン - 「ボタンを押したら正しく動くか？」などの挙動をテストします。わざわざ手動で動かさなくても品質を担保する場所です。
