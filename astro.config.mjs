import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
    site: 'https://danielroetzer.github.io',
    base: '/particles',
    trailingSlash: 'always',
    integrations: [solidJs(), svelte(), sitemap(), prefetch()],
});
