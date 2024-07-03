// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  meta: {
    title: "GFS Esport"
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/css/main.scss'],
  modules: [['@nuxtjs/google-fonts', {
    families: {
      'Josefin+Sans': true,
      'Montserrat' : true,
      'Black+Han+Sans':true
    }
  }], 'nuxt-icon', "@nuxt/image"]
})