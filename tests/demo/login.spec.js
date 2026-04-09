import { test, expect } from '@playwright/test';
import {LoginPage } from '../../pages/LoginPage';
import fs from 'fs';
import { parse } from 'csv-parse/sync';
const allure = require('allure-playwright').allure;

parse(fs.readFileSync('./testdata/userInfo.csv'), {
    columns: true,
    skip_empty_lines: true
}, function(err, records) {
    console.log('CSV Data:', records);
});

test('test', async ({ page }) => {

  const login = new LoginPage(page);

  await login.gotologinpage();
  await login.login('user.Username', 'user.password');

    // Attach screenshot manually
  const screenshot = await page.screenshot();
  await allure.attachment('Login Page Screenshot', screenshot, 'image/png');

  
  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByRole('textbox', { name: 'Username' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: 'Login' }).click();
});