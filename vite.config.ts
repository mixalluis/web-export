import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about/index.html'),
          products: path.resolve(__dirname, 'products/index.html'),
          vanilla: path.resolve(__dirname, 'products/indonesian-vanilla-beans/index.html'),
          charcoal: path.resolve(__dirname, 'products/coconut-shell-briquette-charcoal/index.html'),
          coffee: path.resolve(__dirname, 'products/indonesian-green-coffee-beans/index.html'),
          cloves: path.resolve(__dirname, 'products/indonesian-whole-cloves/index.html'),
          logistics: path.resolve(__dirname, 'logistics/index.html'),
          contact: path.resolve(__dirname, 'contact/index.html'),
          privacy: path.resolve(__dirname, 'privacy/index.html'),
          notFound: path.resolve(__dirname, '404.html'),
        },
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

