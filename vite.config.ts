import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 资料库页面以静态文件方式托管，必须保证产物内所有资源都是相对路径
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    emptyOutDir: true,
  },
})
