const { test, expect } = require('@playwright/test');
const db = require('../../utils/db');

test('Validate user from DB', async () => {
  
  const result = await db.executeQuery(
    "SELECT * FROM users WHERE username = 'tomsmith'"
  );

  console.log(result);

  expect(result.length).toBeGreaterThan(0);
});