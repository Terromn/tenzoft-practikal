// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  server: {
    host: '0.0.0.0'
  },
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),

  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'motion-vendor': ['framer-motion'],
          },
        },
      },
    },
  },
  compressHTML: true,
  site: 'https://practikal.com.mx',
});
