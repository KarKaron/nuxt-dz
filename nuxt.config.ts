// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    token: "",
    public: {
      apiUrl: process.env.NUXT_PUBLIC_URL
    }
  },
  postcss: {
    plugins: {
      "postcss-nested": {}
    }
  },
  app: {
    head: {
      titleTemplate: "%s | VoteApp",
      htmlAttrs: {
        lang: "ru"
      }
    },
    pageTransition: {
      name: "page",
      mode: "out-in"
    }
  },
  icon: {
    customCollections: [
      {
        prefix: "icons",
        dir: "./assets/icons"
      }
    ]
  },
  routeRules: {
    "./posts": { prerender: true }
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/icon",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt"
  ]
});
