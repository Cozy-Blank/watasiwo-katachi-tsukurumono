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