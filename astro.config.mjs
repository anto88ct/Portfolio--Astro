// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://anto88ct.github.io',
  // Dynamic base: /Portfolio--Astro in production, / in development
  base: import.meta.env.PROD ? '/Portfolio--Astro' : '/',
});