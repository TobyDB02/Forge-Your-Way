import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    //base: '/',
    base: '/wp-content/uploads/app',
    plugins: [react()],
})
