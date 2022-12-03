import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default function () {
  return defineConfig({
    plugins: [react(), legacy()],
  })
}