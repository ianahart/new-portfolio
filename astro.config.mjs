import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ianalexhart.com',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: 'prism',
  },
});
