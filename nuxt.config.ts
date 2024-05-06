// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
    head: {
      link: [{ rel: 'icon', href: '/jawir1.webp' }],
      title: "Rijik Clicker",
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  vite: {
    optimizeDeps: {
      include: ['howler']
    }
  }
})
