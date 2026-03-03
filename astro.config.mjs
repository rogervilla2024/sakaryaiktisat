import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://sakaryaiktisat.com',
  integrations: [tailwind(), sitemap(), mdx()],
  output: 'static',
  markdown: {
    shikiConfig: { theme: 'dracula' }
  }
});
