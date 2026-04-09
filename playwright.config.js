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
    ['line'],
    ['html', { outputFolder: 'reports/html-report', open: 'never' }],
    ['allure-playwright']
    ['junit', { outputFile: 'results.xml' }]
  ],
  use: {
    baseURL: 'https://example.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
 
});

module.exports = config;