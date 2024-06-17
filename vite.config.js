import { defineConfig } from 'vite';
import postcss from './postcss.config.js';

export default defineConfig({
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./styles/variables.scss";`,
        },
      },
    },
    // Otras configuraciones de Vite si es necesario
  });