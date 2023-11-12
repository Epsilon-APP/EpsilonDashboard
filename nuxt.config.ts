import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
  autoImports: {
    dirs: ['./stores', './epsilon']
  },
  ssr: false,
  tailwindcss: {
    config: {
      content: [],
      plugins: [require('daisyui')]
    }
  },
  runtimeConfig: {
    epsilonControllerHost: process.env.HOST_CONTROLLER != null ? `${process.env.HOST_CONTROLLER}:8000` : 'localhost:8000',
    epsilonTemplateHost: process.env.HOST_TEMPLATE != null ? `${process.env.HOST_TEMPLATE}:8000` : 'localhost:8000',
    
    public: {
      domain: process.env.DOMAIN || 'epsilon-srv.me',
    }
  }
})
