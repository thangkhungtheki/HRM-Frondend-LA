

require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-bootstrap-template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&family=Open+Sans:ital,wght@0,300;0,400;1,300;1,600&display=swap' },
      { rel: 'stylesheet', href: '/css/icons.css',type: 'text/css' },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" }
    ],
    script: [
       {
        src: '/pako.min.js'
      },
      {
        src: '/jwplayer.js'
      },
      {
        src: 'https://cdn.jwplayer.com/libraries/hwjB6n5l.js',
        // async: true,
      },
      
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // đây là cookies chỉ chạy đc ở phía client
    // ko cần xài plugin này lun
    // { src: '@/plugins/initAuth', mode: 'client' } 
    '@/plugins/eventbus.js',
    { src: '@/plugins/vue-notification.js', mode: 'client' } ,
    '~/plugins/axios.js'
   
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    // ['cookie-universal-nuxt', { alias: 'cookiz' }]
    // '@nuxtjs/auth-next'
    
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev , isClient }) {
      if (isClient && !isDev) {
        config.optimization.splitChunks.maxSize = 250000
      }
    },
    babel: {
      compact: true,
     },
  },
  configureWebpack:{
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
},
  server: {
    host: '0.0.0.0',
    port: 3000
  },

  // loading: '~/components/LoadingBar.vue',
  
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#3B8070',
  //   background: 'white',
  //   throttle: 0
  // }
  loading: {
    color: 'aqua',
    height: '20px'
  },

  serverMiddleware: [
    // Đăng ký middleware từ một file
    { path: '/api', handler: '~/server/api.js' },
    { path: '/film/api', handler: '~/server/fetch_m3u8.js' },
    { path: '/express', handler: '~/server/express.js' },
     '~/server/Globalvarible.js'
    // '@/server/checkserver.js'
  ],

  
  router: {
    // middleware: ["route"]
    // middeware: ['initAuth']
  },

  env: {
    BASE_URL : process.env.BASE_URL || 'http://127.0.0.1:3000',
    BACKEND_URL : process.env.BACKEND_URL || 'http://127.0.0.1:4000',
    SOCKET_URL : process.env.SOCKET_URL || 'http://127.0.0.1:4500'
  },
  
  
}


