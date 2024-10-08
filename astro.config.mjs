import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// import astroI18next from "astro-i18next";
import compress from "astro-compress";

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    tailwind(),
    // astroI18next(),
    compress({
      css: true,
      html: true,
      img: true,
      js: true,
      svg: true,
    }),
  ],
  // vite: {
  //   build: {
  //     rollupOptions: {
  //       output: {
  //         manualChunks: {
  //           'astro-i18next': ['astro-i18next'],
  //         },
  //       },
  //     },
  //   },
  // },
});