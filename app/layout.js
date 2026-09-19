import './globals.css'

export const metadata = {
  title: 'watasiwo かたちづくるもの',
  description: '100の偏愛&クセつよ質問リスト',
  manifest: '/manifest.json',
  icons: {
    icon: '/watasiicon.png',
    apple: '/watasiicon.png',
  },
  openGraph: {
    title: 'watasiwo かたちづくるもの',
    description: '100の偏愛&クセつよ質問リスト',
    images: [
      {
        url: '/watasiicon.png',
      },
    ],
  },
}

export const viewport = {
  themeColor: '#f1f5f9',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-slate-100">{children}</body>
    </html>
  )
}