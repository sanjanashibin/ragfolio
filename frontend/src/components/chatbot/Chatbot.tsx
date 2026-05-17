import { useState, useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'
import { motion, AnimatePresence } from 'framer-motion'

type Message = { role: 'user' | 'assistant'; content: string }

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, loading])

  const handleSend = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = { role: 'user', content }
    setMessages((prev) => [...prev, userMessage])
    setLoading(true)

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api'

      const response = await fetch(`${apiBaseUrl}/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: content }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.detail || 'Failed to get an answer.')
      }

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.answer }
      ])

    } catch (error: any) {

      const errorMessage =
        error.message || 'Network error. Please make sure backend is running.'

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, I encountered an error: ${errorMessage}`
        },
      ])

    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-12 px-4 border-t border-[#BEB5A9] relative">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#A78D78] to-transparent" />

      <div className="max-w-4xl mx-auto">

        <motion.div
          layout
          initial={false}
          animate={{ height: messages.length === 0 ? 240 : 500 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="rounded-3xl border border-[#BEB5A9] bg-[#F3ECE3]/90 overflow-hidden flex flex-col shadow-xl shadow-[#A78D78]/10"
        >

          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto p-6 space-y-2 custom-scrollbar"
          >

            <AnimatePresence initial={false}>

              {messages.length === 0 ? (

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center px-4"
                >

                  <div className="w-12 h-12 rounded-xl bg-[#E1D4C2] flex items-center justify-center mb-4 border border-[#BEB5A9]">
                    <span className="text-2xl">✨</span>
                  </div>

                  <div>
                    <h3 className="text-[#291C0E] font-semibold text-lg mb-1">
                      Get to know me
                    </h3>

                    <p className="text-[#6E473B] text-sm max-w-[280px] leading-relaxed">
                      Ask about my skills, projects, education, or experience.
                    </p>
                  </div>

                </motion.div>

              ) : (

                messages.map((m, i) => (
                  <ChatMessage key={i} role={m.role} content={m.content} />
                ))

              )}

            </AnimatePresence>

            {loading && (

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start mb-4"
              >

                <div className="bg-[#E1D4C2] rounded-2xl rounded-tl-none px-5 py-3 border border-[#BEB5A9]">

                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#6E473B] rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-[#6E473B] rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-[#6E473B] rounded-full animate-bounce" />
                  </div>

                </div>

              </motion.div>

            )}

          </div>

          <ChatInput
            onSend={handleSend}
            disabled={loading}
            isFirstTime={messages.length === 0}
          />

        </motion.div>
      </div>
    </section>
  )
}