import { test, expect } from "@playwright/test"

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact")
  })

  test("should display validation errors for empty form", async ({ page }) => {
    const submitButton = page.getByRole("button", { name: /send message/i })
    await submitButton.click()

    await expect(page.getByText(/name must be at least 2 characters/i)).toBeVisible()
    await expect(page.getByText(/please enter a valid email address/i)).toBeVisible()
    await expect(page.getByText(/message must be at least 10 characters/i)).toBeVisible()
  })

  test("should show error for invalid email format", async ({ page }) => {
    await page.getByLabel(/name/i).fill("John Doe")
    await page.getByLabel(/email/i).fill("invalid-email")
    await page.getByLabel(/message/i).fill("This is a test message")

    const submitButton = page.getByRole("button", { name: /send message/i })
    await submitButton.click()

    await expect(page.getByText(/please enter a valid email address/i)).toBeVisible()
  })

  test("should accept valid form data", async ({ page }) => {
    await page.getByLabel(/name/i).fill("John Doe")
    await page.getByLabel(/email/i).fill("john@example.com")
    await page.getByLabel(/message/i).fill("This is a test message for the contact form")

    // Form should be ready to submit without validation errors
    const submitButton = page.getByRole("button", { name: /send message/i })
    await expect(submitButton).toBeEnabled()

    // We won't actually submit to avoid hitting the real Formspree endpoint
    // In a real E2E test environment, you'd mock the API or use a test endpoint
  })

  test("should have all required form fields", async ({ page }) => {
    await expect(page.getByLabel(/name/i)).toBeVisible()
    await expect(page.getByLabel(/email/i)).toBeVisible()
    await expect(page.getByLabel(/message/i)).toBeVisible()
    await expect(page.getByRole("button", { name: /send message/i })).toBeVisible()
  })
})

