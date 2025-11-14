import { test } from '@playwright/test';

test('take screenshot of new header', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'new-header-screenshot.png', clip: { x: 0, y: 0, width: 1280, height: 200 } });
  console.log('Header screenshot saved');
});

