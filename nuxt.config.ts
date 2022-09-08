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
    epsilonControllerHost: process.env.EPSILON_CONTROLLER_HOST || 'localhost:8000',
    epsilonTemplateHost: process.env.EPSILON_TEMPLATE_HOST || 'localhost:8100',
    
    public: {
      domain: process.env.DOMAIN || 'epsilon-srv.me',
    }
  }
})
