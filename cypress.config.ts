import { defineConfig } from "cypress";
import { seed } from './prisma/seed-test';

export default defineConfig({
    e2e: {
        experimentalStudio: true,
        setupNodeEvents(on, config) {
            // implement node event listeners here
            on('task', {
                async seedDatabase() {
                    await seed();
                    return null;
                }
            })
        },
        baseUrl: 'http://localhost:3000',
        projectId: "ut4p6u",
    },
    env: {
        login_url: '/login',
        products_url: '/products',
    },
});
