export const SITE = {
  title: 'Slot Taktikleri',
  description: 'Slot taktikleri, casino stratejileri ve oyun incelemeleri — Matematiksel analiz ve profesyonel rehberlerle bilinçli oynayın.',
  url: 'https://sakaryaiktisat.com',
  author: 'Slot Taktikleri Editör',
  lang: 'tr',
};

export const NAV_LINKS = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Taktikler', href: '/kategori/strateji' },
  { label: 'İncelemeler', href: '/kategori/inceleme' },
  { label: 'Rehberler', href: '/kategori/temel-bilgi' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
];

export const CATEGORIES = {
  'temel-bilgi': { label: 'Temel Bilgi', color: 'bg-blue-500' },
  'strateji': { label: 'Strateji', color: 'bg-casino-gold' },
  'inceleme': { label: 'İnceleme', color: 'bg-casino-neon' },
  'ileri-duzey': { label: 'İleri Düzey', color: 'bg-casino-purple' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
