import { renderHook, act } from "@testing-library/react"
import { describe, it, expect, beforeEach } from "vitest"
import { useMobileMenu } from "../useMobileMenu"

describe("useMobileMenu", () => {
  beforeEach(() => {
    document.body.className = ""
  })

  it("initializes with menu closed", () => {
    const { result } = renderHook(() => useMobileMenu())

    expect(result.current.isOpen).toBe(false)
  })

  it("toggles menu open and closed", () => {
    const { result } = renderHook(() => useMobileMenu())

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(false)
  })

  it("closes menu when closeMenu is called", () => {
    const { result } = renderHook(() => useMobileMenu())

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.closeMenu()
    })

    expect(result.current.isOpen).toBe(false)
  })

  it("adds overflow-hidden class to body when menu is open", () => {
    const { result } = renderHook(() => useMobileMenu())

    act(() => {
      result.current.toggle()
    })

    expect(document.body.classList.contains("overflow-hidden")).toBe(true)
  })

  it("removes overflow-hidden class when menu is closed", () => {
    const { result } = renderHook(() => useMobileMenu())

    act(() => {
      result.current.toggle()
    })

    act(() => {
      result.current.closeMenu()
    })

    expect(document.body.classList.contains("overflow-hidden")).toBe(false)
  })
})

