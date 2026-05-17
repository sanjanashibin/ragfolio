import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'

interface ChatInputProps {
  onSend: (message: string) => void
  disabled?: boolean
  isFirstTime?: boolean
}

export function ChatInput({ onSend, disabled, isFirstTime }: ChatInputProps) {
  const [value, setValue] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const trimmed = value.trim()

    if (trimmed && !disabled) {
      onSend(trimmed)
      setValue('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-[#F3ECE3] border-t border-[#BEB5A9] flex gap-3 relative"
    >

      <motion.div
        className="flex-1 relative"
        animate={isFirstTime ? {
          boxShadow: [
            "0 0 0px 0px rgba(167, 141, 120, 0)",
            "0 0 18px 2px rgba(167, 141, 120, 0.25)",
            "0 0 0px 0px rgba(167, 141, 120, 0)"
          ]
        } : {}}
        transition={isFirstTime ? {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        } : {}}
        style={{ borderRadius: '12px' }}
      >

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask anything about the portfolio..."
          disabled={disabled}
          className="w-full bg-[#E1D4C2] border border-[#BEB5A9] rounded-xl px-4 py-3 text-sm text-[#291C0E] placeholder:text-[#A78D78] focus:outline-none focus:ring-2 focus:ring-[#A78D78]/40 transition-all"
        />

      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={disabled || !value.trim()}
        className="bg-[#A78D78] hover:bg-[#6E473B] disabled:bg-[#D8C8B8] disabled:text-[#A78D78] text-[#F3ECE3] rounded-xl px-5 py-3 text-sm font-semibold transition-colors"
      >
        Send
      </motion.button>

    </form>
  )
}