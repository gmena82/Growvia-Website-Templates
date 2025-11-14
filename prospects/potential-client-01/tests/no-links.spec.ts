import { expect, test } from '@playwright/test'

test('home page exposes no navigational links', async ({ page }) => {
  await page.goto('http://localhost:3000')
  const anchorCount = await page.locator('a').count()
  const roleLinkCount = await page.getByRole('link').count()
  expect(anchorCount).toBe(0)
  expect(roleLinkCount).toBe(0)
})