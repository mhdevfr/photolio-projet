// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules:[
    '@nuxt/ui',
    'nuxt-icon',
    '@vueuse/motion/nuxt',
    '@nuxtjs/supabase',
    'nuxt-icon',
    'nuxt-chatgpt',
    '@formkit/auto-animate/nuxt',
  ], 
  supabase: {
    redirect: false
  },
})
