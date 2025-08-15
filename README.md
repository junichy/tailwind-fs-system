# Tailwind FS System

Figma-compatible Responsive Design System Demo / Figma対応レスポンシブデザインシステムのデモサイト

[English](#english) | [日本語](#日本語)

---

## English

### Overview

This project is a demo site for "Tailwind FS System", a responsive design system that directly translates Figma designs (PC: 1440px / SP: 360px) into code.

### Key Features

- **fs function**: Smooth scaling from PC (1440px) to tablet (768px)
- **fsm function**: Mobile-specific fine-tuning (320px-767px)
- **ResponsiveGrid**: Intuitive grid system without complex calculations
- **Rich utility classes**: fs-compatible width/height/padding/margin/border-radius

### Tech Stack

- **React Router v7** (formerly Remix)
- **Tailwind CSS** + Custom Plugins
- **TypeScript**

### Setup

#### Requirements

- Node.js 20.0.0 or higher

#### Installation

```sh
npm install
```

#### Start Development Server

```sh
npm run dev
```

Open http://localhost:5173 in your browser.

### Project Structure

```
app/
├── components/
│   └── ResponsiveGrid.tsx      # Grid system (optional)
├── hooks/
│   └── useResponsiveGrid.ts    # Custom hook (optional)
├── routes/
│   └── _index.tsx              # Main demo page
├── tailwind.css                # Tailwind imports (required)
tailwind.config.js              # fs function system config (required)
```

### Basic Usage Examples

#### Basic fs Function Usage

```jsx
// Width & Height
<div className="w-fs-300 h-fs-200">

// Padding & Margin
<div className="p-fs-32 m-fs-24">

// Font Size
<h1 className="fs-48">Heading</h1>
```

#### ResponsiveGrid Usage

```jsx
import { ResponsiveGrid, GridItem } from '../components/ResponsiveGrid';

<ResponsiveGrid columns="200 400 200" rows="100 300" gap={20}>
  <GridItem column={1} row={1}>
    Top-left item
  </GridItem>
  <GridItem column={2} row={1} columnSpan={2}>
    Item spanning 2 columns
  </GridItem>
</ResponsiveGrid>
```

#### Programmatic Usage

```jsx
import { useResponsiveGrid } from '../hooks/useResponsiveGrid';

function MyComponent() {
  const { fs, fsm, grid } = useResponsiveGrid();
  
  return (
    <div style={grid('200 400 200', '100 300', 24)}>
      <div style={{ fontSize: fs(20) }}>
        Responsive text
      </div>
    </div>
  );
}
```

### How to Use in Other Projects

#### 1. Copy Required Files

- `tailwind.config.js` - **CRITICAL** - fs function implementation
- `app/tailwind.css` - Basic Tailwind setup

#### 2. Optional Files (for grid system)

- `app/components/ResponsiveGrid.tsx`
- `app/hooks/useResponsiveGrid.ts`

#### 3. Available Size Values

**For fs function**: 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 120, 150, 200, 250, 300, 350, 400, 450, 500, 600, 800

**For fsm function**: 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 100, 150, 200, 250, 300

### Breakpoints

- **PC**: 1440px (Figma design base)
- **Tablet**: 768px (minimum display width)
- **Mobile**: 360px (Figma SP design base)
- **Minimum**: 320px (minimum supported width)

### Demo Pages

After launching, you can check each feature in the following sections:

1. **Live Demo** - Real-time confirmation by resizing browser
2. **fs Function Demo** - Various sized elements
3. **Text Size Demo** - Font size scaling confirmation
4. **Navigation** - Detail pages (planned)

### Build & Deploy

#### Production Build

```sh
npm run build
```

#### Start Production Server

```sh
npm start
```

### License

MIT License

### Related Resources

- [Tailwind CSS Official Documentation](https://tailwindcss.com/docs)
- [React Router Official Documentation](https://reactrouter.com/)

### Changelog

#### v1.0.0 (2025-08-15)
- Initial release
- fs/fsm function system implementation
- ResponsiveGrid component
- Demo site creation

---

## 日本語

### 概要

このプロジェクトは、Figmaデザイン（PC: 1440px / SP: 360px）をそのままコードで実現するためのレスポンシブデザインシステム「Tailwind FS System」のデモサイトです。

### 主な機能

- **fs関数**: PC（1440px）からタブレット（768px）まで滑らかにスケーリング
- **fsm関数**: モバイル専用（320px〜767px）で細かい調整が可能
- **ResponsiveGrid**: 複雑な計算式不要の直感的なグリッドシステム
- **豊富なユーティリティクラス**: width/height/padding/margin/border-radius等のfs対応

## 技術スタック

- **React Router v7** (旧Remix)
- **Tailwind CSS** + カスタムプラグイン
- **TypeScript**

## セットアップ

### 必要な環境

- Node.js 20.0.0以上

### インストール

```sh
npm install
```

### 開発サーバー起動

```sh
npm run dev
```

ブラウザで http://localhost:5173 を開いてください。

## プロジェクト構成

```
app/
├── components/
│   └── ResponsiveGrid.tsx      # グリッドシステム（オプション）
├── hooks/
│   └── useResponsiveGrid.ts    # カスタムフック（オプション）
├── routes/
│   └── _index.tsx              # メインデモページ
├── tailwind.css                # Tailwindインポート（必須）
tailwind.config.js              # fs関数システム設定（必須）
```

## 主な使用例

### 基本的なfs関数の使用

```jsx
// 幅・高さ
<div className="w-fs-300 h-fs-200">

// パディング・マージン
<div className="p-fs-32 m-fs-24">

// フォントサイズ
<h1 className="fs-48">見出し</h1>
```

### ResponsiveGridの使用

```jsx
import { ResponsiveGrid, GridItem } from '../components/ResponsiveGrid';

<ResponsiveGrid columns="200 400 200" rows="100 300" gap={20}>
  <GridItem column={1} row={1}>
    左上のアイテム
  </GridItem>
  <GridItem column={2} row={1} columnSpan={2}>
    2列分のアイテム
  </GridItem>
</ResponsiveGrid>
```

### プログラマティックな使用

```jsx
import { useResponsiveGrid } from '../hooks/useResponsiveGrid';

function MyComponent() {
  const { fs, fsm, grid } = useResponsiveGrid();
  
  return (
    <div style={grid('200 400 200', '100 300', 24)}>
      <div style={{ fontSize: fs(20) }}>
        レスポンシブテキスト
      </div>
    </div>
  );
}
```

## 他のプロジェクトで使用する方法

### 1. 必須ファイルのコピー

- `tailwind.config.js` - **最重要** - fs関数の実装
- `app/tailwind.css` - Tailwindの基本設定

### 2. オプションファイル（グリッドシステムを使用する場合）

- `app/components/ResponsiveGrid.tsx`
- `app/hooks/useResponsiveGrid.ts`

### 3. 利用可能なサイズ値

**fs関数用**: 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 120, 150, 200, 250, 300, 350, 400, 450, 500, 600, 800

**fsm関数用**: 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 100, 150, 200, 250, 300

## ブレークポイント

- **PC**: 1440px（Figmaデザイン基準）
- **タブレット**: 768px（最小表示幅）
- **モバイル**: 360px（Figma SPデザイン基準）
- **最小**: 320px（最小サポート幅）

## デモページ

起動後、以下のセクションで各機能を確認できます：

1. **ライブデモ** - ブラウザサイズ変更でリアルタイム確認
2. **fs関数デモ** - 様々なサイズの要素
3. **テキストサイズデモ** - フォントサイズのスケーリング確認
4. **ナビゲーション** - 詳細ページ（実装予定）

## ビルド・デプロイ

### プロダクションビルド

```sh
npm run build
```

### 本番サーバー起動

```sh
npm start
```

## ライセンス

MIT License

## 関連資料

- [Tailwind CSS公式ドキュメント](https://tailwindcss.com/docs)
- [React Router公式ドキュメント](https://reactrouter.com/)

## 更新履歴

### v1.0.0 (2025-08-15)
- 初期リリース
- fs/fsm関数システムの実装
- ResponsiveGridコンポーネント
- デモサイトの作成
