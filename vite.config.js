import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {find: '#', replacement: path.join(__dirname, './')},
      {find: 'src', replacement: path.join(__dirname, './src')},
      {find: 'assets', replacement: path.join(__dirname, './src/assets')},
      {
        find: 'components',
        replacement: path.join(__dirname, './src/components'),
      },
      {find: 'pages', replacement: path.join(__dirname, './src/pages')},
      {
        find: 'awesome',
        replacement:
          path.join(__dirname, './node_modules/@fortawesome/fontawesome-free'),
      },
      {
        find: 'navbar',
        replacement: path.join(__dirname, './src/components/navbar'),
      },
    ],
  },
  optimizeDeps: {
    link: ['navbar'],
    // include
  },
});
