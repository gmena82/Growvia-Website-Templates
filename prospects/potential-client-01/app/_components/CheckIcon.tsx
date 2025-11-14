interface CheckIconProps {
  className?: string
}

export function CheckIcon({ className = "" }: CheckIconProps) {
  return (
    <span
      className={`flex size-8 items-center justify-center rounded-full bg-purple-500/20 text-purple-300 animate-pulse-3s ${className}`}
    >
      <svg className="size-4" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>
  )
}

