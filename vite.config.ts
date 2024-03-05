import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import laravel from 'laravel-vite-plugin';
import replace from '@rollup/plugin-replace';
import tsconfigPaths from 'vite-tsconfig-paths';

// Custom plugin to modify the base path (you can remove this if not needed)
function basePath(): Plugin {
  return {
    name: 'basePath',
    enforce: 'post',
    config: () => ({
      base: '', // Set the base path here as needed
    }),
  };
}

export default defineConfig({
  base: '',
  resolve: {
    preserveSymlinks: true,
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['puppeteer', 'ioredis'], // Exclude these dependencies from bundling
    },
  },
  plugins: [
    tsconfigPaths(),
    react(),
    laravel({
      input: ['resources/client/main.tsx'],
      ssr: ['resources/client/server-entry.tsx'],
      refresh: false,
    }),
    // Apply the custom base path plugin (you can remove this if not needed)
    basePath(),
    replace({
      preventAssignment: true,
      __SENTRY_DEBUG__: false, // Replace __SENTRY_DEBUG__ with false
    }),
  ],
});
