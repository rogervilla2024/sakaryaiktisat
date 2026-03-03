/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        casino: {
          bg: '#0A0E27',
          surface: '#141831',
          'surface-light': '#1C2142',
          border: '#2A2F52',
          gold: '#F5A623',
          'gold-light': '#FFD700',
          neon: '#00FF88',
          'neon-dim': '#00CC6A',
          red: '#FF3366',
          purple: '#8B5CF6',
          text: '#F0F0F0',
          'text-muted': '#8892B0',
          'text-dim': '#5A6380',
        }
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
