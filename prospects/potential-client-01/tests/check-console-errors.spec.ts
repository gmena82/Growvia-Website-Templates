import { test } from '@playwright/test';

test('check console errors', async ({ page }) => {
  const messages: string[] = [];
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      messages.push(`[ERROR] ${msg.text()}`);
    }
  });
  
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(3000);
  
  console.log('Console errors:');
  messages.forEach(msg => console.log(msg));
  
  if (messages.length === 0) {
    console.log('No console errors found');
  }
});

