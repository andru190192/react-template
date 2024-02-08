/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ include: '**/*.svg?react' }), react(), tsconfigPaths()],
  test: {
    threads: true,
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
      
    },
    setupFiles: ['/src/tests/setup.tsx'],
  },
})
