// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	output: 'static', // Required for GitHub Pages
	site: 'http://doc.luweijun.com/',
	integrations: [mdx(), sitemap()],
});
