export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'arthurdufour.com',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global.css',
    '~/assets/css/transitions.css',
    '~/assets/css/toasts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/global-toasts.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{
    path: '~/components',
    pathPrefix: false
  }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-community/fontawesome-module
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/nuxt-community/community-modules/tree/master/packages/toast
    '@nuxtjs/toast'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // https://go.nuxtjs.dev/tailwindcss
  tailwindcss: {
    jit: true,
    exposeConfig: true
  },

  // @nuxtjs/color-mode + tailwindcss
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    storageKey: 'nuxt-color-mode'
  },

  // Fontawesome icons configuration
  fontawesome: {
    icons: {
      solid: ['faBars', 'faNewspaper', 'faBriefcase', 'faEnvelope',
        'faMoon', 'faSun'],
      brands: ['faTwitter', 'faGithub', 'faDiscord']
    }
  }
}
