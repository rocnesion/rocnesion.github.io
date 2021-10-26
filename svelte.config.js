import adapter from '@sveltejs/adapter-static'
import process from 'svelte-preprocess'
import path from 'path'

export default {
  preprocess: process({
    scss: {
      prependData: `@use 'pre';`,
      includePaths: [path.resolve('style')]
    }
  }),

  kit: {
    adapter: adapter({ pages: '.svelte-out', assets: '.svelte-out', fallback: '404.html' }),

    files: { routes: 'route', assets: 'static', template: 'app.html' },

    vite: {
      resolve: {
        alias: {
          '~/tool': path.resolve('tool'),
          '~/asset': path.resolve('asset'),
          '~/piece': path.resolve('piece'),
          '~/style': path.resolve('style')
        }
      }
    }
  }
}
