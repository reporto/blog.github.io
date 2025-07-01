// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    	output: 'static', // Required for GitHub Pages
	site: 'https://reporto/blog.github.io',
	integrations: [mdx(), sitemap()],
    vite: {
        plugins: [tailwindcss()]
    }
});