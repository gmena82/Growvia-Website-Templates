import { test } from '@playwright/test';

test('take full page screenshot', async ({ page }) => {
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  await page.screenshot({ 
    path: 'full-page-view.png',
    fullPage: false
  });
  console.log('Full page screenshot saved');
});

