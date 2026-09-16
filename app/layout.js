import './globals.css';
import { M_PLUS_Rounded_1c } from 'next/font/google';

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'わたしをかたちづくるもの',
  description: '100の偏愛＆クセつよ質問リスト',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={mPlusRounded.className}>
      <body className="bg-slate-100 text-slate-800 antialiased">{children}</body>
    </html>
  );
}