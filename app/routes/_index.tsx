import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Tailwind FS System Demo" },
    { name: "description", content: "Figma対応レスポンシブデザインシステムのデモ" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b">
        <nav className="container-custom py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-fs-48 h-fs-48 bg-blue-600 rounded-full flex-center">
                <span className="text-white fs-24 font-bold">FS</span>
              </div>
              <div>
                <h1 className="fs-24 font-bold text-gray-800">Tailwind FS System</h1>
                <p className="fs-12 text-gray-600">Figma対応レスポンシブデザイン</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/basic-usage" className="fs-16 text-gray-700 hover:text-blue-600 transition-colors">基本的な使い方</Link>
              <Link to="/grid-examples" className="fs-16 text-gray-700 hover:text-blue-600 transition-colors">グリッドシステム</Link>
              <Link to="/utility-classes" className="fs-16 text-gray-700 hover:text-blue-600 transition-colors">ユーティリティクラス</Link>
              <Link to="/advanced" className="fs-16 text-gray-700 hover:text-blue-600 transition-colors">応用例</Link>
            </nav>
          </div>
        </nav>
      </header>

      <main>
        {/* ヒーローセクション */}
        <section className="py-fs-80 text-center">
          <div className="container-custom">
            <h2 className="fs-48 font-bold text-gray-900 mb-fs-24">
              Figma完全対応<br />
              <span className="text-blue-600">レスポンシブシステム</span>
            </h2>
            <p className="fs-18 text-gray-600 mb-fs-48 max-w-3xl mx-auto leading-relaxed">
              fs/fsm関数をTailwind CSSに統合した、<br className="hidden md:block" />
              デザイナーとエンジニアが共通言語で話せるレスポンシブデザインシステム
            </p>
            
            <div className="flex flex-col sm:flex-row gap-fs-16 justify-center">
              <Link 
                to="/basic-usage" 
                className="inline-block bg-blue-600 text-white px-fs-40 py-fs-16 rounded-fs-8 fs-16 font-bold hover:bg-blue-700 transition-all shadow-lg"
              >
                使い方を見る
              </Link>
              <Link 
                to="/grid-examples" 
                className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-fs-40 py-fs-16 rounded-fs-8 fs-16 font-bold hover:bg-blue-600 hover:text-white transition-all"
              >
                グリッド例を見る
              </Link>
            </div>
          </div>
        </section>

        {/* 機能説明セクション */}
        <section className="py-fs-80 bg-white">
          <div className="container-custom">
            <div className="text-center mb-fs-64">
              <h2 className="fs-36 font-bold text-gray-900 mb-fs-16">主な機能</h2>
              <p className="fs-16 text-gray-600">Figmaデザインをそのままコードで実現</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-fs-40">
              {/* fs関数 */}
              <div className="text-center p-fs-32 rounded-fs-16 bg-gradient-to-b from-blue-50 to-blue-100">
                <div className="w-fs-80 h-fs-80 bg-blue-600 rounded-full flex-center mx-auto mb-fs-24">
                  <span className="text-white fs-24 font-bold">fs</span>
                </div>
                <h3 className="fs-20 font-bold text-gray-900 mb-fs-16">fs関数</h3>
                <p className="fs-14 text-gray-600 leading-relaxed mb-fs-16">
                  PC（1440px）からタブレット（768px）まで滑らかにスケーリング
                </p>
                <div className="bg-gray-100 rounded-fs-8 p-fs-16">
                  <code className="fs-12 text-gray-700">{'className="w-fs-300 p-fs-32"'}</code>
                </div>
              </div>
              
              {/* fsm関数 */}
              <div className="text-center p-fs-32 rounded-fs-16 bg-gradient-to-b from-green-50 to-green-100">
                <div className="w-fs-80 h-fs-80 bg-green-600 rounded-full flex-center mx-auto mb-fs-24">
                  <span className="text-white fs-20 font-bold">fsm</span>
                </div>
                <h3 className="fs-20 font-bold text-gray-900 mb-fs-16">fsm関数</h3>
                <p className="fs-14 text-gray-600 leading-relaxed mb-fs-16">
                  モバイル専用（320px〜767px）で細かい調整が可能
                </p>
                <div className="bg-gray-100 rounded-fs-8 p-fs-16">
                  <code className="fs-12 text-gray-700">{'className="fsm-16 p-fsm-24"'}</code>
                </div>
              </div>
              
              {/* グリッドシステム */}
              <div className="text-center p-fs-32 rounded-fs-16 bg-gradient-to-b from-purple-50 to-purple-100">
                <div className="w-fs-80 h-fs-80 bg-purple-600 rounded-full flex-center mx-auto mb-fs-24">
                  <span className="text-white fs-24 font-bold">⊞</span>
                </div>
                <h3 className="fs-20 font-bold text-gray-900 mb-fs-16">グリッドシステム</h3>
                <p className="fs-14 text-gray-600 leading-relaxed mb-fs-16">
                  複雑な計算式不要の直感的なグリッドレイアウト
                </p>
                <div className="bg-gray-100 rounded-fs-8 p-fs-16">
                  <code className="fs-12 text-gray-700">{'columns="200 400 200"'}</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ライブデモセクション */}
        <section className="py-fs-80 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-fs-64">
              <h2 className="fs-36 font-bold text-gray-900 mb-fs-16">ライブデモ</h2>
              <p className="fs-16 text-gray-600">ブラウザのサイズを変更して、レスポンシブ動作を確認してください</p>
            </div>

            {/* fs関数デモ */}
            <div className="bg-white rounded-fs-16 p-fs-32 mb-fs-32 shadow-lg">
              <h3 className="fs-24 font-bold text-gray-900 mb-fs-24">fs関数デモ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-fs-24">
                <div className="bg-blue-100 p-fs-24 rounded-fs-12 text-center">
                  <div className="w-fs-80 h-fs-80 bg-blue-600 rounded-full mx-auto mb-fs-16"></div>
                  <p className="fs-14 text-gray-700">w-fs-80 h-fs-80</p>
                </div>
                <div className="bg-green-100 p-fs-24 rounded-fs-12 text-center">
                  <div className="w-fs-120 h-fs-80 bg-green-600 rounded-fs-8 mx-auto mb-fs-16"></div>
                  <p className="fs-14 text-gray-700">w-fs-120 h-fs-80</p>
                </div>
                <div className="bg-purple-100 p-fs-24 rounded-fs-12 text-center">
                  <div className="w-fs-64 h-fs-120 bg-purple-600 rounded-fs-16 mx-auto mb-fs-16"></div>
                  <p className="fs-14 text-gray-700">w-fs-64 h-fs-120</p>
                </div>
                <div className="bg-orange-100 p-fs-24 rounded-fs-12 text-center">
                  <div className="w-fs-96 h-fs-96 bg-orange-600 rounded-full mx-auto mb-fs-16"></div>
                  <p className="fs-14 text-gray-700">w-fs-96 h-fs-96</p>
                </div>
              </div>
            </div>

            {/* テキストサイズデモ */}
            <div className="bg-white rounded-fs-16 p-fs-32 shadow-lg">
              <h3 className="fs-24 font-bold text-gray-900 mb-fs-24">テキストサイズデモ</h3>
              <div className="space-y-fs-16">
                <div className="fs-48 font-bold text-blue-600">fs-48: 大見出し</div>
                <div className="fs-36 font-bold text-gray-900">fs-36: 中見出し</div>
                <div className="fs-24 font-semibold text-gray-800">fs-24: 小見出し</div>
                <div className="fs-18 text-gray-700">fs-18: 本文（大）</div>
                <div className="fs-16 text-gray-600">fs-16: 本文（標準）</div>
                <div className="fs-14 text-gray-500">fs-14: 本文（小）</div>
                <div className="fs-12 text-gray-400">fs-12: キャプション</div>
              </div>
            </div>
          </div>
        </section>

        {/* ナビゲーションセクション */}
        <section className="py-fs-80 bg-white">
          <div className="container-custom">
            <div className="text-center mb-fs-48">
              <h2 className="fs-36 font-bold text-gray-900 mb-fs-16">詳細な使い方</h2>
              <p className="fs-16 text-gray-600">各機能の詳しい使い方とサンプルコード</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-fs-24">
              <Link to="/basic-usage" className="group block">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-fs-32 rounded-fs-16 h-full hover:shadow-lg transition-all">
                  <div className="fs-32 mb-fs-16">📐</div>
                  <h3 className="fs-18 font-bold text-gray-900 mb-fs-12 group-hover:text-blue-600 transition-colors">
                    基本的な使い方
                  </h3>
                  <p className="fs-14 text-gray-600">
                    fs/fsm関数の基本的な使い方とサンプル
                  </p>
                </div>
              </Link>
              
              <Link to="/grid-examples" className="group block">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-fs-32 rounded-fs-16 h-full hover:shadow-lg transition-all">
                  <div className="fs-32 mb-fs-16">⊞</div>
                  <h3 className="fs-18 font-bold text-gray-900 mb-fs-12 group-hover:text-green-600 transition-colors">
                    グリッドシステム
                  </h3>
                  <p className="fs-14 text-gray-600">
                    ResponsiveGridコンポーネントの実例
                  </p>
                </div>
              </Link>
              
              <Link to="/utility-classes" className="group block">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-fs-32 rounded-fs-16 h-full hover:shadow-lg transition-all">
                  <div className="fs-32 mb-fs-16">🎨</div>
                  <h3 className="fs-18 font-bold text-gray-900 mb-fs-12 group-hover:text-purple-600 transition-colors">
                    ユーティリティクラス
                  </h3>
                  <p className="fs-14 text-gray-600">
                    全ユーティリティクラスの一覧と使用例
                  </p>
                </div>
              </Link>
              
              <Link to="/advanced" className="group block">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-fs-32 rounded-fs-16 h-full hover:shadow-lg transition-all">
                  <div className="fs-32 mb-fs-16">🚀</div>
                  <h3 className="fs-18 font-bold text-gray-900 mb-fs-12 group-hover:text-orange-600 transition-colors">
                    応用例
                  </h3>
                  <p className="fs-14 text-gray-600">
                    実際のWebサイトレイアウト例
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-fs-64">
        <div className="container-custom text-center">
          <div className="flex justify-center items-center space-x-2 mb-fs-32">
            <div className="w-fs-40 h-fs-40 bg-blue-600 rounded-full flex-center">
              <span className="text-white fs-18 font-bold">FS</span>
            </div>
            <div>
              <h3 className="fs-20 font-bold">Tailwind FS System</h3>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-fs-32 mb-fs-32">
            <Link to="/basic-usage" className="fs-14 hover:text-blue-400 transition-colors">基本的な使い方</Link>
            <Link to="/grid-examples" className="fs-14 hover:text-blue-400 transition-colors">グリッドシステム</Link>
            <Link to="/utility-classes" className="fs-14 hover:text-blue-400 transition-colors">ユーティリティクラス</Link>
            <Link to="/advanced" className="fs-14 hover:text-blue-400 transition-colors">応用例</Link>
          </div>
          
          <div className="border-t border-gray-700 pt-fs-24">
            <p className="fs-12 text-gray-400">
              © 2025 Tailwind FS System. Figma対応レスポンシブデザインシステム
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
