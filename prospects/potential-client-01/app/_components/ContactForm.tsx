"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const BASE_SCHEMA = z.object({
  name: z.string().trim().min(2, "Please enter at least two characters"),
  email: z.string().trim().email("Enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more about your project"),
})

const PHONE_SCHEMA = z.object({
  phone: z
    .string()
    .trim()
    .regex(/^[0-9()+\-\s]*$/, "Only numbers and basic phone characters allowed")
    .min(10, "Enter a valid phone number"),
})

type ContactFormValues = z.infer<typeof BASE_SCHEMA> & {
  phone?: string
}

type ContactFormProps = {
  showPhone?: boolean
  subject?: string
  className?: string
}

export function ContactForm({
  showPhone = false,
  subject = "Aesthetic Tile - New Website Inquiry",
  className,
}: ContactFormProps) {
  const schema = showPhone ? BASE_SCHEMA.merge(PHONE_SCHEMA) : BASE_SCHEMA
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
  })

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const onSubmit = handleSubmit(async (data) => {
    try {
      setStatus("idle")

      const payload = {
        ...data,
        _subject: subject,
      }

      const response = await fetch("https://formspree.io/f/mzzjzbpk", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error("Form submission failed")

      reset()
      setStatus("success")
    } catch (error) {
      console.error(error)
      setStatus("error")
    }
  })

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg",
        className,
      )}
    >
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          {...register("name")}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
          placeholder="you@email.com"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {showPhone && (
        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            placeholder="(555) 555-5555"
          />
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      )}

      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          rows={showPhone ? 5 : 4}
          {...register("message")}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
          placeholder="Tell us about your project"
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        name="_gotcha"
        aria-hidden="true"
      />

      <div className="space-y-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-sm text-purple-600">Thanks! Your message has been sent.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600">Sorry - something went wrong. Please try again or email us directly.</p>
        )}
      </div>
    </form>
  )
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

