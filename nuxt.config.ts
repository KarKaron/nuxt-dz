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
