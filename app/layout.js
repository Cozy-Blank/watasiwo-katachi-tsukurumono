import './globals.css';
import { M_PLUS_Rounded_1c } from 'next/font/google';

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});
export const metadata = {
  title: 'watasiwo かたちづくるもの',
  description: '偏愛Tool',
  manifest: '/manifest.json',
  icons: {
    icon: '/watasiicon.png',
    apple: '/watasiicon.png',
  },
}

  openGraph: {
    title: 'わたしをかたちづくるもの',
    description: '100の偏愛＆クセつよ質問リスト',
    images: [
      {
        url: '/satasiicon.png',
        alt: 'わたしをかたちづくるもの アイコン',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'わたしをかたちづくるもの',
  },
};

export const viewport = {
  themeColor: '#f1f5f9', // bg-slate-100に合わせたヘッダーカラー
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={mPlusRounded.className}>
      <body className="bg-slate-100 text-slate-800 antialiased">{children}</body>
    </html>
  );
}