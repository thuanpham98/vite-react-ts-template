import { defineConfig,loadEnv } from 'vite';
import svgrPlugin from "vite-plugin-svgr";
import react from '@vitejs/plugin-react';
import {createHtmlPlugin} from "vite-plugin-html";

// config_prefix environment
const ENV_PREFIX = ["TE_", "SERVER"];
process.env = { ...process.env, ...loadEnv('', process.cwd(), ENV_PREFIX) };

// https://vitejs.dev/config/
export default defineConfig({
  mode: process.env.TE_MODE,
  envPrefix: ENV_PREFIX,
  envDir: process.cwd(),
  plugins: [
    react(), 
    svgrPlugin({
      svgrOptions:{
        icon:true,
      },
    }),
    createHtmlPlugin({
      minify:true,
      inject:{
        data:{
          env:{
            NODE_ENV: process.env.NODE_ENV,
            TE_HOST: process.env.TE_HOST,
            TE_LANGUAGE_URL:process.env.TE_LANGUAGE_URL,
            TE_APP_NAME:process.env.TE_APP_NAME,
          }
        }
      }
    })
],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  root: "./",

  build: {
    commonjsOptions:{
      transformMixedEsModules:true,
    },
    outDir: 'dist',
    assetsDir: "public",
    rollupOptions:{
      output:{
        manualChunks:undefined,
        chunkFileNames:`chunk-${process.env.TE_APP_NAME}.js`,
        entryFileNames:`app-${process.env.TE_APP_NAME}.js`,
        assetFileNames:`app-${process.env.TE_APP_NAME}.css`,
      }
    }
  },
  publicDir: 'public',
  clearScreen:true,
})
