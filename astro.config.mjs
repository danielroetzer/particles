import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    site: 'https://danielroetzer.github.io',
    base: '/particles',
    integrations: [solidJs(), svelte(), sitemap()],
});
