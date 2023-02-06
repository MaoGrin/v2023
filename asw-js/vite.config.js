import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入windicss
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),WindiCSS()],
})
