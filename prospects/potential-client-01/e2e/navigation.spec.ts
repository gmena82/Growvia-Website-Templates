import { test, expect } from "@playwright/test"

test.describe("Navigation", () => {
  test("should navigate to all main pages", async ({ page }) => {
    await page.goto("/")

    // Check home page loads
    await expect(page.getByRole("heading", { name: /professional tile installation/i })).toBeVisible()

    // Navigate to About page
    await page.getByRole("link", { name: "About Us", exact: true }).click()
    await expect(page).toHaveURL("/about")
    await expect(page.getByRole("heading", { name: /about aesthetic tile/i })).toBeVisible()

    // Navigate to Gallery page
    await page.getByRole("link", { name: "Gallery", exact: true }).click()
    await expect(page).toHaveURL("/gallery")
    await expect(page.getByRole("heading", { name: /our work/i })).toBeVisible()

    // Navigate to Contact page
    await page.getByRole("link", { name: "Contact", exact: true }).click()
    await expect(page).toHaveURL("/contact")
    await expect(page.getByRole("heading", { name: /contact us/i })).toBeVisible()

    // Navigate to Blog page
    await page.getByRole("link", { name: "Blog", exact: true }).click()
    await expect(page).toHaveURL("/blog")
    await expect(page.getByRole("heading", { name: /blog/i, exact: true })).toBeVisible()
  })

  test("should navigate to service pages from dropdown", async ({ page }) => {
    await page.goto("/")

    // Click on Services dropdown
    await page.getByRole("link", { name: "Services", exact: true }).click()

    // Should show dropdown menu on desktop or navigate on mobile
    const kitchenLink = page.getByRole("link", { name: /kitchen backsplash/i })
    await kitchenLink.click()

    await expect(page).toHaveURL("/kitchen-backsplashes")
    await expect(page.getByRole("heading", { name: /expert kitchen backsplash installation/i })).toBeVisible()
  })

  test("should have working logo link", async ({ page }) => {
    await page.goto("/about")

    await page.getByRole("link", { name: /aesthetic tile/i }).first().click()
    await expect(page).toHaveURL("/")
  })
})

