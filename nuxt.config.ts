// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  icon: {
    customCollections: [
      {
        prefix: "icons",
        dir: "./assets/icons"
      }
    ]
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in"
    }
  },
  postcss: {
    plugins: {
      "postcss-nested": {}
    }
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/icon"
  ]
});
