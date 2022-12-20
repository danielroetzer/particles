import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
    site: 'https://danielroetzer.github.io',
    base: '/particles',
    integrations: [solidJs()],
});
