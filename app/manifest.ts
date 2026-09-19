import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'watasiwo かたちづくるもの',
    short_name: '偏愛Tool',
    description: 'わたしをかたちづくるもの 偏愛Tool',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f1f5f9',
    icons: [
      {
        src: '/watasiicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/watasiicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}