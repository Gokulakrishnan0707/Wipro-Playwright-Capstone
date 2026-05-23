const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: true,

  retries: 1,

  use: {
    baseURL: 'https://www.thesouledstore.com',

    headless: false,

    screenshot: 'only-on-failure',

    trace: 'on-first-retry',

    video: 'retain-on-failure'
  },

  reporter: [
    ['html', { outputFolder: 'reports' }]
  ]
});

