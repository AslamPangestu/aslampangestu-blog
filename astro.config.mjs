import { defineConfig } from 'astro/config';
import prefetch from "@astrojs/prefetch";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://stargazers.club',
  integrations: [prefetch(), sitemap(), preact({ compat: true })],
  output: "server",
  adapter: vercel()
});