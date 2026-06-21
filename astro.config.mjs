import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pesuma.com.my',
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
  }),
  integrations: [react(), markdoc(), keystatic(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
