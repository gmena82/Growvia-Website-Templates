import { test } from '@playwright/test';

test('take screenshot showing header transparency', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  // Take a viewport screenshot showing top of page
  await page.screenshot({ 
    path: 'header-with-background.png',
    clip: { x: 0, y: 0, width: 1280, height: 400 }
  });
  console.log('Header with background screenshot saved');
});

