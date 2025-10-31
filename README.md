# SCMOpt Frontend

SCMOpt API用のフロントエンドアプリケーション

## 🚀 セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` ファイルを作成し、以下を設定：

```bash
# API URL
NEXT_PUBLIC_API_URL=https://your-api.up.railway.app

# Firebase Configuration (Firebase Consoleから取得)
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開く

## 📦 ビルド

```bash
npm run build
npm start
```

## 🚀 Vercelへデプロイ

```bash
# Vercel CLIをインストール
npm install -g vercel

# ログイン
vercel login

# デプロイ
vercel

# 本番環境にデプロイ
vercel --prod
```

または、GitHubリポジトリをVercelに接続して自動デプロイ。

## 📚 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **API Client**: Axios
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)

## 🔗 関連リポジトリ

- **バックエンドAPI**: https://github.com/your-org/scmopt-api

## 📖 ドキュメント

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
