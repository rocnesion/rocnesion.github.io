export default {
  target: 'static',

  generate: { fallback: true, dir: '.dist' },

  buildModules: ['nuxt-windicss'],

  css: ['~/style/font.css', '~/style/main.css'],

  components: [{ path: '~/piece/', prefix: 'c' }],

  dir: { pages: 'page', assets: 'asset', static: 'static', layouts: 'layout' },

  head: {
    title: 'Altay',

    meta: [
      { charset: 'utf-8' },

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { name: 'description', content: 'A software developer and digitalart lover' }
    ],

    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  }
}
