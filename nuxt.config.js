export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - recruit-notion-site",
    title: "recruit-notion-site",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/vue-notion-render.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/fontawesome",
  ],

  fontawesome: {
    icons: {
      brands: ["faFacebookF", "faTwitter", "faFlickr", "faYoutube", "faGithub", "faSlackHash"],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-webfontloader"],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    defaultAssets: {
      font: false,
    },
  },

  webfontloader: {
    google: {
      families: ["Montserrat:wght@400;700&display=swap"],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    notionID: process.env.NOTION_ID,
    notionPageID: process.env.NOTION_PAGE_ID,
  },
};
