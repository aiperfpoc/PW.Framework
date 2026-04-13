import { defineConfig } from '@playwright/test';

const config = defineConfig({
  testDir: './tests/demo',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
  ['html'],
  ['list'],
  ['junit', { outputFile: 'results.xml' }],
  ['allure-playwright'],
],
  testIgnore: ['tests/demo/dbTest.spec.js'],  // ✅ FIXED
  use: {
    baseURL: 'https://example.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
 
});

module.exports = config;