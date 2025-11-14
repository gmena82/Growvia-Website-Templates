import { test } from '@playwright/test';

test('take screenshot of header', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  const header = await page.locator('header');
  await header.screenshot({ path: 'header-only.png' });
  console.log('Header screenshot saved');
});

