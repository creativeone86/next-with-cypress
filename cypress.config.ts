import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    projectId: "sdo4zh",
  },
  env: {
    login_url: '/login',
    products_url: '/products',
  },
});
