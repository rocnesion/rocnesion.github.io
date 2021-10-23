export default {
  preflight: { enableAll: true },

  theme: {
    screens: { sm: '40rem' },

    lineHeight: { 'md': '1.6' },

    letterSpacing: { no: '0', md: '.2em' },

    container: { center: true, padding: '1rem' },

    fontFamily: { sans: ['sans', 'sans-serif'] },

    fontWeight: { thin: 200, semi: 400, bold: 600 },

    borderRadius: { sm: '.125rem', md: '.25rem', lg: '.375rem' },

    fontSize: { xs: '.75rem', sm: '.875rem', md: '1.125rem', lg: '1.5rem', xl: '2rem' },

    colors: {
      current: 'currentcolor',
      transparent: 'transparent',

      base: {
        '08': '#131416',
        '16': '#26282C',
        '24': '#383C42',
        '32': '#4B5058',
        '40': '#5E646E',
        '48': '#717884',
        '56': '#868D98',
        '64': '#9CA2AB',
        '72': '#B2B6BD',
        '80': '#C8CBD0',
        '88': '#DEE0E3',
        '96': '#F4F5F6'
      }
    }
  },

  extract: {
    include: ['**/*.vue', '**/*.css'],
    exclude: ['node_modules', '.nuxt', '.dist', '.git']
  }
}
