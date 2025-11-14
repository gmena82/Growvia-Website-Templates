import { test } from '@playwright/test';

test('take screenshot of video section', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  // Scroll to video section
  await page.evaluate(() => {
    const heading = Array.from(document.querySelectorAll('h2')).find(
      h => h.textContent?.includes('Visit Our Orlando Showroom')
    );
    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
  
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'video-section.png', clip: { x: 0, y: 200, width: 1280, height: 600 } });
  console.log('Video section screenshot saved');
});

