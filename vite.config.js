import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// **CRUCIAL FIX:** Sets the base path for assets and scripts.
const REPO_NAME = 'Portfolio'; 

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${REPO_NAME}/`, 
  plugins: [react()],
})