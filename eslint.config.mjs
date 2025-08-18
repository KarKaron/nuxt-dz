import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  // No unsused
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": "error",

  rules: {
    // No multi-word
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: []
      }
    ]
  }
});
