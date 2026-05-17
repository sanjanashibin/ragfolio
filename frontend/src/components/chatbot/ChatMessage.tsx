import { motion } from 'framer-motion'

type Role = 'user' | 'assistant'

interface ChatMessageProps {
  role: Role
  content: string
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >

      <div
        className={`max-w-[80%] rounded-2xl px-5 py-3 border transition-all ${
          isUser
            ? 'bg-[#6E473B] text-[#F3ECE3] border-[#6E473B] rounded-tr-none'
            : 'bg-[#E1D4C2] text-[#291C0E] border-[#BEB5A9] rounded-tl-none'
        }`}
      >

        <div className="flex flex-col gap-1">

          <span
            className={`text-[10px] uppercase tracking-widest font-semibold opacity-60 ${
              isUser ? 'text-right text-[#F3ECE3]' : 'text-left text-[#6E473B]'
            }`}
          >
            {isUser ? 'You' : 'Assistant'}
          </span>

          <p className="text-[14.5px] leading-relaxed whitespace-pre-wrap">
            {content}
          </p>

        </div>

      </div>

    </motion.div>
  )
}