import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { ContactForm } from "../ContactForm"

// Mock fetch
global.fetch = vi.fn()

describe("ContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders form fields correctly", () => {
    render(<ContactForm subject="Test Subject" />)

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument()
  })

  it("shows validation errors for empty fields", async () => {
    const user = userEvent.setup()
    render(<ContactForm subject="Test" />)

    const submitButton = screen.getByRole("button", { name: /send message/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument()
    })
  })

  it("shows validation error for invalid email", async () => {
    const user = userEvent.setup()
    render(<ContactForm subject="Test" />)

    const emailInput = screen.getByLabelText(/email/i)
    await user.type(emailInput, "invalid-email")

    const submitButton = screen.getByRole("button", { name: /send message/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument()
    })
  })

  it("submits form successfully with valid data", async () => {
    const user = userEvent.setup()
    ;(global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    })

    render(<ContactForm subject="Test Subject" />)

    await user.type(screen.getByLabelText(/name/i), "John Doe")
    await user.type(screen.getByLabelText(/email/i), "john@example.com")
    await user.type(screen.getByLabelText(/message/i), "This is a test message for the form")

    const submitButton = screen.getByRole("button", { name: /send message/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/thanks! your message has been sent/i)).toBeInTheDocument()
    })
  })
})

