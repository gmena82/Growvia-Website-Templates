import { test } from '@playwright/test';

test('take screenshot of homepage', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'electronics-house-screenshot.png', fullPage: true });
  console.log('Screenshot saved');
});


