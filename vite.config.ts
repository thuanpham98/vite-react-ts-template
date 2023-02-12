import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
process.env = { ...process.env, ...loadEnv('', process.cwd()) };
export default defineConfig({
  
  plugins: [react()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  root: "./",

  build: {
    emptyOutDir:true,
    outDir: 'dist',
    assetsDir: "public",
    rollupOptions:{
      output:{
        manualChunks:undefined,
        chunkFileNames:`chunk-${process.env.VITE_APP_NAME}.js`,
        entryFileNames:`app-${process.env.VITE_APP_NAME}.js`,
        assetFileNames:`app-${process.env.VITE_APP_NAME}.css`,
      }
    }
  },
  publicDir: 'public',
})
