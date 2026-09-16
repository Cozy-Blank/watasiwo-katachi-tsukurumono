import './globals.css'; // ← Tailwind CSSを全画面に適用させるための重要ライン！

export const metadata = {
  title: 'watasiwo かたちづくるもの',
  description: '偏愛Tool',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}