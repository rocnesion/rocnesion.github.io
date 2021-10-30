import adapter from '@sveltejs/adapter-static'
import process from 'svelte-preprocess'
import path from 'path'

export default {
  preprocess: process(),

  kit: {
    adapter: adapter({
      fallback: '404.html',
      pages: '.svelte-out',
      assets: '.svelte-out'
    }),

    files: {
      routes: 'source/route',
      assets: 'source/static',
      template: 'source/app.html'
    },

    vite: {
      server: { fs: { strict: false } },
      resolve: { alias: { '~': path.resolve('source') } }
    }
  }
}
