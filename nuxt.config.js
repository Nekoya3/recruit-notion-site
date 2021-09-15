const baseHost = process.env.VERCEL_URL || "http://localhost:3000";
const description =
  "見たい未来は、自分でつくる  社会を変える力は我々ひとりひとりの中にある。 世の中づくりを面白く。 ともに考え、ともにつくろう。";
const siteTitle = "Recruit - Code for Japan";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: siteTitle,
    htmlAttrs: {
      lang: "ja",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: description },
      { name: "format-detection", content: "telephone=no" },
      { hid: "og:locale", property: "og:locale", content: "ja_JP" },
      { hid: "og:type", property: "og:type", content: "article" },
      { hid: "og:url", property: "og:url", content: baseHost },
      { hid: "og:title", property: "og:title", content: siteTitle },
      { hid: "og:description", property: "og:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
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
    "nuxt-purgecss",
  ],

  fontawesome: {
    icons: {
      brands: ["faFacebookF", "faTwitter", "faFlickr", "faYoutube", "faGithub", "faSlackHash"],
    },
  },

  purgeCSS: {
    enabled: ({ isDev }) => !isDev,
    paths: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "./node_modules/vuetify/dist/vuetify.js",
    ],
    styleExtensions: [".css"],
    // whitelist: ['body', 'html', 'nuxt-progress', ''],

    whitelist: ["v-application", "v-application--wrap", "layout", "row", "col"],
    whitelistPatterns: [
      /^v-((?!application).)*$/,
      /^theme--*/,
      /.*-transition/,
      /^justify-*/,
      /^p*-[0-9]/,
      /^m*-[0-9]/,
      /^text--*/,
      /--text$/,
      /^row-*/,
      /^col-*/,
    ],
    whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--*/],

    extractors: [
      {
        extractor: (content) => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ["html", "vue", "js"],
      },
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-webfontloader", "@nuxtjs/proxy", "@nuxtjs/axios"],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    defaultAssets: {
      font: false,
    },
    treeShake: true,
  },

  webfontloader: {
    google: {
      families: ["Montserrat:400,700"],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { extractCSS: true },

  publicRuntimeConfig: {
    notionID: process.env.NOTION_ID,
    notionPageID: process.env.NOTION_PAGE_ID,
    BASE_URL: process.env.VERCEL_URL,
  },

  axios: {
    proxy: true,
  },

  proxy: {
    "/v1/": {
      target: "https://notion-api.splitbee.io",
      changeOrigin: true,
      secure: false,
    },
  },
};
