import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '自問自答対話録',
    short_name: '対話録',
    description: '自らの美学・存在・思考の深淵と静かに向き合う対話録アプリ',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F9FA',
    theme_color: '#1E293B',
    icons: [
      {
        src: '/icon-watasiaicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-watasiicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}