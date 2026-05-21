import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Base path para GitHub Pages: https://alejandroarroyo.github.io/portfolio/
// En local (npm run dev) se usa '/' automáticamente
const isGitHub = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  base: isGitHub ? '/portfolio/' : '/',
  integrations: [tailwind()],
});
