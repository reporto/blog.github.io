// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// import starlightLlmsTxt from "starlight-llms-txt";
// import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  output: "static", // Required for GitHub Pages
  site: "https://reporto/blog.github.io",
  integrations: [
    // starlight({
    //   //https://delucis.github.io/starlight-llms-txt/configuration/
    //   title: "blog.reporto.co",
    //   plugins: [
    //     starlightLlmsTxt({
    //       projectName: "blog.reporto.co",
    //       description:'Your AI Copilot For Earning Report Analysis'
    //     }),
    //   ],
    // }),
    mdx(),
    sitemap(),
  ],
  base: "/", // Base path for GitHub Pages
  vite: {
    plugins: [tailwindcss()],
  },
});
