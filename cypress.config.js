const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dvnv6z',
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
